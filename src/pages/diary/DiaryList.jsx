import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios/index";

export default function DiaryList() {
  const [diaries, setDiaries] = useState();

  useEffect(() => {
    getDiaries();
  }, []);

  const getDiaries = async () => {
    try {
      const response = await loggedApi("diary", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setDiaries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!diaries) return <p>Loading...</p>;

  return (
    <section>
      {diaries.length > 0 ? (
        <div>
          {diaries.map((diary) => (
            <p key={diary.id}>{diary.title}</p>
          ))}
        </div>
      ) : (
        <div>
          <h1>없음</h1>
        </div>
      )}
    </section>
  );
}
