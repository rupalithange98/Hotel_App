import React,{useState} from 'react'
import Hotels from '../../data/data'
import {Link} from 'react-router-dom'

function FilterLocation() {
    // console.log("hotels---",Hotels)

    const [state, setstate] = useState({data:[],city:""})

    const cityResult=[];
    const map=new Map();
    for(const hotel of Hotels){
        if(!map.has(hotel.city)){
            map.set(hotel.city,true);
            cityResult.push({
                city:hotel.city  })
        }
    }


    const handleChange=e=>{
        console.log(e.target.attributes.value.nodeValue)
        let cityName=e.target.attributes.value.nodeValue
        setCity(cityName)
    }

    const setCity=(cityName)=>{
        const filterCity=Hotels.filter(hotel=>hotel.city===cityName)
        setstate({
            city:cityName,
            data:filterCity
        })
        console.log("City by filter---",filterCity,"City---",cityName)
        
    }

    const RenderStars=stars=>{
        let star=[]
        for(let i=0;i<stars;i++){
            star.push(<span className='text-secomdary'>&#9733;</span>)
        }
        let totalS=star.map((ele,index)=>(<span key={index}>{ele}</span>))
        return totalS
    }
   
    console.log("Star data----",state.data)
return (
    <div className="container fullH mt-5">
            <h2 className="">Available Cities</h2>
            <div className="d-md-flex">
                {
                    cityResult.map((hotel, index) => {
                        return (<div key={index} className="m-3">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img className="card-img-top" src="https://i.ibb.co/7RmgDK7/oxo.png" alt="" height="200" />
                                <h3 className="btn btn-outline-info" value={hotel.city} onClick={handleChange}>{hotel.city.toUpperCase()}</h3>
                            </div>
                        </div>)
                    })
                }
            </div>
            <section>
                <div className="container">
                    {state.data.map((hotel, index) => {
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
                    })
                    }
                </div>
            </section>
        </div>
    )

}

export default FilterLocation
