import React from 'react';
import './nav.css';
import { Link} from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <ul className="topnavbar">
                <li><span lang="en" id="countryNameHardcoded" className="lang-text">India - English</span></li>
                <li><img src= "./assets/India.png" alt="India" title="India"/></li>
            </ul>
            <ul className="menunavbar">
                <li>
                   <span>
                    <Link to="/home"><img src= "./assets/Qatar-Airways-logo.png" alt="Qatar Airways" title="Qatar Airways"/></Link>
                   </span>
                </li>
                <li onClick={() => handleLogout()}><Link to="/logout">Logout</Link></li> 
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="/home">Home</Link></li>
            </ul>
        </div>
    )
}

function handleLogout(){
    global.isLoggedIn=false;
}
export default Nav;