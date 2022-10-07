import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Events from "../components/Events";
import EventsComp from "../components/eventsComp";


const events = () => {
    return (
        <>
        <Navbar></Navbar>
        <EventsComp />
        <eventsComp></eventsComp>
        <Events />
        

        
            
            


       

        <Outlet />
        </>
    )

}

export default events;