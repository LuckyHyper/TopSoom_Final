import React from "react";
import { useMediaQuery } from "react-responsive";
import { Logo } from "../Logo/Logo";
import SignIn from "./SignIn";
import NavLinks from "./NavLinks";
import ShoppingLogo from "./ShoppingLogo";
import { MobileNavLinks } from "./MobileNavLinks";
import "./Navbar.css";
import { Box } from "@chakra-ui/react";

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
                        <Box mr={4}>
                            <ShoppingLogo
                                shopNum={props.shopNum}
                                setShopNum={props.setShopNum}
                                reload3={props.reload3}
                            />
                        </Box>
                        {!isMobile && <SignIn setReload3={props.setReload3} reload3={props.reload3}/>}
                    </div>
                </div>
            )}
            {isMobile && (
                <div className="NavbarContainer">
                    <div className="LeftSection">
                        {isMobile && <MobileNavLinks setReload3={props.setReload3} reload3={props.reload3}/>}
                    </div>
                    <div className="MiddleSection">
                        <Logo />
                    </div>
                    <div className="RightSection">
                        <ShoppingLogo
                            shopNum={props.shopNum}
                            setShopNum={props.setShopNum}
                            reload3={props.reload3}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
