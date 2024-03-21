import { useNavigate, useParams } from "react-router-dom";
import ProductDetailCard from "../../components/mall/ProductDetailCard";
import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios";
import PropTypes from "prop-types";
import MyCart from "../../components/mall/MyCart";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const response = await loggedApi.get(`mall/item/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cartItems);
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      // 상품이 이미 장바구니에 존재하는 경우
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    } else {
      // 상품이 장바구니에 존재하지 않는 경우
      const item = {
        ...product,
        quantity: 1,
      };
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex flex-col md:flex-row p-4">
      <h2 className="text-center text-2xl font bold py-8">제품 상세페이지</h2>
      <ProductDetailCard product={product} />
      {/* {isAdmin && userRole === "admin" && (
        <button onClick={goToEdit}>제품 수정하기</button>
      )} */}
      <button onClick={() => addToCart(product)}>장바구니 추가</button>
      <MyCart />
    </section>
  );
}
ProductDetail.propTypes = {
  product: PropTypes.string.isRequired,
};
