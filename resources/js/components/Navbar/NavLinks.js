import React from "react";
import styled from "styled-components";
import "./Navbar.css";

export default function NavLinks(props) {
    return (
        <div className="NavLinksContainer">
            <ul className="LinksWrapper">
                <li className="LinkItem">
                    <a className="Link" href="#">
                        About us
                    </a>
                </li>
                <li className="LinkItem">
                    <a className="Link" href="#">
                        How it works
                    </a>
                </li>
                <li className="LinkItem">
                    <a className="Link" href="#">
                        Explore
                    </a>
                </li>
                <li className="LinkItem">
                    <a className="Link" href="#">
                        Impact
                    </a>
                </li>
            </ul>
        </div>
    );
}
