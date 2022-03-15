import React from "react";
import styled from "styled-components";
import "./Logo";
import { Link } from "react-router-dom";


export function Logo() {
    return (
        <Link to='/' className="LogoWrapper">
            <h2 className="LogoText">TopSoom</h2>
        </Link>
    );
}
