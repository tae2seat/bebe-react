import { Link } from "react-router-dom";
import banner from "../assets/banner.png";
import vector from "../assets/icons/vector.png";

export default function Banner() {
  return (
    <section>
      <img src={banner} alt="banner" />
      <div>
        <div>
          <p>
            we support <br /> every baby's first step
          </p>
        </div>
        <img src={vector} alt="vector" />
        <Link to="/kit">Bebe Kit</Link>
      </div>
    </section>
  );
}
