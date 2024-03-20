import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import vector from "../../assets/icons/vector.png";

export default function Banner() {
  return (
    <section className="relative">
      <img src={banner} alt="banner" />
      <div className="absolute bottom-2 lg:bottom-6 w-full flex justify-center items-center gap-5 lg:gap-8">
        <div className="text-start text-[26px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] text-white shrink-0">
          <p>we support</p>
          <p>every baby's first step</p>
        </div>
        <img
          className="w-12 h-5 mt-9 sm:w-20 sm:h-8 sm:mt-12 md:w-24 md:h-10 md:mt-16 lg:w-28 lg:h-10 lg:mt-20 animate-pulse "
          src={vector}
          alt="vector"
        />
        <Link
          className="mt-9 sm:mt-12 md:mt-16 lg:mt-20 rounded-[50px] bg-red-400 hover:bg-red-50"
          to="/kit"
        >
          <p className="text-md px-2 mt-1 sm:text-2xl sm:px-3 sm:py-1 md:text-3xl md:px-4 lg:text-4xl lg:px-5 lg:py-2 text-white hover:text-red-400">
            Bebe Kit
          </p>
        </Link>
      </div>
    </section>
  );
}
