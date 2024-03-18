import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import vector from "../../assets/icons/vector.png";

export default function Banner() {
  return (
    <section>
      <img src={banner} alt="banner" style={{ maxWidth: "1024px" }} />
      <div>
        <div>
          <p>we support</p>
          <p>every baby's first step</p>
        </div>
        <img src={vector} alt="vector" />
        <Link to="/kit">Bebe Kit</Link>
      </div>
    </section>
  );
}
