export default function Footer() {
  return (
    <div className="flex flex-col justify-around bg-black text-white p-5 ">
      <div className="flex justify-around items-start">
        <div>
          <h2 className="text-sm mb-2">Bebe Family</h2>
          <p className="text-xs">다이어리</p>
          <p className="text-xs">키트</p>
          <p className="text-xs">베베몰</p>
        </div>
        <div>
          <h2 className="text-sm mb-2">인재영입</h2>
          <p className="text-xs">직무 소개</p>
          <p className="text-xs">회사 지원하기</p>
        </div>
        <div>
          <h2 className="text-sm mb-2">고객센터</h2>
          <p className="text-xs">모바일 고객센터</p>
          <p className="text-xs">유선 고객센터</p>
        </div>
        <div>
          <h2 className="text-sm mb-2">문의</h2>
          <p className="text-xs">사업 제휴</p>
          <p className="text-xs">광고 문의</p>
        </div>
      </div>

      <div className="mt-4 text-end pr-4">
        <h2 className="text-sm mb-2">베베(주)</h2>
        <div>
          <p className="text-xs">사업자 등록번호: 000-00-00000</p>
          <p className="text-xs">대표이사: 김 혜 영 </p>
        </div>
        <p className="text-xs">https://diary.mybebe.net/</p>
      </div>
    </div>
  );
}
