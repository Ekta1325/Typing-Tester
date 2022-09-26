import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img src={logo} alt="logo" className="flash-logo" />
                <p className="flash-logo-text">
                    FlashType
                </p>
            </div>
            <div className="nav-right">
                <a 
                target="_blank"
                className='nav-link'
                href='https://github.com/Ekta1325'
                rel='noreferrer'
                >
                    EB
                </a>
            </div>
        </div>
     );
}
 
export default Navbar;