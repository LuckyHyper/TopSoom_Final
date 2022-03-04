import React, {useState } from "react";
import "../../css/app.css";
import Card from "./card/card";
import Navbar from "./navbar";
import axios from "axios";
import Search from "./searchBar/Search";
import ScanButton from "./scanButton/ScanButton";

export default function Home(props) {
    const [search, setSearch] = useState([]);

    const ProductsByName = async () => {
        return await axios
            .get(`http://127.0.0.1:8000/api/price?product_name=${search}`)

            .then((res) => {
                props.setdata(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <Search setSearch={setSearch} ProductsByName={ProductsByName}/>

            <div>
                {props.data !=undefined &&
                    props.data.map((element, key) => {
                        return (
                            <Card
                                key={key}
                                productName={element.Sname}
                                price={element.price}
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
