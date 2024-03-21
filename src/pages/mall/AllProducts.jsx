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
      <div className="border-y border-brand1 bg-brand5 py-10">
        <p className="text-xl text-brand1 ">Shop with Us</p>
        <p className="text-3xl text-brand1">Best Products, High Quality</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 m-10">
        {products?.map((item) => (
          <div key={item.id} className="flex items-center justify-center ">
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
