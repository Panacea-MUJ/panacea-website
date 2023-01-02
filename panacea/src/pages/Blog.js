import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import BlogComp from "../components/blogComp";
import Blog from "../components/blog";
import Footer from "../components/footer";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <BlogComp />
        <Blog />
        <Footer />
    
       

        <Outlet />
        </>
    )

}

export default home;