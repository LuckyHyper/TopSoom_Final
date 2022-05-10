import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { Box, Text } from "@chakra-ui/react";

function ShoppingLogo(props) {
    const [shopLength, setShopLength] = useState(0);

    useEffect(() => {
        axios
        .get(`/api/shop-list-length`)
    
        .then((res) => {
            console.log("res.data");
            props.setShopNum(res.data);
        })
        .catch((err) => console.log(err));
            
    }, []);
    return (
        <Link to="/shop-list">
            <Box position="relative" width="1.5rem" height="1.5rem"  >
                <Box position="absolute" bottom="0" left="0"> 
                    <RiShoppingCartLine />
                </Box>
                <Box
                    position="absolute"
                    p={0}
                    width="12px"
                    height="12px"
                    right="0"
                    top="0"
                    bgColor="#FB9300"
                    borderRadius="45%"
                    display="flex"
                    justifyContent="center"
                >
                    <Text fontSize="9px">{props.shopNum}</Text>
                </Box>
            </Box>
        </Link>
    );
}

export default ShoppingLogo;
