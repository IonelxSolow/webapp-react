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
          <div className="ms-auto">

          <NavLink className="navbar-brand" to="/Login">
            <i className="bi bi-person me-2"></i>
            Login
          </NavLink>
          <NavLink className="navbar-brand" to="/Register">
            <i className="bi bi-person-add me-2"></i>
            Register
          </NavLink>

          </div>
        </div>
      </nav>
    </header>
  );
}
