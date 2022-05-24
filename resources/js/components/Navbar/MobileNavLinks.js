import React, { useState, useEffect } from "react";
import SignIn from "./SignIn";
import { MenuToggle } from "./MenuToggle";
import "./Navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="MobileNavLinksContainer">
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <ul className="MobileLinksWrapper" data-aos="slide-right" data-aos-duration="800">

                        <li className="MobileLinkItem" data-aos="slide-right" data-aos-duration="800">
                            <a className="MobileLink" href="#">
                                About us
                            </a>
                        </li>
                    <li className="MobileLinkItem" data-aos="slide-right" data-aos-duration="950" >
                        <a className="MobileLink" href="#">
                            How it works
                        </a>
                    </li>
                    <li className="MobileLinkItem" data-aos="slide-right" data-aos-duration="1100">
                        <a className="MobileLink" href="#">
                            Explore
                        </a>
                    </li>
                    <li className="MobileLinkItem" data-aos="slide-right" data-aos-duration="1350">
                        <a className="MobileLink" href="#">
                            Impact
                        </a>
                    </li>
                    <div className="Marginer" />
                    <SignIn setOpen={setOpen} isOpen={isOpen} setReload3={props.setReload3} reload3={props.reload3}/>
                </ul>
            )}
        </div>
    );
}
