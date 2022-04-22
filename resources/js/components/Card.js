import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            mb={5}
            mt={5}
            mr={3}
            ml={3}
            width="125px"
            height="140px"
            bgColor="#f2f2f2"
            borderRadius="1.5rem"
            boxShadow="1px 1px 10px 1px rgba(0,0,0,0.15)"
        >
            <Box
                pt={3}
                pl={3}
                pr={3}
                width="100%"
                display="flex"
                justifyContent="space-between"
            >
                <Text fontSize="20px">
                    <BiPlus />
                </Text>

                <Link to="/price-list" state={{barcode : props.barcode, product_name: props.product_name}}>

                    <Text fontSize="18px">
                        <FiArrowRight />
                    </Text>
                </Link>
            </Box>
            <Image
                p={3}
                Width="80px"
                height="80px"
                borderRadius={"md"}
                margin="auto"
                src=""
                alt="image"
            />
            <Text
                display="flex"
                justifyContent="center"
                fontFamily="'Roboto', sans-serif"
                fontSize="12px"
                p={2}
                mb={2}
            >
                {props.product_name}
            </Text>
        </Box>
    );
}

export default Card;