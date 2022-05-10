import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function SignIn(props) {
    let navigate= useNavigate();
    var AuthButtons = "";
   
    const submitLogout = () => {
        axios.post('/api/logout').then((res) => {
            if (res.data.status === 200) {
                localStorage.removeItem("auth_token");
                localStorage.removeItem("auth_name");
                swal("Success", res.data.message, "success");
                navigate("/");
            }
        });
    };

    if (!localStorage.getItem("auth_token")) {
        AuthButtons = (
            <div className="SignInContainer">
                <Link to="/register">
                    <button className="RegisterButton" onClick={() => props.setOpen(false)}>Register</button>
                </Link>
                <Link to="/login">
                    <button className="LoginButton" onClick={() => props.setOpen(false)} >Login</button>
                </Link>
            </div>
        );
    } else {
        AuthButtons = (
            <div className="SignInContainer">
                <button className="LogoutButton" onClick={submitLogout}>
                    Logout
                </button>
            </div>
        );
    }
    return <div>{AuthButtons}</div>;
}
export default SignIn;
