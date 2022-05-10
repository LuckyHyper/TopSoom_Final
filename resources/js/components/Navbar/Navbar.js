import React from "react";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../Logo/Logo";
import SignIn from "./SignIn";
import NavLinks from "./NavLinks";
import ShoppingLogo from "./ShoppingLogo"
import { MobileNavLinks } from "./MobileNavLinks";
import "./Navbar.css";

export default function Navbar(props) {
    
    const DeviceSize = {
        mobile: 768,
        tablet: 992,
        laptop: 1324,
        desktop: 2024,
    };
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <div>
            {!isMobile && (
                <div className="NavbarContainer">
                    <div className="LeftSection">
                        <Logo />
                    </div>
                    <div className="MiddleSection">
                        {!isMobile && <NavLinks />}
                    </div>
                    <div className="RightSection">
                        {!isMobile && <SignIn />}
                    </div>
                </div>
            )} 
            {isMobile && (
                <div className="NavbarContainer">
                    <div className="LeftSection">
                        {isMobile && <MobileNavLinks />}
                    </div>
                    <div className="MiddleSection">
                             <Logo />
                    </div>
                    <div className="RightSection">
                        <ShoppingLogo shopNum={props.shopNum} setShopNum={props.setShopNum} />
                    </div>
                </div>
            )} 
        </div>
    );
}