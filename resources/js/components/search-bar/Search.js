import React from "react";
import "./Search.css";

export default function Seach() {
    return (
        <div className="search-bar">
            <div className="search-box">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                />
            </div>

            <a className="btn-cta-freequote search-btn" href="#">
                <i className="fa fa-search"></i>
            </a>
        </div>
    );
}
