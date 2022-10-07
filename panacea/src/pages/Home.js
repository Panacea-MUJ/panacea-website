import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import HomeComp from "../components/homeComp";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <HomeComp />
        

        
            
            


       

        <Outlet />
        </>
    )

}

export default home;