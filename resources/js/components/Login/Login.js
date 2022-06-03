import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Login(props) {
    let navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
        error_list: [],
    });
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };
    const loginSubmit = (e) => {
        e.preventDefault();
        const Data = {
            email: login.email,
            password: login.password,
        };

        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post("/api/login", Data).then((res) => {
                if (res.data.status === 200) {
                    props.setReload3(props.reload3+1);
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate("/");
                } else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
                } else {
                    setLogin({
                        ...login,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };
    return (
        <div>
            <div id="Body">
                <div id="container">
                    <form id="loginform" onSubmit={loginSubmit}>
                        <h2 id="headerTitle">Login</h2>
                        <div className="row">
                            <label>Email</label>
                            <input
                                placeholder="Enter your email"
                                type="text"
                                name="email"
                                onChange={handleChange}
                            />
                            <span>{login.error_list.email}</span>
                            <label>Password</label>
                            <input
                                placeholder="Enter your password"
                                type="password"
                                name="password"
                                value={login.password}
                                onChange={handleChange}
                            />
                            <span>{login.error_list.password}</span>
                        </div>
                        <div id="button" className="row">
                            <button>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
