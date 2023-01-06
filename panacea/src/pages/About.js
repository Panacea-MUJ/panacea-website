import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import AboutComp from "../components/aboutComp";
import About from "../components/about";
import Footer from "../components/footer";
import Contact from "../components/Contact";

const aboutUs = () => {
    return (
        <>
        <Navbar></Navbar>
        <AboutComp />
        <About></About>
        <Contact/>
        <Footer />

        

        
            
            


       

        <Outlet />
        </>
    )

}

export default aboutUs;