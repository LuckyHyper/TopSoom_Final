import React from "react";
import { Box, Image, Text, Link, Stack } from "@chakra-ui/react";
import Button from "./Button";

function Card(props) {
    const { shopName, image, price } = props;

    return (
        <Box
            p={4}
            display={{ md: "flex" }}
            // maxWidth="27rem"
            borderWidth={4}
            margin={5}
        >
            <Image
                maxWidth="150px"
                borderRadius={"md"}
                margin="auto"
                src={image}
                alt="image"
            />

            <Stack
                align={{ base: "center", md: "stretch" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
            >
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {shopName}
                </Text>

                <Link
                    my={1}
                    display="block"
                    fontSize="md"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {price}
                </Link>

                <Button routing title="view details" path={"/ProductDetails"} />
            </Stack>
        </Box>
    );
}

export default Card;
