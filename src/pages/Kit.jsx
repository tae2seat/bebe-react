import banner from "../assets/banner.png";
import kit from "../assets/items/bebekit.png";
import bebe from "../assets/items/bbe.png";

export default function Kit() {
  return (
    <section>
      <video width="1024" height="720" muted={false} controls poster={banner}>
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col items-center pb-10 bg-brand6">
        <img src={kit} alt="kit" className="" />
        <p className="text-xs bottom-2 px-3 bg-brand6 w-full h-16 ">
          아이의 첫 시작을 Bebe가 응원합니다.
          <br />
          "Bebekit"는 산모와 아이에게 필요한 용품과 정보가 20가지 들어있는
          상자이자 브랜드 그 자체를 의미합니다.
        </p>
      </div>
    </section>
  );
}
