import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { Box, Text } from "@chakra-ui/react";

function ShoppingLogo(props) {

    useEffect(() => {
        console.log(props.reload3);
        axios
        .get(`/api/shop-list-length`)
    
        .then((res) => {
            props.setShopNum(res.data);
        })
        .catch(() => props.setShopNum(0));
            
    }, [props.reload3]);
    return (

        <Link to="/shop-list" >
            <Box position="relative" width="1.5rem" height="1.5rem" >
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
