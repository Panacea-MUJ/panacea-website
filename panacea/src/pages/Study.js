import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import StudyComp from "../components/studyComp";
import Study from "../components/study";
import Footer from "../components/footer";
import Contact from "../components/Contact";

const aboutUs = () => {
    return (
        <>
        <Navbar></Navbar>
        <StudyComp />
        <Study></Study>
        <Contact/>
        <Footer />

        

        
            
            


       

        <Outlet />
        </>
    )

}

export default aboutUs;