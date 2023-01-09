import React from "react"
import ResponsiveAppBar from "./NavBar"
import {Outlet} from "react-router-dom"
import { Footer } from "./Footer"
import { Footer2 } from "./Footer2"
import LandingPage from "../components/Landing/LandingPage"


export const RouterLayout: React.FC<{}> = () => {
    return(
        <div>
            <ResponsiveAppBar/>
            <LandingPage/>
            <Outlet/>
            <Footer/>
            <Footer2/>
        </div>
    )
}