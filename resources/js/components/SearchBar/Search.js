import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Search.css";

export default function Search(props) {
    return (
        <div className="search-bar">
            <div className="search-box">
                <input
                    type="text"
                    onChange={(e)=> props.setSearch(e.target.value)}
                    className="search-input"
                    placeholder="Search"
                />
            </div>

            <Link
                className="btn-cta-freequote search-btn"
                to="/android_asset/index.html"
                onClick={props.ProductsByName}
            >
                <i className="fa fa-search"></i>
            </Link>
        </div>
    );
}
