import PropTypes from "prop-types";

export default function ProductDetail({ product }) {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <img src={product?.image} alt="image" /> */}
      <div>
        <h3>{product?.name}</h3>
        <h4>{product?.price}</h4>
        <h5>{product?.description}</h5>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.string.isRequired,
};
