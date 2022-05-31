import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Stack direction={"row"} spacing={6}>
                    <Link href={"#"}>About Us</Link>
                    <Link href={"#"}>How it Works</Link>
                    <Link href={"#"}>Contact Us</Link>
                </Stack>
                <Text>© 2022 TopSoom. All rights reserved</Text>
            </Container>
        </Box>
    );
}
