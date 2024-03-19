import PropTypes from "prop-types";

export default function ProductCard({ item }) {
  return (
    <ul>
      <li>
        {/* <img src={item.image} alt="productImg" /> */}
        <div>
          <h3>{item.name}</h3>
          <h5>{item.price}원</h5>
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
    // 추가적으로 필요한 프로퍼티들을 여기에 추가할 수 있습니다.
  }).isRequired,
};
