import { useState } from "react";

export default function CrewBox() {
  const crews = [
    {
      id: 1,
      name: "Stella",
      job: "Frontend 개발",
      info: '"늘 갈망하고 바보처럼 도전하라."',
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Mark",
      job: "Backtend 개발",
      info: '"베베에서 인생 팀을 만났다!"',
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Willy",
      job: "BX 디자인",
      info: '"즐겁게 성장하자"',
      image:
        "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg",
    },
    {
      id: 4,
      name: "silver jin",
      job: "총무, 회계",
      info: '"He who laughs, lasts!"',
      image:
        "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "delay",
      job: "제품 디자인",
      info: '"인생은 속도가 아니라 방향이다"',
      image:
        "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
    },
    {
      id: 6,
      name: "kim brave",
      job: "마케팅",
      info: '"어디를 가든지 마음을 다해간다!"',
      image:
        "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      name: "riverside sun",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/3251703/pexels-photo-3251703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 8,
      name: "water jin",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/2231132/pexels-photo-2231132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 9,
      name: "sun zero",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/3323208/pexels-photo-3323208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 10,
      name: "Eden",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/12598760/pexels-photo-12598760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 11,
      name: "west zero",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/7752676/pexels-photo-7752676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 12,
      name: "rabbit",
      job: "인사관리",
      info: '"행복한 하루!"',
      image:
        "https://images.pexels.com/photos/9461756/pexels-photo-9461756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  const crewsList = crews.map((crews) => (
    <div key={crews.id}>
      <div>
        <img src={crews.image} alt="크루 이미지" />
      </div>
      <div>
        <p>{crews.name}</p>
        <p>{crews.job}</p>
        <p>{crews.info}</p>
      </div>
    </div>
  ));

  const [more, setMore] = useState(false);

  const onClickHandler = () => {
    setMore(!more);
  };

  return (
    <div>
      <div>{crewsList.splice(0, 6)}</div>
      {more === true ? <div> {crewsList.splice(0, 6)} </div> : null}
      <div>
        {more === true ? (
          <button onClick={onClickHandler}> 간편하게 보기</button>
        ) : (
          <button onClick={onClickHandler}> 더 알아보기</button>
        )}
      </div>
    </div>
  );
}
