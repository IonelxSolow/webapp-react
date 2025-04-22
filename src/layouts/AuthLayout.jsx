 import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import LoaderComponent from "../components/reviews/LoaderComponent";
import { NavLink } from "react-router-dom";


export default function AuthLayout() {

    const { isLoading } = useContext(GlobalContext);

   
    return (
      <>
        <Header/>

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