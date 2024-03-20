import { useState } from "react";
import TagButton from "./serviceCard/TagButton";
import TagInfo from "./serviceCard/TagInfo";

export default function Service() {
  const [tagValue, setTagValue] = useState(1);

  return (
    <section>
      <h1 className="text-[26px]">Service</h1>
      <div>
        <TagButton text={"kit"} onClick={() => setTagValue(1)} />
        <TagButton text={"Diary"} onClick={() => setTagValue(2)} />
        <TagButton text={"Mall"} onClick={() => setTagValue(3)} />
      </div>
      <TagInfo tagValue={tagValue} />
    </section>
  );
}
