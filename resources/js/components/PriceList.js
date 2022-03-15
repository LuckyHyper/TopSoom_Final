import React, { useEffect, useState } from "react";
import "../../css/app.css";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";

import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";

export default function PriceList(props) {
    const [data, setdata] = useState([]);

    return (
        <div>
            <Navbar />
            <Search />

            <div>
                {props.data != undefined &&
                    props.data.map((element, key) => {
                        return (
                            <Card
                                key={key}
                                productName={element.market_id}
                                price={element.price}
                                image=""
                            />
                        );
                    })}
            </div>

            <div style={{ marginBottom: 15 }}>
                <ScanButton></ScanButton>
            </div>
        </div>
    );
}
