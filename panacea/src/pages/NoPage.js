import React from "react";
import pageNotFound from "../components/pageNotFound.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const NoPage = () => {
    return(
        <>
        <Navbar></Navbar>
        <div className="bg-black h-5/6">
        <h1>
            <center>
                <h2 className="text-white">Wrong page, mate</h2>
        <img src={pageNotFound} alt="homebg" className='h-[40rem]' style={{display:"relative"}}></img>
        </center>
        </h1>
        </div>
        <Footer />
        </>
    )
}

export default NoPage;