import React from "react";
import "./Logo.css";
import { Link } from 'react-router-dom';

export function Logo() {
    return (
            <Link to="/android_asset/index.html" >
                <h2 className="LogoText">TopSoom</h2>
            </Link>
    );
}
