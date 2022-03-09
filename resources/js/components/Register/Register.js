import React from "react";
import "./Register.css";
import axios from "axios";

const [register, setRegister] = useState({
    name: '',
    email: '',
    password:''
})
const handleChange = (e) => {
    setRegister({...state, [e.target.name]: e.target.value })
}
const registerSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/users`,register).then(res => {

    })
}

export default function Register() {
    return (
        <div className="container">
            <form className="register-form" onSubmit={registerSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        value={register.name}
                        onChange={handleChange}
                        name="name"
                        type=""
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        value={register.email}
                        onChange={handleChange}
                        name="email"
                        type=""
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        value={register.password}
                        onChange={handleChange}
                        name="password"
                        type=""
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-warning">
                    Submit
                </button>
            </form>
        </div>
    );
}
