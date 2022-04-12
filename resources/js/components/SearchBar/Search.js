import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
import { BiSearch } from "react-icons/bi";

export default function Search(props) {
    const [data, setData] = useState();

    function handleCLick(){
        props.setSearch(data)
        props.ProductsByName();
    }
    return (
        <div className="search-bar">
                <input
                    type="text"
                    onChange={(e) => setData(e.target.value)}
                    className="search-input"
                    placeholder="Search"
                />

            <Link
                className="btn-cta-freequote search-btn"
                to="/"
                onClick={handleCLick}
            >
                <div className="bi-search">
                    <BiSearch size={18}/>
                </div>
            </Link>
        </div>
    );
}