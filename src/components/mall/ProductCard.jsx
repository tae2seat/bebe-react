import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ item }) {
  const navigate = useNavigate();
  const productId = item.id;
\
  const goToProductDetail = () => {
    navigate(`/product/${productId}/detail`);
  };
  return (
    <ul onClick={goToProductDetail}>
      <li>
        {/* <img src={item.image} alt="productImg" /> */}
        <div>
          <h3>{item.name}</h3>
          <h5>{item.price}원</h5>
          <h5>{item.categoryName}</h5>
          <h5>{item.description}</h5>
        </div>
      </li>
    </ul>
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
