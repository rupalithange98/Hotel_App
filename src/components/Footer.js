import React from 'react'
import './css/footer.css';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
       <>
        <footer className='footer'>
            <div className='mt=5 d-flex footer-main justify-content-around bg-light'>
                <div className='footer-content'>
                    <h2>Hotel Taj..</h2>
                    <p className='footer-links'>
                        <span>
                            <Link to='#' className='footer-link'>DesktopImg</Link>
                            <Link to='#' className='footer-link'>Our Rooms</Link>
                            <Link to='#' className='footer-link'>About</Link>
                            <Link to='#' className='footer-link'>Contact</Link>

                        </span>
                    </p>
                    <p>Copyright &copy;2021 Hoteltaj.com</p>
                </div>
                <div className='footer-contet'>
                    <div>
                        <p>
                            <span>Hotel Taj @ Mumbai</span>,India
                        </p>
                    </div>
                    <div>
                        <p>Reception 24 hour</p>
                    </div>
                    <div>
                        <p><Link to='#'>support@hotel.com</Link></p>
                    </div> 
                </div>
                
                </div>
        </footer>
       </>
    )
}

export default Footer
