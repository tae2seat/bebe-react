import CrewBox from "./crewCard/CrewBox";

export default function Crew() {
  return (
    <section>
      <h1 className="text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] my-4 sm:my-4 md:my-8">
        Crew
      </h1>
      <p className="text-xs">
        우리는 누구나 리더가 될 수 있고,
        <br />
        자유롭게 의견을 공유하며,
        <br />
        서로 좋은 영향을 주며 일합니다.
      </p>
      <p className="text-[16px] my-4">베베 크루들이 일하는 이야기</p>
      <CrewBox />
    </section>
  );
}
