import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ScanButton from "./ScanButton/ScanButton";
import ShopItem from "./ShopItem";

export default function ShopList(props) {
    const [list, setList] = useState([]);
    const [reload, setReload] = useState();
    const [isDisable, setDisable] = useState(false);
    const [reload2, setReload2] = useState(1);
    const [result, setResult] = useState({ monoprix: 0, carrefour: 0 });
    const [isShow, setShow] = useState(0);

    useEffect(async () => {
        await axios
            .get(`/api/shop-list`)

            .then((res) => {
                setList(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [reload, reload2]);

    const deleteAll = async () => {
        setShow(0);
        setReload(reload + 1);
        await axios
            .delete(`/api/delete-all-items/`)
            .then((res) => {
                props.setShopNum(0);
            })

            .catch((err) => console.log(err));
    };
    const total_price = () => {

        axios
            .get(`/api/shop-prices`)
            .then((res) => {
                setResult({ monoprix: res.data[1], carrefour: res.data[0] });
            })
            .catch((err) => console.log(err));
        return setShow(1)
    
    };

    return (
        <Box marginBottom={16}>
            <Box height="4rem"></Box>
            <Box
                bgColor="#f2f2f2"
                d="flex"
                top="0"
                height="60px"
                p={2}
                justifyContent="space-between"
                position="fixed"
                width="100%"
                zIndex="999"
            >
                <Box p={1}>
                    <Link to="/">
                        <Text fontSize="30px" p={1} pl={0}>
                            <IoIosArrowBack />
                        </Text>
                    </Link>
                </Box>

                <Box d="flex" justifyContent="center">
                    <Text
                        p={2}
                        fontSize="18px"
                        fontFamily="'Roboto', sans-serif"
                        alignItems="center"
                    >
                        My List
                    </Text>
                </Box>
                <Box>
                    <Button
                        m={1}
                        p={2}
                        variant="solid"
                        color="#f2f2f2"
                        bgColor="#FB9300"
                        size="sm"
                        onClick={deleteAll}
                        _hover={{ bgColor: "#FB9300" }}
                    >
                        Clear All
                    </Button>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                p={1}
            >
                {list != undefined &&
                    list.map((item, key) => {
                        return (
                            <ShopItem
                                key= {item.barcode}
                                product_name={item.product_name}
                                price={item.product_price}
                                quantity={item.quantity}
                                barcode={item.barcode}
                                setReload={setReload}
                                setShopNum={props.setShopNum}
                                shopNum={props.shopNum}
                                setReload2={setReload2}
                                setDisable={setDisable}
                                setShow={setShow}
                            />
                        );
                    })}
            </Box>

            <Box p={3} pl={20} pr={20}>
                { isShow==1 &&
                <Box>
                <Box
                    pr={6}
                    pl={6}
                    pt={1}
                    pb={1}
                    mb={2}
                    width="100%"
                    border="1.5px solid #FB9300"
                    boxShadow="1px 1px 2px #FB9300 "
                    display="flex"
                    justifyContent="space-around"
                    borderRadius="25px"
                >
                    <Text fontSize="13px" bgColor="transparent" color="343F56">
                        Monoprix
                    </Text>

                    <Text fontSize="15px">
                        {" "}
                        {result.monoprix != 0 ? result.monoprix : "?"} dt
                    </Text>
                </Box>
                <Box
                    pr={6}
                    pl={6}
                    pt={1}
                    pb={1}
                    width="100%"
                    border="1.5px solid #FB9300"
                    boxShadow="1px 1px 2px #FB9300 "
                    display="flex"
                    justifyContent="space-around"
                    borderRadius="25px"
                >
                    <Text fontSize="13px" bgColor="transparent" color="343F56">
                        Carrefour
                    </Text>

                    <Text fontSize="15px">
                        {" "}
                        {result.carrefour != 0 ? result.carrefour : "?"} dt
                    </Text>
                </Box>
                </Box>
                }
                <Box d="flex" justifyContent="center">
                    {isDisable ? (
                        <Button
                            bgColor="#FB9300"
                            size="sm"
                            color="#f2f2f2"
                            onClick={total_price}
                            disabled
                            mt="1.5rem"
                            justifyContent="center"
                        >
                            Calculate
                        </Button>
                    ) : (
                        <Button
                            bgColor="#FB9300"
                            width="150px"
                            size="sm"
                            color="#f2f2f2"
                            onClick={total_price}
                            justifyContent="center"
                            mt="1.5rem"
                        >
                            Calculate
                        </Button>
                    )}
                </Box>
                <Box d="flex" justifyContent="center">
                    <Link to='/product-list'>
                        <Button
                            bgColor="#FB9300"
                            width="150px"
                            size="sm"
                            color="#f2f2f2"
                            onClick={total_price}
                            justifyContent="center"
                            mt="0.8rem"
                        >
                            Add Product
                        </Button>
                    </Link>
                </Box>
            </Box>
            <ScanButton></ScanButton>
        </Box>
    );
}
