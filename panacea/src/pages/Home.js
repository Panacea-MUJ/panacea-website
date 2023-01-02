import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import HomeComp from "../components/homeComp";
import Footer from "../components/footer";



const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <HomeComp />
        <Footer />

        

        
            
            


       

        <Outlet />
        </>
    )

}

export default home;