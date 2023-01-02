import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Events from "../components/Events";
import EventsComp from "../components/eventsComp";
import Footer from "../components/footer";


const events = () => {
    return (
        <>
        <Navbar></Navbar>
        <EventsComp />
        <eventsComp></eventsComp>
        <Events />
        <Footer />

        

        
            
            


       

        <Outlet />
        </>
    )

}

export default events;