import PropTypes from "prop-types";

export default function ProductDetail({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col items-center md:flex-row-reverse">
      <img src={product?.image} alt="image" className="w-64 h-64 mb-10" />
      <div className="mb-10">
        <h3 className="text-2xl">{product?.name}</h3>
        <h4 className="text-lg">{product?.price}</h4>
        <h5 className="text-lg">{product?.description}</h5>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.string.isRequired,
};
