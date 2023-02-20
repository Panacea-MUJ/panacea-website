import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import TeamComp from "../components/TeamComp";
import ExecTeams from "../components/execteam";
import CoreTeams from "../components/coreteam";
import CceDirector from "../components/cceDirector";
import Teacher from "../components/teacherCoordinator";
import Footer from "../components/footer";


const home = () => {
    return (
        <>
        <Navbar></Navbar>
        <TeamComp />
        <CceDirector />
        <Teacher />
        <ExecTeams />
        <CoreTeams />
        <Footer />

        <Outlet />
        </>
    )

}

export default home;