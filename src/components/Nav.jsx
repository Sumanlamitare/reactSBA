import { Link } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
      <div className="navBar">
        <h1>Movie Mafia</h1>
      </div>
    </Link>
  );
}
