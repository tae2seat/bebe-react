import ProductDetailCard from "../../components/mall/ProductDetailCard";
import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const param = useParams();
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

  return (
    <section>
      <h1>제품 상세 페이지</h1>
      <ProductDetailCard />
    </section>
  );
}
