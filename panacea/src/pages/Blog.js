import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
// import blogComp from "../components/blogComp";
import Blog from "../components/blog";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        {/* <blogComp /> */}
        <Blog />

        

        
            
            


       

        <Outlet />
        </>
    )

}

export default home;