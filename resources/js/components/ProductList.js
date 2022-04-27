import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar/Navbar";
import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProductList(props) {
    const [search, setSearch] = useState([]);
    const ProductsByName = async () => {
        
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
            })

            .catch((err) => console.log(err));
    };
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <Navbar />
            <div data-aos="slide-down" data-aos-duration="1200">
                <Search
                    setSearch={setSearch}
                    ProductsByName={ProductsByName}
                />
            </div>
            <Box display="flex" flexWrap="wrap" justifyContent="center" mt={12}>
                { props.data != undefined &&
                                props.data.map((item, key) => {
                                    return (
                                        <Card product_name={item.product_name} barcode={item.barcode}/>
                                    )
                                })
                }
                
            </Box>
                <ScanButton></ScanButton>
        </div>
    );
}