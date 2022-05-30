import React, { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

export default function ProductList(props) {
    const [search, setSearch] = useState([]);
    const barcode = location.state?.barcode;

    useEffect(async () => {
        Aos.init();
    }, [props.reload4]);

    const ProductsByName = async () => {
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
                console.log(res.data);
            })

            .catch((err) => console.log(err));
    };
    
    const DeviceSize = {
        mobile: 768,
    };
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

    return (
        <div>
            <div data-aos="slide-down" data-aos-duration="1200">
                <Box mt="5rem">
                  <Search setSearch={setSearch} ProductsByName={ProductsByName} />
                </Box>
            </div>
            {isMobile ? (
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    mt={6}
                >
                    {props.data != undefined &&
                        props.data.map((item, key) => {
                            return (
                                <Card
                                    key={item.barcode}
                                    product_name={item.product_name}
                                    barcode={item.barcode}
                                    image={item.image}
                                    details={item.details}
                                    setShopNum={props.setShopNum}
                                    shopNum={props.shopNum}
                                />
                            );
                        })}
                </Box>
            ) : (
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    mt={10}
                    p={2}
                >
                    {props.data != undefined &&
                        props.data.map((item, key) => {
                            return (
                                <Card
                                    key={item.barcode}
                                    product_name={item.product_name}
                                    barcode={item.barcode}
                                    image={item.image}
                                    details={item.details}
                                    setShopNum={props.setShopNum}
                                    shopNum={props.shopNum}
                                />
                            );
                        })}
                </Box>
            )}

            <ScanButton></ScanButton>
        </div>
    );
}
