import React,{useState,useEffect} from 'react'
import AllRooms from "../../data/data"
import {Link} from "react-router-dom"

function SearchHotel() {
    const [state, setstate] = useState({
        rooms:[],
        findHotel:[],
        searchHotel:""
    });
    // const hotels=AllRooms.map(hotel=>hotel)
    // console.log("----",hotels);
    useEffect(()=>{
        const hotels=AllRooms.map(hotel=>hotel)
        setstate({rooms:hotels})
    },[])

    const searchCity=state.rooms.filter(
        room=>state.searchHotel ? (room.city.indexOf(state.searchHotel) !==-1 ||
        room.hotelName.indexOf(state.searchHotel) !==-1):([])
    );

    const handleSearch=e=>{
        const {name,value}=e.target;
        console.log(e.target.name,":" ,value)
        setstate({
            ...state,[name]:value,findHotel:searchCity
        })
    }


    const onCancel=()=>{
        setstate({
            ...state,searchHotel:'',findHotel:[]
        })
    }

    const RenderStars=stars=>{
        let star=[]
        for(let i=0;i<stars;i++){
            star.push(<span className='text-primary'>&#9733;</span>)
        }
        let totalS=star.map((ele,index)=>(<span key={index}>{ele}</span>))
        return totalS
    }


    console.log("Seacrch City:",state.filterRoom);
    console.log("City Nd Hotel:",state.findHotel);

    return (
        <div className="container mt-5 shadow-sm fullH">
            <div className="">
                <h3 >Find better deals on hotels... </h3>
            </div>

            <div className="input-group mb-3 col-md-5">
                <input type="text" className="form-control my-4" onChange={handleSearch} name="searchHotel"
                 placeholder="Search Hotel name by Location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append p-0 my-4">
                    <span className="input-group-text btn btn-outline-secondary" onClick={onCancel} id="basic-addon2">&#10006;</span>
                </div>
            </div>


            {state.findHotel ? (state.findHotel.map((hotel, index) => {
                return (<div className="container mt-2" key={index}>
                    <Link to={`roomView/${hotel.id}`}>
                        <div className="col-md-8 text-dark">
                            <div className="d-sm-flex border" >
                                <img
                                    src={hotel.photos ? hotel.photos : "https://images.oyoroomscdn.com/uploads/hotel_image/89388/medium/261cd775d5772ed8.JPG"}
                                    className="rounded p-2"
                                    height="200"
                                    width="200"
                                    alt="room"
                                />

                                <div className="flex-grow-1 p-2 ml-3">
                                    <h4 className="font-weight-bold">{hotel.hotelName}</h4>
                                    <span>{RenderStars(hotel.star)}</span>
                                    <p>{hotel.city.toUpperCase()}</p>
                                </div>
                                <div className="p-2 text-right bg-light">
                                    <h2 className="font-weight-bold">‎₹‎{hotel.price}</h2>
                                    <small className="form-text text-muted font-weight-light">
                                        Per Night
                                        <br />
                                        Per Person
                                         </small>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>)
            })) : (<h6>Search Hotels, or Destination</h6>)
            }
        </div>
    );

}

export default SearchHotel
