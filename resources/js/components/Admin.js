import React, { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    Box,
    Avatar,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

function Admin() {
    const [file, setFile] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/admin',file).then((res) => {

        });
    }

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="3"
                justifyContent="center"
                alignItems="center"
            >
                <Avatar bg="teal.500" />
                <Heading color="teal.400">Welcome</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" />
                                    <FormLabel>Select file</FormLabel>
                                    <Input
                                        type="file"
                                        name="file"
                                        onChange={(e) =>  setFile(e.target.files[0])}
                                    />
                                </InputGroup>
                            </FormControl>

                            <Button
                                borderRadius={6}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={(e)=> handleSubmit(e)}
                            >
                                Upload
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Admin;
