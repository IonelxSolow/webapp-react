import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Swal from "sweetalert2";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const loggedOut = logout();
    if (loggedOut) {
      Swal.fire({
        title: "Success!",
        text: "You have been logged out successfully",
        icon: "success",
        background: "#2C3034",
        color: "#fff",
        confirmButtonColor: "#0DCAF0",
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <i className="bi bi-film me-2"></i>
            Movies
          </NavLink>

          <div className="ms-auto">
            {!user && (
              <>
                <NavLink className="navbar-brand" to="/Login">
                  <i className="bi bi-person me-2"></i>
                  Login
                </NavLink>
                <NavLink className="navbar-brand" to="/Register">
                  <i className="bi bi-person-add me-2"></i>
                  Register
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink className="navbar-brand" to="/admin">
                  <i className="bi bi-person me-2"></i>
                  Admin
                </NavLink>
                <button
                  className="btn btn-link navbar-brand text-white text-decoration-none"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
