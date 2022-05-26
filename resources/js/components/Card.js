import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

function Card(props) {

    const product = {
        product_name: props.product_name,
        product_price: props.product_price,
        barcode: props.barcode
    };
    const addShopList = () => {
        console.log('heeee');
        return axios
            .post(`/api/shop-list`, product)

            .then((res) => {
                if (res.data.status === 200) {
                    props.setShopNum(props.shopNum+1);
                }
            })

            .catch((err) => console.log(err));
    }
    return (
        <Box
            display="flex"
            flexDirection="column"
            mb={5}
            mt={5}
            mr={3}
            ml={3}
            width="150px"
            height="170px"
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
                <button onClick={addShopList}>
                    <Text fontSize="20px">
                        <BiPlus />
                    </Text>
                </button>

                <Link
                    to="/price-list"
                    state={{
                        barcode: props.barcode,
                        product_name: props.product_name,
                        price: props.price,
                        image: props.image,
                    }}
                >
                    <Text fontSize="18px">
                        <FiArrowRight />
                    </Text>
                </Link>
            </Box>
            <Image
                p={1}
                width="80px"
                height="80px"
                borderRadius="12px"
                margin="auto"
                src={props.image}
                alt="image"
            />
            <Box height="65px" borderBottomRadius="1rem" bgColor="#f2f2f2">
                <Text
                    display="flex"
                    textAlign="center"
                    justifyContent="center"
                    fontFamily="'Roboto', sans-serif"
                    fontSize="12px"
                    pt={1}
                    p={2}
                    pb={2}
                >
                    {props.product_name}
                </Text>
            </Box>
        </Box>
    );
}

export default Card;
