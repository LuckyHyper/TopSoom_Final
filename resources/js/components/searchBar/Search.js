import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Search.css";

export default function Search(props) {
    const [search,setSearch] = useState();

    function handleChange(e){
        setSearch(e.target.value);
    }

    return (
        <div className="search-bar">
            <div className="search-box">
                <input
                    type="text"
                    onChange={handleChange}
                    className="search-input"
                    placeholder="Search"
                />
            </div>

            <Link className="btn-cta-freequote search-btn" to="/" onClick={() => props.SearchRequest(search)}>
                <i className="fa fa-search"></i>
            </Link>
        </div>
    );
}
