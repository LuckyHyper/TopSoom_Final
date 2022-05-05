import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function PriceList(props) {
    const location = useLocation();
    const barcode = location.state?.barcode;
    const price = location.state?.price;
    const product_name = location.state?.product_name;
    const [search, setSearch] = useState([]);
    const [number, setNumber]= useState(0);

    const product = {
        product_name: product_name,
        product_price: price,
    };

    useEffect(async () => {
        Aos.init();
        await axios
            .get(`/api/price?barcode=${barcode}`)

            .then((res) => {
                props.setData(res.data);
            })

            .catch((err) => console.log(err));
    }, [number]);
    const ProductsByName = async () => {
        return await axios
            .get(`/api/product?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
            })

            .catch((err) => console.log(err));
    };
    const addShopList = () => {
        return axios
            .post(`/api/shop-list`, product)

            .then((res) => {
                if (res.data.status === 200) {
                    setNumber(number+1);
                    console.log(number);
                }
            })

            .catch((err) => console.log(err));
    };

    return (
        <div>
        <Stack bgColor="#fff" width="100%" height="100vh">
            <Navbar number={number}/>
            <div data-aos="slide-down" data-aos-duration="1000">
                <Search setSearch={setSearch} ProductsByName={ProductsByName} />
            </div>
            <Box
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="14rem"
            >
                <div data-aos="zoom-out" data-aos-duration="2000">
                    <Image
                        boxSize="100px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                    />
                </div>
            </Box>
            <Box p={6} pr={4} width="100vw" bgColor="#f2f2f2" borderTopRadius="25px">
                <Box
                    pt={1.5}
                    pl={2}
                    pr={0}
                    mb={8}
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                >
                    <Text
                        fontFamily="'Roboto', sans-serif"
                        fontSize="20px"
                        color="343F56"
                        borderBottom="2px solid #FB9300"
                        pl={5}
                        pr={7}
                    >
                        {product_name}
                    </Text>
                    <Text fontSize="20px">
                        <Button
                            variant="ghost"
                            onClick={addShopList}
                            _focus={{ color: "#FB9300" }}
                        >
                            <BsFillCartPlusFill />
                        </Button>
                    </Text>
                </Box>

                <Box pl={8} pr={8}>
                    {props.data != undefined &&
                        props.data[0].price.map((item) => { 
                            return (
                                <Box
                                    pr={6}
                                    pl={6}
                                    pt={1}
                                    pb={1}
                                    mb={4}
                                    width="100%"
                                    border="1.5px solid #FB9300"
                                    boxShadow="1px 1px 2px #FB9300 "
                                    display="flex"
                                    justifyContent="space-between"
                                    borderRadius="25px"
                                > 
                                    <Text fontSize="13px" bgColor="transparent" color="343F56">
                                        {item.shop_name}
                                    </Text>

                                    <Text fontSize="15px">{item.price}</Text>
                                </Box>
                            );
                        })}
                </Box>
            </Box>
            </Stack>
            <ScanButton></ScanButton>
        </div>
    );
}

export default PriceList;
