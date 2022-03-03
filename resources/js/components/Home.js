import React, { useEffect, useState } from "react";
import "../../css/app.css";
import Card from "./card/card";
import Navbar from "./navbar";
import Button from "./button/button";
import axios from "axios";
import Search from "./searchBar/Search";
import ScanButton from "./scanButton/ScanButton";

export default function Home(props) {
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
