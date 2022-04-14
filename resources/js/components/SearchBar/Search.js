import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { BiSearch } from "react-icons/bi";

export default function Search(props) {

    return (
        <div className="search-bar">
                <input
                    type="text"
                    onChange={(e) =>   props.setSearch(e.target.value)}
                    className="search-input"
                    placeholder="Search"
                />

            <Link
                className="btn-cta-freequote search-btn"
                to="/"
                onClick={props.ProductsByName}
            >
                <div className="bi-search">
                    <BiSearch size={18}/>
                </div>
            </Link>
        </div>
    );
}