import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";

import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box, Image, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function PriceList(props) {
    const [search, setSearch] = useState([]);
    const [test, setTest] = useState(0);

    useEffect(() => {
        Aos.init();
    }, []);

    const ProductsByName = async () => {
        setTest(1);
        return await axios
            .get(`/api/price?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <div>
            <Navbar />

            <div data-aos="slide-down" data-aos-duration="1200">
                <Search
                    setSearch={setSearch}
                    ProductsByName={ProductsByName}
                />
            </div>
            {test != 0 ? (
                <Stack>
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
                    <Box
                        p={6}
                        width="100vw"
                        bgColor="#f2f2f2"
                        borderTopRadius="25px"
                    >
                        <Box
                            pt={1.5}
                            pl={2}
                            pr={2}
                            mb={8}
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Text
                                fontFamily="'Roboto', sans-serif"
                                fontSize="20px"
                                borderLeft="4px solid #cc6600"
                                borderRadius="0px 15px"
                                bgColor="#ffe6cc"
                                pl={5}
                                pr={7}
                            >
                                {search}
                            </Text>
                            <Text fontSize="20px">
                                <Link to="/">
                                    <BsFillCartPlusFill />
                                </Link>
                            </Text>
                        </Box>

                        <Box pl={8} pr={8}>
                            {props.data != undefined &&
                                props.data.map((item, key) => {
                                    return (
                                        <Box
                                            pr={6}
                                            pl={6}
                                            pt={1}
                                            pb={1}
                                            mb={4}
                                            width="100%"
                                            bgColor="#6666"
                                            display="flex"
                                            justifyContent="space-between"
                                            borderRadius="25px"
                                        >
                                            <Text fontSize="13px">
                                                {item.shop_name}
                                            </Text>

                                            <Text fontSize="15px">
                                                {item.price}
                                            </Text>
                                        </Box>
                                    );
                                })}
                        </Box>
                    </Box>
                </Stack>
            ) : null}

            <div style={{ marginBottom: 15 }}>
                <ScanButton></ScanButton>
            </div>
        </div>
    );
}

export default PriceList;
