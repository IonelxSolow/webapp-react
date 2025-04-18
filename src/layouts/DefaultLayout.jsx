import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import LoaderComponent from "../components/reviews/LoaderComponent";


export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext);

   
    return (
      <>
        <Header />

        <main
          className="mb-5 bg-dark"
          style={{ minHeight: "calc(100vh - 56px)" }}
        >
          {isLoading && (
           <LoaderComponent/>
          )}
          <Outlet />
        </main>
        <Footer />
      </>
    );
}