export default function TagInfo({ tagValue }) {
  switch (tagValue) {
    case 1:
      return (
        <div>
          <p>
            Bebe Kit는 아이와 산모에게 필수적인 용품과
            <br /> 책자가 들어있는 상자입니다.
          </p>
          <p>
            우리는 모든 아기의 첫시작을 응원하기 위해
            <br /> 베베키트를 필요로 하는 곳에 전달합니다.
          </p>
        </div>
      );
    case 2:
      return (
        <div>
          <p className="pt-6">
            우리 아이의 성장을 Bebe Diary와 함께 기록하고 관리하세요
          </p>
          <p>소중한 장면을 같이 또 따로 기억될 수 있도록 도와줄게요.</p>
        </div>
      );
    case 3:
      return (
        <div className="pt-6">
          <p>아이용품 Bebe Mall에서 구입하세요</p>
          <p>Best Products, High Quality</p>
        </div>
      );
    default:
      return (
        <div>
          <p>
            Bebe Kit는 아이와 산모에게 필수적인 용품과 책자가 들어있는
            상자입니다.
          </p>
          <p>
            우리는 모든 아기의 첫시작을 응원하기 위해 베베키트를 필요로 하는
            곳에 전달합니다.
          </p>
        </div>
      );
  }
}
