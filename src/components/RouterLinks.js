import React from 'react'
import { Route } from "react-router-dom";
import DesktopImg from '../Dashboard/DesktopImg'
import About from './About';
import Contact from './Contact';
import FilterRoom from './HotelDetail/FilterRoom';
import FilterLocation from './HotelDetail/FilterLocation';
import Login from './Login';
import OurRooms from './OurRooms';
import { RoomView } from './roomView';
import Signup from './Signup';
import Logout from './Logout'
import Profile from './Profile'
import SearchHotel from './HotelDetail/SearchHotel';
import ViewBooking from './ViewBooking';


function RoutesLinks() {
    return (
        <div>
            <Route exact path="/" component={DesktopImg} />
            <Route exact path="/ourRooms" component={OurRooms} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/viewBooking" component={ViewBooking}/>
            <Route  exact path='/roomView/:id' component={RoomView}></Route>
            <Route exact path="/search" component={SearchHotel}/>
             <Route exact path="/roomfilter/:size" component={FilterRoom}/>
            <Route exact path="/locations" component={FilterLocation} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path='/login'component={Login}/>
            

        </div>
    )
}
export default RoutesLinks;