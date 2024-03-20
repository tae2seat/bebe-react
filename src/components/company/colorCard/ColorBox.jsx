export default function ColorBox() {
  const circles = [
    {
      name: "#F95C58",
      info: "병원/응급/약물류",
      bgcolor: "bg-brand1",
      hoverText: "hover:text-black",
      text: "text-brand1",
    },
    {
      name: "#FFCDC3",
      info: "brand color",
      bgcolor: "bg-brand2",
      hoverText: "hover:text-black",
      text: "text-brand2",
    },
    {
      name: "#F2F2F2",
      info: "기타",
      bgcolor: "bg-brand3",
      hoverText: "hover:text-black",
      text: "text-brand3",
    },
    {
      name: "#1E1E1E",
      info: "폰트",
      bgcolor: "bg-brand4",
      hoverText: "hover:text-white",
      text: "text-brand4",
    },
    {
      name: "#FFF0F0",
      info: "brand color",
      bgcolor: "bg-brand5",
      hoverText: "hover:text-black",
      text: "text-brand5",
    },
    {
      name: "#FFEDDF",
      info: "면/천과 같은 실",
      bgcolor: "bg-brand6",
      hoverText: "hover:text-black",
      text: "text-brand6",
    },
    {
      name: "#FFA48A",
      info: "식과 관련된",
      bgcolor: "bg-brand7",
      hoverText: "hover:text-black",
      text: "text-brand7",
    },
    {
      name: "#A8E3F6",
      info: "세면/위생",
      bgcolor: "bg-brand8",
      hoverText: "hover:text-black",
      text: "text-brand8",
    },
  ];

  return (
    <div>
      {circles.map((circle, idx) => {
        const className = `${circle.bgcolor} ${circle.text} ${circle.hoverText}`;
        return (
          <div key={idx} className={className}>
            <p className="text-lg">{circle.info}</p>
            <p className="text-xs">{circle.name}</p>
          </div>
        );
      })}
    </div>
  );
}
