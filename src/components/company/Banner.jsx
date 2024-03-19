import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import vector from "../../assets/icons/vector.png";

export default function Banner() {
  return (
    <section className="relative">
      <img src={banner} alt="banner" />
      <div className="absolute bottom-4 w-full flex justify-between items-center pl-5 pr-7">
        <div className="text-start text-xl text-white">
          <p>we support</p>
          <p>every baby's first step</p>
        </div>
        <img className="w-10 h-4 mt-6" src={vector} alt="vector" />
        <Link className="mt-7" to="/kit">
          Bebe Kit
        </Link>
      </div>
    </section>
  );
}
