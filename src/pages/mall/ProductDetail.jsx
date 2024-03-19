import { useNavigate, useParams } from "react-router-dom";
import ProductDetailCard from "../../components/mall/ProductDetailCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios";
import PropTypes from "prop-types";

export default function ProductDetail() {
  const { id } = useParams();
  const { isAdmin, userRole } = useSelector((state) => state.auth);
  const navigate = useNavigate();

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

  const goToEdit = () => {
    navigate(`/product/${id}/edit`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>제품 상세 페이지</h1>
      <ProductDetailCard product={product} />
      {isAdmin && userRole === "admin" && (
        <button onClick={goToEdit}>제품 수정하기</button>
      )}
    </section>
  );
}
ProductDetail.propTypes = {
  product: PropTypes.string.isRequired,
};
