import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import { MenuToggle } from "./MenuToggle";
import "./Navbar.css";

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="MobileNavLinksContainer">
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <ul className="MobileLinksWrapper">
                    <li className="MobileLinkItem">
                        <a className="MobileLink" href="#">
                            About us
                        </a>
                    </li>
                    <li className="MobileLinkItem">
                        <a className="MobileLink" href="#">
                            How it works
                        </a>
                    </li>
                    <li className="MobileLinkItem">
                        <a className="MobileLink" href="#">
                            Explore
                        </a>
                    </li>
                    <li className="MobileLinkItem">
                        <a className="MobileLink" href="#">
                            Impact
                        </a>
                    </li>
                    <div className="Marginer" />
                    <SignIn />
                </ul>
            )}
        </div>
    );
}
