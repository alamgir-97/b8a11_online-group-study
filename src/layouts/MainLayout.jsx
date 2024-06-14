import { Outlet } from "react-router";
import NavBar from "../sharedComponents/NavBar/NavBar";
import Footer from "../sharedComponents/Footer/Footer";


const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;