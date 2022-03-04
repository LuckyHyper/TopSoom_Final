import React, { useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

export default function Scan(props) {
    const [text, setText] = useState("");

    return (
        <div>
            <Navbar />
            <br />
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        @
                    </span>
                </div>
                <input
                    onChange={(e) => props.setText(e.target.value)}
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>{" "}
            <br />
            <Link
                to="/"
                className="chakra-button"
                onClick={props.showProduct}
                title="show product"
            >
                Show product
            </Link>
        </div>
    );
}
