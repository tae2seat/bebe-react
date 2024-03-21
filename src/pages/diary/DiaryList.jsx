import { useEffect, useState } from "react";
import { loggedApi } from "../../api/axios/index";

export default function DiaryList() {
  const [diaries, setDiaries] = useState([]);

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
      console.log(response.data);
      setDiaries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  if (!diaries) return <p>Loading...</p>;

  return (
    <section>
      <div>
        {/* {diaries?.map((diary) => (
          <p key={diary?.id}>{diary}</p>
        ))} */}
      </div>
    </section>
  );
}
