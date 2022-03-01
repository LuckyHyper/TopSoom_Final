import React, { useState } from "react";
import Nav from "../components/navbar/Nav";
import Main from "../components/main/Main";
import Search from "../components/search-bar/Search";
import ScanButton from "../components/scan-button/ScanButton";

export default function Home(props) {

    const[search, setSearch]= useState();

    return (
        <div>
            <Nav />
            <Search SearchRequest={input => setSearch(input)}/>
            <ScanButton />
            <Main codeB={props.codeB} searchR={search}/>
        </div>
    );
}
