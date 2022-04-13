import React, { useState } from "react";
import SignIn from "./SignIn";
import { MenuToggle } from "./MenuToggle";
import "./Navbar.css";

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="MobileNavLinksContainer">
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <ul className="MobileLinksWrapper" data-aos="slide-right" data-aos-duration="800">
                    <div data-aos="slide-right" data-aos-duration="800">
                        <li className="MobileLinkItem">
                            <a className="MobileLink" href="#">
                                About us
                            </a>
                        </li>
                    </div>
                    <div data-aos="slide-right" data-aos-duration="1000">
                        <li className="MobileLinkItem">
                            <a className="MobileLink" href="#">
                                How it works
                            </a>
                        </li>
                    </div>
                    <div data-aos="slide-right" data-aos-duration="1200">
                        <li className="MobileLinkItem">
                            <a className="MobileLink" href="#">
                                Explore
                            </a>
                        </li>
                    </div>
                    <div data-aos="slide-right" data-aos-duration="1400">
                        <li className="MobileLinkItem">
                            <a className="MobileLink" href="#">
                                Impact
                            </a>
                        </li>
                    </div>
                    <div className="Marginer" />
                    <SignIn />
                </ul>
            )}
        </div>
    );
}
