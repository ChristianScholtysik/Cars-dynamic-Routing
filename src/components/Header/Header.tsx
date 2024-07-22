import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/our-cars">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
};
export default Header;
