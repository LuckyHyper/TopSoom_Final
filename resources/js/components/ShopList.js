import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ScanButton from "./ScanButton/ScanButton";
import ShopItem from "./ShopItem";

export default function ShopList() {
    const [list, setList] = useState();

    useEffect(() => {
        axios
            .get(`/api/shop-list`)

            .then((res) => {
                setList(res.data);
            })

            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Box
                bgColor="#f2f2f2"
                d="flex"
                top="0"
                height="60px"
                p={2}
                justifyContent="center"
            >
                <Box position="fixed" left="0" top="0" p={2}>
                    <Link to="/">
                        <Text fontSize="30px" p={1} pl={0}>
                            <IoIosArrowBack />
                        </Text>
                    </Link>
                </Box>

                <Box d="flex" justifyContent="center">
                    <Text
                        p={1}
                        fontSize="18px"
                        fontFamily="'Roboto', sans-serif"
                        alignItems="center"
                    >
                        My List
                    </Text>
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
                        return <ShopItem product_name={item.product_id} price={item.product_price} />
                    })}
            </Box>
            <Box display="flex" justifyContent="center" p={3}>
                <Text mr={5} borderBottom="1px solid black">
                    test
                </Text>
                
                <Button
                    colorScheme="teal"
                    size="sm"
                    onClick={() => console.log(list)}
                >
                    Calculate
                </Button>
            </Box>
            <ScanButton></ScanButton>
        </div>
    );
}
