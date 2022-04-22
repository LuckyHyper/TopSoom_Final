import React from "react";
import Navbar from "./Navbar/Navbar";
import Search from "./SearchBar/Search";

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function ProductDetails({ data }) {
    console.log(data);
    return (
        <div>
            <Navbar />
            <Search />
            {data != null &&
                data.map((element) => {
                    return (
                        <Container maxW={"7xl"} key={element.product_id}>
                            <SimpleGrid
                                columns={{ base: 1, lg: 2 }}
                                spacing={{ base: 8, md: 10 }}
                                py={{ base: 18, md: 24 }}
                            >
                                <Flex>
                                    <Image
                                        rounded={"md"}
                                        alt={"product image"}
                                        src={
                                            "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
                                        }
                                        fit={"cover"}
                                        align={"center"}
                                        w={"100%"}
                                        h={{
                                            base: "100%",
                                            sm: "400px",
                                            lg: "500px",
                                        }}
                                    />
                                </Flex>
                                <Stack spacing={{ base: 6, md: 10 }}>
                                    <Box as={"header"}>
                                        <Heading
                                            lineHeight={1.1}
                                            fontWeight={600}
                                            fontSize={{
                                                base: "2xl",
                                                sm: "4xl",
                                                lg: "5xl",
                                            }}
                                        >
                                            {element.market_id}
                                        </Heading>
                                        <Text
                                            color={useColorModeValue(
                                                "gray.900",
                                                "gray.400"
                                            )}
                                            fontWeight={300}
                                            fontSize={"2xl"}
                                        >
                                            {element.price}
                                        </Text>
                                    </Box>

                                    <Stack
                                        spacing={{ base: 4, sm: 6 }}
                                        direction={"column"}
                                        divider={
                                            <StackDivider
                                                borderColor={useColorModeValue(
                                                    "gray.200",
                                                    "gray.600"
                                                )}
                                            />
                                        }
                                    >
                                        <Box>
                                            <Text
                                                fontSize={{
                                                    base: "16px",
                                                    lg: "18px",
                                                }}
                                                color={useColorModeValue(
                                                    "yellow.500",
                                                    "yellow.300"
                                                )}
                                                fontWeight={"500"}
                                                textTransform={"uppercase"}
                                                mb={"4"}
                                            >
                                                Product Details
                                            </Text>

                                            {/* <List spacing={2}>
                                                <ListItem>
                                                    <Text
                                                        as={"span"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Between lugs:
                                                    </Text>{" "}
                                                    20 mm
                                                </ListItem>
                                                <ListItem>
                                                    <Text
                                                        as={"span"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Bracelet:
                                                    </Text>{" "}
                                                    leather strap
                                                </ListItem>
                                            </List> */}
                                        </Box>
                                    </Stack>

                                    <Button
                                        rounded={"none"}
                                        w={"full"}
                                        mt={8}
                                        size={"lg"}
                                        py={"7"}
                                        // bg={useColorModeValue(
                                        //     "gray.900",
                                        //     "gray.50"
                                        // )}
                                        // color={useColorModeValue(
                                        //     "white",
                                        //     "#0BC5EA "
                                        // )}
                                        color="#0BC5EA"
                                        textTransform={"uppercase"}
                                        _hover={{
                                            transform: "translateY(2px)",
                                            boxShadow: "lg",
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                </Stack>
                            </SimpleGrid>
                        </Container>
                    );
                })}
        </div>
    );
}
