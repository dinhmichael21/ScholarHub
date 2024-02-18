import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScholarNavbar from "./ScholarNavbar";
import ScholarDataContext from "../ScholarDataContext";



export default function NavbarHolder() {


    return <div>
        <ScholarNavbar />
        <div style={{ margin: "1rem" }}>
            {/* <ScholarDataContext.Provider > */}
                <Outlet />
            {/* </ScholarDataContext.Provider> */}
        </div>
    </div>
}