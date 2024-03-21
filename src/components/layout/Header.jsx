import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <section className="flex justify-between items-center">
      <img className="w-24 sm:w-32" src={logo} alt="logo" />
      <nav className="flex gap-2 sm:gap-4 sm:text-xl mr-2 sm:mr-4 mt-1 sm:mt-2">
        <Link to="/">Home</Link>
        <Link to="/products">Mall</Link>
        <Link to="/diaries">Diary</Link>
        <Link to="/kit">Kit</Link>
        <Link to="/login">Admin</Link>
      </nav>
    </section>
  );
}
