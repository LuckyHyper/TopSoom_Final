import React, { useEffect, useState } from "react";
import "../../css/app.css";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";

import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";

export default function PriceList(props) {
    const [data, setdata] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("http://127.0.0.1:8000/api/price")
    //         .then((res) => setdata(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

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
                {/* <Button routing title="scan product" path={"/scan"}></Button> */}
                <ScanButton></ScanButton>
            </div>
        </div>
    );
}
