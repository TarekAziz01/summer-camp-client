import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const hideHF =
      location.pathname.includes("login") ||
      location.pathname.includes("register");
    return (
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        {hideHF || <Footer></Footer>}
      </div>
    );
};

export default Main;