import React from "react"
import ResponsiveAppBar from "./NavBar"
import {Outlet} from "react-router-dom"


export const RouterLayout: React.FC<{}> = () => {
    return(
        <div>
            <ResponsiveAppBar/>
            <Outlet/>
        </div>
    )
}