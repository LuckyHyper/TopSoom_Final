import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Card(props) {
    const product = {
        product_name: props.product_name,
        product_price: props.product_price,
        barcode: props.barcode,
    };
    const DeviceSize = {
        small_mobile: 346, 
        mobile: 768
    };
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    const smallMobile = useMediaQuery({ maxWidth: DeviceSize.small_mobile });

    const addShopList = () => {
        return axios
            .post(`/api/shop-list`, product)

            .then((res) => {
                if (res.data.status === 200) {
                    props.setShopNum(props.shopNum + 1);
                }else{
                    swal("", res.data.message, "info");
                }
            })

            .catch((err) => console.log(err));
    };

    return  !isMobile ? (
        <Box
            display="flex"
            flexDirection="column"
            mb={5}
            mt={5}
            mr={3}
            ml={3}
            width="180px"
            height="200px"
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
                        image: props.image,
                        details: props.details,
                    }}
                >
                    <Text fontSize="18px">
                        <FiArrowRight />
                    </Text>
                </Link>
            </Box>
            <Image
                p={1}
                width="120px"
                height="120px"
                borderRadius="12px"
                margin="auto"
                src={props.image}
                alt="image"
            />
            <Box height="65px" borderBottomRadius="1rem" bgColor="#f2f2f2" alignItems="center">
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
    ) : smallMobile ? (
        <Box
        display="flex"
        flexDirection="column"
        mb={5}
        mt={5}
        mr={3}
        ml={3}
        width="180px"
        height="180px"
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
                    image: props.image,
                    details: props.details,
                }}
            >
                <Text fontSize="18px">
                    <FiArrowRight />
                </Text>
            </Link>
        </Box>
        <Image
            p={1}
            width="90px"
            height="90px"
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
    )
    : isMobile && (
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
                        image: props.image,
                        details: props.details,
                    }}
                >
                    <Text fontSize="18px">
                        <FiArrowRight />
                    </Text>
                </Link>
            </Box>
            <Image
                p={1}
                width="90px"
                height="90px"
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
    )
    ;
}

export default Card;
