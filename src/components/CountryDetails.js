import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "context";
import "./navbar.css";

export function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="mainNavbar">
      <Link className="navLink" to="/">
        <a className="navbarLinks">Country Details</a>
      </Link>

      </div>
  );
}