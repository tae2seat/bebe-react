import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <section>
      <img src={logo} alt="logo" style={{ width: "140px" }} />
      <nav>
        <ol>
          <Link to="/">Home</Link>
          <Link to="/kit">Kit</Link>
          <Link to="/products">Mall</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/login">Login</Link>
        </ol>
      </nav>
    </section>
  );
}
