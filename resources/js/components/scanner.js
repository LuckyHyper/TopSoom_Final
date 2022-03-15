import React, { useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar/Navbar";

export default function Scan(props) {
    const [text, setText] = useState("");

    return (
        <div>
            <Navbar />
            <br />
            <div className="input-group mb-3">
                <input
                    onChange={(e) => props.setText(e.target.value)}
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </div>{" "}
            <br />
            <Button
                routing
                title="Show product"
                path={"/"}
                onClick={props.showProduct}
            />
        </div>
    );
}
