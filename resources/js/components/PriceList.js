import React, { useEffect, useState } from "react";
import Search from "./SearchBar/Search";
import ScanButton from "./ScanButton/ScanButton";
import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function PriceList(props) {
    const location = useLocation();
    const barcode = location.state?.barcode;
    const product_name = location.state?.product_name;
    const image = location.state?.image;
    const details = location.state?.details;

    const [search, setSearch] = useState([]);
    const [data, setData] = useState();

    const product = {
        product_name: product_name,
        barcode: barcode,
    };

    useEffect(async () => {
        Aos.init();
        await axios
            .get(`/api/price?barcode=${barcode}`)

            .then((res) => {
                setData(res.data);
                console.log(res.data.product_name);
            })

            .catch((err) => console.log(err));
    }, []);
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
                    props.setShopNum(props.shopNum + 1);
                } else {
                    swal("Warning", res.data.message, "warning");
                }
            })

            .catch((err) => console.log(err));
    };
    const DeviceSize = {
        mobileSmall: 375,
    };
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobileSmall });

    return (
        <div>
            <Stack bgColor="#fff" width="100%" height="100vh">
                <div data-aos="slide-down" data-aos-duration="1000">
                    <Box mt="5rem" d="flex" justifyContent="center">
                        <Link to="/">
                            {isMobile ? (
                                <Box
                                    position="absolute"
                                    left="0"
                                    padding="5px"
                                    pl="12px"
                                >
                                    <IoMdArrowRoundBack fontSize="22px" />
                                </Box>
                            ) : (
                                <Box
                                    position="absolute"
                                    left="0"
                                    padding="5px"
                                    pl="20px"
                                >
                                    <IoMdArrowRoundBack fontSize="22px" />
                                </Box>
                            )}
                        </Link>
                        <Search
                            setSearch={setSearch}
                            ProductsByName={ProductsByName}
                        />
                    </Box>
                </div>
                <Box
                    p={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    height="14rem"
                >
                    <Image boxSize="220px" src={image} alt="Product Image" />
                </Box>
                <Box
                    p={6}
                    pr={4}
                    width="100vw"
                    bgColor="#f2f2f2"
                    borderTopRadius="25px"
                >
                    <Box
                        pt={1.5}
                        mb={2}
                        pl={4}
                        pr={4}
                        width="100%"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Text
                            fontFamily="'Roboto', sans-serif"
                            fontSize="20px"
                            color="343F56"
                            borderBottom="2px solid #FB9300"
                            p={2}
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
                    <Box>
                        <Text
                            fontFamily="'Roboto', sans-serif"
                            fontSize="124x"
                            color="343F56"
                            pl={10}
                            pr={10}
                            mb={8}
                        >
                             {details}
                        </Text>
                    </Box>

                    <Box pl={8} pr={8}>
                        {data != undefined &&
                            data[0].price.map((item, key) => {
                                return (
                                    <Box
                                        key={item.shop_name}
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
                                        <Text
                                            fontSize="13px"
                                            bgColor="transparent"
                                            color="343F56"
                                        >
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
            <ScanButton></ScanButton>
        </div>
    );
}

export default PriceList;
