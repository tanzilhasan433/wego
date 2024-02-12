import { Outlet } from "react-router-dom";
import NavbarComponent from "../Pages/Shared/Navbar/NavbarComponent";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavbarComponent></NavbarComponent>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;