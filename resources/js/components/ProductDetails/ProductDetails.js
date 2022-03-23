import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../SearchBar/Search";
import "./ProductDetails";

export default function ProductDetails({ data }) {
    console.log(data);
    return (
        <div>
            <Navbar />
            <Search />
            <h1>hello world</h1>
        </div>
    );
}
