import React, { useEffect, useState } from "react";
import "../../css/app.css";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";
import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import axios from "axios";

export default function PriceList(props) {
    const [search, setSearch] = useState([]);
    const ProductsByName = async () => {
        
        console.log("test")
        console.log(props.data)
        return await axios
            .get(`http://127.0.0.1:8000/api/price?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
            })

            .catch((err) => console.log(err));
    };
    
    return (
        <div>
            <Navbar />
            <Search setSearch={setSearch} ProductsByName={ProductsByName}/>

            <div>
                {props.data != undefined &&
                    props.data.map((item) => {
                        return (
                            <Card
                                shopName={item.shop_name}
                                price={item.price}
                                image=""
                            />
                        );
                    })
                }
            </div>

            <div style={{ marginBottom: 15 }}>
                <ScanButton></ScanButton>
            </div>
        </div>
    );
}
