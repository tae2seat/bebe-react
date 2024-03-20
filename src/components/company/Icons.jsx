import IconsBox from "./iconCard/IconsBox";

export default function Icons() {
  return (
    <section>
      <h1 className=" text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] my-4 sm:my-4 md:my-8">
        Brand Value
      </h1>
      <p className="text-xs">
        "베베"는 우리의 서비스를 누구나 잘 이해하고
        <br />
        가치를 공유하며, 나아가기를 희망합니다.
        <br />
        우리의 <span>아이콘</span>은 그것에 대한 첫 제시이며,
        <br />더 쉽고 편한 시작이 되기를 바랍니다.
      </p>
      <h1 className="text-[20px] my-4">Icons</h1>
      <IconsBox />
    </section>
  );
}
