 import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import LoaderComponent from "../components/reviews/LoaderComponent";
import { NavLink } from "react-router-dom";


export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext);

   
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" to="/">
                <i className="bi bi-film me-2"></i>
                Movies
              </NavLink>
              <div className="ms-auto">
                <NavLink className="navbar-brand" to="/admin">
                  
                  Admin
                </NavLink>
                <a href="/logout">Logout</a>
              </div>
            </div>
          </nav>
        </header>

        <main
          className="mb-5 bg-dark"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {isLoading && <LoaderComponent />}
          <Outlet />
        </main>
      </>
    );
}