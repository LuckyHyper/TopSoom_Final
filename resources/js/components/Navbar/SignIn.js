import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

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
                    <button className="RegisterButton">Register</button>
                </Link>
                <Link to="/login">
                    <button className="LoginButton">Login</button>
                </Link>
            </div>
        );
    } else {
        AuthButtons = (
            <div className="SignInContainer">
                <button className="LoginButton" onClick={submitLogout}>
                    Logout
                </button>
            </div>
        );
    }
    return <div>{AuthButtons}</div>;
}
export default SignIn;
