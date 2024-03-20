import { useState } from "react";
import TagButton from "./serviceCard/TagButton";
import TagInfo from "./serviceCard/TagInfo";

export default function Service() {
  const [tagValue, setTagValue] = useState(1);

  return (
    <section>
      <h1 className=" text-[26px] sm:text-[35px] md:text-[40px] lg:text-[50px] my-2 sm:my-4 md:my-8">
        Service
      </h1>
      <div className="flex justify-center gap-6 sm:gap-12 md:gap-16 ">
        <TagButton text={"kit"} onClick={() => setTagValue(1)} />
        <TagButton text={"Diary"} onClick={() => setTagValue(2)} />
        <TagButton text={"Mall"} onClick={() => setTagValue(3)} />
      </div>
      <div className="w-full h-24 my-4">
        <TagInfo tagValue={tagValue} />
      </div>
    </section>
  );
}
