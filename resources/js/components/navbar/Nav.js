import React, { useState } from "react";
import './Nav.css';

function Nav() {

    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = ()=>{
        setShowLinks(!showLinks);
    }

        return (
        <div>
           <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
               <div className="navbar__logo">Logo</div>
                <ul className="navbar__links">
                    <li className="navbar__item">
                        <a href="/" className="navbar__link">
                            Home 
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="/" className="navbar__link">
                            About 
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="/" className="navbar__link">
                            Home 
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="/" className="navbar__link">
                            Contact 
                        </a>
                    </li>
                </ul>
                <button className="navbar__burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
           </nav>
           <br></br><br></br>
           </div>
        );
    
}
export default Nav;