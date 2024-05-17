import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer";
import NavBar from "../Pages/Sheard/NavBar";

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;