import ProductCard from "../../components/mall/ProductCard";
import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios";

export default function AllProducts() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await loggedApi("mall/item", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setProducts(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  if (!products) return <p>Loading...</p>;

  return (
    <section>
      <h1>전체 상품</h1>
      {products?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}
