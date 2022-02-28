import React, { useState } from "react";
import "../components/scanner/Scanner.css";
import {Link} from 'react-router-dom';

export default function Scanner(props) {

    const [codeB, setCodeB] = useState();

    function handleChange(e) {
       setCodeB(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="scan-page">
            <form className="form-inline scan-form">
                <div className="form-group mx-sm-3 mb-2">
                    <label className="sr-only">Code a Barre</label>
                    <input
                        type="text"
                        className="form-control  scan-input"
                        value={codeB}
                        onChange={handleChange}
                        placeholder="Code a Barre"
                    />
                </div>
                <Link
                    to="/"
                    type="button"
                    onClick={() => props.Codetransfer(codeB)}
                    className="btn btn-dark mb-2"
                >
                    Confirm
                </Link>
            </form>
        </div>
    );
}
