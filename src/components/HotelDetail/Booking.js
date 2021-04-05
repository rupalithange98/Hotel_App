import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Hotel from'../../data/data'
import PleaseLoginAlert from '../PleaseLoginAlert';
import ViewBooking from '../ViewBooking';
// import ViewBooking from '../ViewBooking';

function RoomBooking(props) {
    // const [state, setstate] = useState({ hotel: [] })

    const [bookingDetails, updateBookingDetails] = useState({
        checkIn:'',
        checkOut:'',
        adults:0,
        children:0,
        totalDays:0,
        totalPrice:0,
        showBooking:true,
        dbooking:false,
        showPayment:false,
        bookingMsg:false
    })
    const checkIn=bookingDetails.checkIn;
    const checkOut=bookingDetails.checkOut;
    const children=bookingDetails.children;
    const adults=bookingDetails.adults;
    const totalDays=bookingDetails.totalDays;
    const totalPrice=bookingDetails.totalPrice;

    let bookedDetails=(e)=>{
        // e.preventDefasult();
        console.log("console data:",props.state.hotel.hotelName)
        axios.post('http://localhost:3001/booking',{
            hotelName:props.state.hotel.hotelName,
            address:props.state.hotel.address,
        checkIn,checkOut,adults,children,totalDays,totalPrice})
        .then(res=>console.log('success',res))
    }
//  const userName=JSON.parse(localStorage.getItem('signupData')).fname;
//  console.log(userName);

    const handleChange=e=>{
        // console.log(e.target.value)
        const {name} =e.target;
        updateBookingDetails({
            ...bookingDetails,
            [name]:e.target.value
        })
    }

   
    const handleSubmit=e=>{
        // bookedDetails();
        // console.log(bookingDetails.checkIn)
        // console.log(bookingDetails.checkOut)
        // console.log(bookingDetails.childern)
        // console.log(bookingDetails.adults)
        let totaldays = datediff(parseDate(bookingDetails.checkIn), parseDate(bookingDetails.checkOut))
        updateBookingDetails({
            ...bookingDetails,
            totalDays: totaldays,
            showBooking: false,
            dbooking: true
        });
        e.preventDefault()

    }
    const parseDate = (str) => {
        var mdy = str.split('-');
        return new Date(mdy);
    }

    const datediff = (first, second) => {
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }


    const today = new Date();
    const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

    const checkOutD = (str) => {
        let DateStr = str.split('-')
        DateStr[2] = Number(DateStr[2]) + 1
        let d = new Date(DateStr[0], DateStr[1], DateStr[2])
        let chekOutD = d.getFullYear() + '-' + ('0' + (d.getMonth())).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
        return chekOutD
    }
   

    const getPrice = (price, totalDays, persons) => {
        // alert("Price"+price)
        // alert("Days:"+totalDays)
        // alert("persons"+persons)
        let ans = price * persons
        let rate = ans * totalDays
        return rate
    }

    const confirmBooking=()=>{
             updateBookingDetails({
            ...bookingDetails,
            dbooking: false,
            showPayment: true,
            totalPrice: document.getElementById("totalPrice").innerHTML
        });
    }

    const confirmPayment=()=>{
        bookedDetails();

        updateBookingDetails({
            ...bookingDetails,
            dbooking: false,
            showPayment: false,
            bookingMsg: true
        });
      
    }

  
    return (
        <div>
            {/* <h2>Hotel Name:{props.state.hotel.hotelName}</h2> */}
            <section className={bookingDetails.showBooking?"d-block" :"d-none"}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="input-group input-group-lg mt-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id='inputGroup-sizing-lg'>
                                    Check In
                                </span>
                            </div>
                            <input  type="date"
                             min={date}
                              name='checkIn' onChange={handleChange}
                            className='formControl' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required/>
                        </div>
                        <div className="input-group input-group-lg mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Check Out</span>
                            </div>
                            <input type="date"
                             min ={checkOutD(bookingDetails.checkIn)}
                              name="checkOut"
                            onChange={handleChange} className="form-control"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>
                        <div className="d-flex">
                            <div className="input-group input-group-lg mt-3 m-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="iputGroup-sizing-lg">Children</span>
                                </div>
                                <input type="number" min="0" 
                                max={props.state.hotel.maximumChildsAllow}
                                // max={Hotel.maximumChildsAllow}
                                name="children" onChange={handleChange} className="form-control"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required/>
                            </div>
                            <div className="input-group input-group-lg mt-3 m-1">
                            <div className="input-group-prepend">
                                    <span className="input-group-text" id="iputGroup-sizing-lg">Person</span>
                                </div>
                                <input type="number" min="0" 
                                max={props.state.hotel.maximumAdultsAllow}
                                // max={Hotel.maximumAdultsAllow}
                                name="adults" onChange={handleChange} className="form-control"aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required/>
                            </div>
                            {/* <div><h4>Price:{props.state.hotel.price}</h4></div> */}
                     </div>
                    {/* <button type="submit" className="btn btn-lg btn-block btn-danger mt-2" onClick={bookedDetails}>Get Data</button> */}
                    <button type="submit" className="btn btn-lg btn-block btn-danger mt-4" >Book Now</button>
                </div>
                </form>
            </section>

            <section className={bookingDetails.dbooking ? "d-block" : "d-none"}>
            <table className="table table-border bg-dark">
                <tbody >
                    <tr>
                            <th>Hotel Name</th>
                            <td><h4>{props.state.hotel.hotelName}</h4></td>
                    </tr>
                    {/* <tr>
                            <th>Hotel Address</th>
                            <td><h4>{props.state.hotel.address}</h4></td>
                    </tr> */}
                    <tr>
                        <th>Check In</th>
                        <td><h4>{bookingDetails.checkIn}</h4></td>
                    </tr>
                    <tr>
                        <th>Check Out</th>
                        <td><h4>{bookingDetails.checkOut}</h4></td>
                    </tr>
                    <tr>
                        <th>Persons</th>
                        <td><h4>{bookingDetails.adults}</h4></td>
                    </tr>

                    <tr>
                        <th>No of Children</th>
                        <td><h4>{bookingDetails.children}</h4></td>
                    </tr>

                    <tr>
                        <th>Total Days</th>
                        <td><h4>{bookingDetails.totalDays}</h4></td>
                    </tr>

                    <tr>
                        <th>Total price</th>
                        <td><h4 id="totalPrice">
                            {/* {getPrice(1103,1,2)} */}
                            {/* {props.state.hotel.price} */}
                            {getPrice(props.state.hotel.price,bookingDetails.totalDays,
                                bookingDetails.adults)}
                        </h4></td>
                    </tr>
                   
                </tbody>
                </table>
                <button className="btn btn-info btn-block rounded" onClick={confirmBooking}>Confirm Booking</button>
                {/* <button className="btn btn-info btn-block rounded" onClick={cancelBooking}>Cancel Booking</button> */}
            
            </section>

            

            <section className={bookingDetails.showPayment ? "d-block" : "d-none"}>
                <div className="card-header">
                    <div className="rpw my-0">
                        <h5 className="mt-1 font-weight-bold" >Payment Details</h5>
                        <div className="display-td">
                        {/* <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" alt="" /> */}
                        </div>
                    </div>
                </div>


                <div className="card-body">
                    <label> Card Number</label>
                    <div className="input-group mb-3">
                        <input type="text" className='form-control' id="cardNumber" placeholder="Enter Card Number"
                        value="123-13-3456"aria-describedby="basic-addon2" />
                        <div className="form-row">
                            <div className="col">
                                <label>Expire Date</label>
                                <input type="text" id="expireDate" className="form-control" value="12/2050" placeholder="MM/YYYY"/>
                            </div>
                            <div className="col">
                                <label>CVV</label>
                                <input type="password" value="2311" id="cardCVV" className="form-control"placeholder='Pay Amount'/>
                            </div>
                        </div>

                        <button href="#" className="btn btn-primary mt-3 btn-block" onClick={confirmPayment}>Confirm Payment</button>
                    </div>

                </div>
            </section>

            <section className={bookingDetails.bookingMsg ? "d-block" : "d-none"}>
                <div className="alert alert-success " role='alert'>
                    <h4 className="alert-heading">Booking Done...!</h4>
                    {/* <h5>{userName}</h5> */}
                    <p>Thank You..! For Booking</p>
                    <hr/>
                    <Link to="/"><p className="alert-link">Go to Home</p></Link>
              
                </div>

            </section>
            
        </div>
    )
}

export default RoomBooking

