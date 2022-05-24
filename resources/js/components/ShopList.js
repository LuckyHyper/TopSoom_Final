import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ScanButton from "./ScanButton/ScanButton";
import ShopItem from "./ShopItem";

export default function ShopList(props) {
    const [list, setList] = useState([]);
    const [reload, setReload] = useState();
    const [somme, setSomme] = useState(0);
    const [isDisable, setDisable] = useState(true);
    const [reload2, setReload2] = useState(1);

    useEffect(() => {
        setSomme(0);
        axios
            .get(`/api/shop-list`)

            .then((res) => {
                setList(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, [reload, reload2]);

    const deleteAll = async () => {
        setReload(reload + 1);
        await axios
            .delete(`/api/delete-all-items/`)
            .then((res) => {
                props.setShopNum(0);
                setSomme(0);
            })

            .catch((err) => console.log(err));
    };
    const bottom_line = () => {
        let s = 0;
        let z = 0;
        list.map((y) => {
            s = y.product_price * y.quantity;
            z = z + s;
            setSomme(z);
        });
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
                    list.map((item) => {
                        return (
                            <ShopItem
                                product_name={item.product_id}
                                price={item.product_price}
                                quantity={item.quantity}
                                itemId={item.id}
                                setReload={setReload}
                                setShopNum={props.setShopNum}
                                shopNum={props.shopNum}
                                setSomme={setSomme}
                                setReload2={setReload2}
                                setDisable={setDisable}
                            />
                        );
                    })}
            </Box>
            <Box display="flex" justifyContent="center" p={3}>
                <Text mr={5} borderBottom="1px solid #343F56" color="#343F56">
                    {somme} dt
                </Text>
                {isDisable ? (
                    <Button
                        bgColor="#FB9300"
                        size="sm"
                        color="#f2f2f2"
                        onClick={bottom_line}
                        disabled
                    >
                        Calculate
                    </Button>
                ) : (
                    <Button
                        bgColor="#FB9300"
                        size="sm"
                        color="#f2f2f2"
                        onClick={bottom_line}
                    >
                        Calculate
                    </Button>
                )}
            </Box>
            <ScanButton></ScanButton>
        </Box>
    );
}
