import React from "react";
import "./Navbar.css";

export default function NavLinks(props) {
    return (
        <div className="NavLinksContainer">
            <ul className="LinksWrapper">
                <li className="LinkItem">
                    <a className="Link" href="/#about-us">
                        About us
                    </a>
                </li>
                <li className="LinkItem">
                    <a className="Link" href="/#how-it-works">
                        How it works
                    </a>
                </li>
                <li className="LinkItem">
                    <a className="Link" href="/#contact-us">
                        Contact us
                    </a>
                </li>
            </ul>
        </div>
    );
}
