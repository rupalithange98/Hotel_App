

import React,{useEffect, useState} from 'react'
import axios from 'axios'
import hotelData from "../data/data"


function ViewBooking(props) {
    // const [state, setstate] = useState({ booking: [] })
    const [state, setState] = useState({booking:[]} )


//     const getData=()=>{
//         alert("getData Is called")
//         axios.get('http://localhost:3001/getBooking').then(response=>{
//             console.log("From ViewBooking page:",response.data)
//             setState({
//                 booking:response.data
//             })
//     })
//   }

useEffect(()=>{
  
//     axios.get('http://localhost:3001/getBooking').then(response=>{
//         console.log("From ViewBooking page:",response.data)
//         setState({
//             booking:response.data
//         })
// })
getDataFromTable()
},[])


const getDataFromTable=()=>{
    axios.get('http://localhost:3001/getBooking').then(response=>{
        console.log("From ViewBooking page:",response.data)
        setState({
            booking:response.data
        })
})
}
    console.log("state",state.booking)


    const cancelBooking=(e,bookId)=>{
        console.log("Name in Viewbooking:",props.profile.profileData)
        e.preventDefault();
        console.log("hotel Id to delete--",bookId);
        axios.delete(`http://localhost:3001/delete/${bookId}`)
        alert("Entry deleted successfully");
        getDataFromTable();
     
    }

 
    const displayData=()=>{
       
        {
           return state.booking.length>0 ? state.booking.map((val,i)=>{
               return  (
                   <tr key={i}>
               <td>{val.bookId}</td>
               <td>{val.hotelName}</td>
               <td>{val.address}</td>
               <td>{val.checkIn}</td>
               <td>{val.checkOut}</td>
               <td>{val.children}</td>
               <td>{val.person}</td>
               <td>{val.totalDays}</td>
               <td>{val.price}</td>
               <td>
                   <button className='btn btn-danger' onClick={(e)=>cancelBooking(e,val.bookId)}>Cancel Booking</button>
               </td>
               </tr>

                 )
             }):(
                 <tr>
                     <td colSpan={8} style={{color:"red" ,textAlign:"center"}}>No hotel is booked yet...</td>
                 </tr>
             )
         }
    }
    return (
        <div className='container'> 
            {/* <h2>Heeello</h2> */}
            {/* <button onClick={getData}>Get Data</button> */}
            <table className='table table-striped pt-50 m-50'>
                            <thead className='bg-secondary m-50'>
                                <th>Sr No.</th>
                                <th>Hotel Name</th>
                                <th>Address</th>
                                <th>Check In Date</th>
                                <th>checkOut</th>
                                <th>Person</th>
                                <th>Children</th>
                                {/* <th>Time</th> */}
                                <th>Days</th>
                                <th>Price</th>
                                <th>Action</th>
                             </thead>
                            <tbody>{displayData()}</tbody>
                         </table>
        </div>
    )
}

export default ViewBooking

// import React,{useState,useEffect} from 'react'
// import hotelData from '../data/data'

// function ViewBooking(props) {
//     return(
//         <div>
//             I am from hotel Booking to display booking
//     {/* <table className="table table-border bg-dark">
//     <tbody >
//         <tr>
//                 <th>Hotel Name</th>
//                 <td><h4>{props.state.hotel.hotelName}</h4></td>
//         </tr>
//         <tr>
//                 <th>Hotel Address</th>
//                 <td><h4>{props.state.hotel.address}</h4></td>
//         </tr>
//         <tr>
//             <th>Check In</th>
//             <td><h4>{bookingDetails.checkIn}</h4></td>
//         </tr>
//         <tr>
//             <th>Check Out</th>
//             <td><h4>{bookingDetails.checkOut}</h4></td>
//         </tr>
//         <tr>
//             <th>Persons</th>
//             <td><h4>{bookingDetails.adults}</h4></td>
//         </tr>

//         <tr>
//             <th>No of Children</th>
//             <td><h4>{bookingDetails.children}</h4></td>
//         </tr>

//         <tr>
//             <th>Total Days</th>
//             <td><h4>{bookingDetails.totalDays}</h4></td>
//         </tr>

//         <tr>
//             <th>Total price</th>
//             <td><h4 id="totalPrice"> */}
//                 {/* {getPrice(1103,1,2)} */}
//                 {/* {props.state.hotel.price} */}
//                 {/* {getPrice(props.state.hotel.price,bookingDetails.totalDays,
//                     bookingDetails.adults)}
//             </h4></td>
//         </tr>

//     </tbody>
//     </table>
//     <button className="btn btn-info btn-block rounded" onClick={confirmBooking}>Confirm Booking</button> */}
// </div>
// )

// }

// export default ViewBooking
 