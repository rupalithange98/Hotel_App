import React from 'react'
import styles from "../components/css/Homepage.css"
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <section className="dashboard-sections">
                <div className="section-1-container mt-5">
                    <h1 className="text-center">Rooms In Hotel</h1>

                    <div className="wrapper d-flex justify-content-center flex-wrap">

                        <div className="section-1-content room1">
                            <Link to="roomFilter/1"> <span className="btn-light btn-sm btn">SINGEL BEDROOM</span></Link>
                        </div>
                        <div className="section-1-content room2">
                            <Link to="roomFilter/2"><span className="btn-light btn-sm btn">DOUBLE BEDROOM</span></Link>
                        </div>
                        <div className="section-1-content room3">
                            <Link to="roomFilter/3"><span className="btn-light btn-sm btn">TRIPLE BEDROOM</span></Link>
                        </div>
                        <div className="section-1-content room4">
                            <Link to="roomFilter/4"><span className="btn-light btn-sm btn">4 Bedrooms</span></Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className="dashboard-sections">
                <div className="section-2-container">
                    <div className="section-2-main d-flex justify-content-center">
                        <div className="section-2-content text-center">
                            <h4> Lorem ipsum dolor sit amet,<br></br>
                                 consectetur adipiscing elit. Aenean<br></br>
                                egestas magna at porttitor <br></br>
                                vehicula nullam augue ipsum dolor. READ<br></br>
                                MORE</h4>
                            <h3>More Destination. More Ease.</h3>
                            {/* <br /> */}
                            <h3>More Affordable</h3>
                        </div>

                        <div className="section-2-content d-flex flex-wrap">
                            <div className="bg-dark m-1 flex-item-2 m-2">
                               img
                            </div>
                            <div className="bg-dark flex-item-2 m-2">
                            img
                            </div>
                        </div>
                    </div>

                    <div className="section-2-wrapper d-flex flex-wrap container justify-content-center mt-5">
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                        <div className="section-2-wrapper-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                                egestas magna at porttitor vehicula nullam augue ipsum dolor. READ
                                MORE
            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="dashboard-sections">
                <div className="container mt-5">
                    <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Restaurants</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" 
                            src="https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Lounge Bar</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Wellness</h5>
                                <p className="card-text">
                                    Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.
                              </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <br/>
        </div>
    )
}
export default Dashboard;