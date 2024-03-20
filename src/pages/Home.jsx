import Banner from "../components/company/Banner";
import Colors from "../components/company/Colors";
import Icons from "../components/company/Icons";
import Service from "../components/company/Service";
import Crew from "../components/company/Crew";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Service />
      <Icons />
      <Colors />
      <Crew />
    </div>
  );
}
