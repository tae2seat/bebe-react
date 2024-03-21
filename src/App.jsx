import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="max-w-[1024px] min-w-[320px] mx-auto text-center ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
