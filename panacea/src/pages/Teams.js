import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import TeamComp from "../components/TeamComp";
import ExecTeams from "../components/execteam";
import CoreTeams from "../components/coreteam";
import Footer from "../components/footer";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <TeamComp />
        <ExecTeams />
        <CoreTeams />
        <Footer />

        <Outlet />
        </>
    )

}

export default home;