import { Outlet } from "react-router-dom";


export default function DefaultLayout() {

    
    return (
      <>
        <header>HEADER</header>
        <main>
            <Outlet />
        </main>
        <footer>FOOTER</footer>
      </>
    );
}