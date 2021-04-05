import React from "react";
import "../components/css/Desktop.css"
import Dashboard from "./HomePage"
import background from '../Images/hotel2.jpg'
import LoggedIn from "../components/LoggedIn";

function DesktopImg() {
    return (
        <>
            <div className="dash-img">
                <div className=" background">
                 {/* <img src={background} alt='background'/> */}
                    <div className="container d-flex justify-content-center text-center">
                        <h1 className="heading">HOTEL-TAJ ....PREMIUM FULL SERVICE HOTELS AND RESORTS</h1>
                    </div>
                </div>
            </div>
            <section>
                <Dashboard />
                <LoggedIn/>
            </section>
        </>
    );
}
export default DesktopImg;