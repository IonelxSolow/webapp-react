import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="bi bi-film me-2"></i>
            Movies
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
