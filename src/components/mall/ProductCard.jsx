import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const productId = item.id;

  const goToProductDetail = () => {
    navigate(`/product/${productId}`);
  };
  return (
    <div onClick={goToProductDetail} className="border rounded-xl">
      <img
        src={item.image}
        alt="productImg"
        className="w-64 h-64 p-2 rounded-xl"
      />
      <h3 className="text-sm my-1">{item.name}</h3>
      <h5 className="text-xs mt-1">{item.price}원</h5>
      <h5 className="text-[10px] mb-1">{item.description}</h5>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,

    // 추가적으로 필요한 프로퍼티들을 여기에 추가할 수 있습니다.
  }).isRequired,
};
