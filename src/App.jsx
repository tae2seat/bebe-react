import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="max-w-[1024px] min-w-[320px] mx-auto text-center ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
