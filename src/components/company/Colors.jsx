import ColorBox from "./colorCard/ColorBox";

export default function Colors() {
  return (
    <section>
      <h1 className="text-[26px]">Brand Color system</h1>
      <p>
        "베베"의 <span>컬러시스템</span>을 통해 브랜드를 조금 더 명확하고
        <br />
        통일시켜 소비자의 혼란을 줄여줍니다.
      </p>
      <h1 className="text-[26px]">Colors</h1>
      <ColorBox />
      <span>색 위에 마우스를 올리면 색 고유번호를 알 수 있습니다.</span>
    </section>
  );
}
