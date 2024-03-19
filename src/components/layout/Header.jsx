import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <section className="flex justify-between items-center">
      <img className="w-24 bg-red-300" src={logo} alt="logo" />
      <nav className="flex gap-2  bg-fuchsia-200 mr-2 mt-1">
        <Link to="/">Home</Link>
        <Link to="/kit">Kit</Link>
        <Link to="/products">Mall</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
    </section>
  );
}
