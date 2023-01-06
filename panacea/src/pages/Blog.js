import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import BlogComp from "../components/blogComp";
import Blog from "../components/blog";
import Footer from "../components/footer";
import HighlightBlog from "../components/highlightblog";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <BlogComp />
        <HighlightBlog/>
        <Blog />
        <Footer />
    
       

        <Outlet />
        </>
    )

}

export default home;