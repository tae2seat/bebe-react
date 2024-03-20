import CrewBox from "./crewCard/CrewBox";

export default function Crew() {
  return (
    <section>
      <h1 className="text-[26px]">Crew</h1>
      <p>
        우리는 누구나 리더가 될 수 있고,
        <br />
        자유롭게 의견을 공유하며,
        <br />
        서로 좋은 영향을 주며 일합니다.
      </p>
      <p>베베 크루들이 일하는 이야기</p>
      <CrewBox />
    </section>
  );
}
