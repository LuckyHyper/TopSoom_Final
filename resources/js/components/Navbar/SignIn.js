import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function SignIn(props) {
    return (
        <div className="SignInContainer">
            <button className="RegisterButton">Register</button>
            <Link to="/login">
                {" "}
                <button className="LoginButton">Login</button>
            </Link>
        </div>
    );
}
