import React from "react";
import axios from  'axios';
import {Link,Switch,BrowserRouter,Route} from 'react-router-dom'
import LoggedIn from "./components/LoggedIn";
import NavbarComponents from "./components/Navbar";
import Footer from './components/Footer'
import PleaseLoginAlert from "./components/PleaseLoginAlert";
import DesktopImg from "./Dashboard/DesktopImg";




export default function App() {
    let LOGGEDIN = localStorage.getItem("signupData")
    return (
        <>
            <NavbarComponents />
            <div className="App">
            </div>
            {LOGGEDIN ? <LoggedIn /> : <DesktopImg/>}
           {/* <LoggedIn/> */}
            <Footer />
        </>
    );
}


