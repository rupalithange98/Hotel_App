
import React, { useEffect, useState } from "react";
import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios';
import LoginModal from "./Modal";


const NavbarComponents = () => {
    const [state, setstate] = useState({ userLogin: false })

    useEffect(()=>{
        // let loggedIn= axios.post('http://localhost:3001/login',{userName:loginEmail,password:loginPassword}).
        // then(res=>console.log("Response from is logged in :",res));
    //    let loggedIn=localStorage.getItem('signupData')
       let loggedIn=axios.get('http://localhost:3001/getuser').then(response=>console.log("data:",response));

        if(loggedIn){
            setstate({
                userLogin:true
            })
        }else{
            setstate({
                userLogin:false
            })
        }
    },[])

 const profile=(<DropdownButton id="dropdown-basic-button" menuAlign="right" title="&#8801;">
  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
  <Dropdown.Item href="/viewBooking">Bookings</Dropdown.Item>
  <Dropdown.Item href="/logout">Logout</Dropdown.Item>
</DropdownButton>)

    return (
        <>
            <Navbar className="shadow-sm" bg="light">
                    <p className="h2">Hotel-Taj</p>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/desktop">DesktopImg</Nav.Link> */}
                        <Nav.Link href="/ourRooms">OurRooms</Nav.Link>
                        <Nav.Link href="/locations">OurLocations</Nav.Link>
                        <Nav.Link href="/about">AboutUs</Nav.Link>
                        <Nav.Link href="/contact">ContactUs</Nav.Link>
                        <Nav.Link href="/search">Search</Nav.Link>

                    </Nav>
                    
                    <Nav>
                        {state.userLogin ? (profile)
                            : (<Nav.Link><LoginModal/></Nav.Link>)}  
                    </Nav>
                     {/* <Nav>
                        {state.userLogin ? (<Nav.Link><LoginModal /></Nav.Link>)
                            : (profile)}  
                    </Nav> */}

            </Navbar>
        </>
    );
};
export default NavbarComponents;


