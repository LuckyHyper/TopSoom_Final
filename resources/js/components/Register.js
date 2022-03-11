import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
    Text,
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import swal from "sweetalert";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Register() {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        error_list: [],
    });
    const test = () => {};
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };
    const registerSubmit = (e) => {
        e.preventDefault();
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`/api/register`, register).then((res) => {
                if (res.data.status === 200) {
                    // localstorage.setItem("auth_token", res.data.token);
                    // localstorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                } else {
                    setRegister({
                        ...register,
                        error_list: res.data.validation_errors,
                    });
                }
            });
        });
    };

    return (
        <div>
            <Navbar />
            {}
            <div>
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
                            <form onSubmit={registerSubmit}>
                                <Stack
                                    spacing={4}
                                    p="1rem"
                                    backgroundColor="whiteAlpha.900"
                                    boxShadow="md"
                                >
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={
                                                    <CFaUserAlt color="gray.300" />
                                                }
                                            />
                                            <Input
                                                type="text"
                                                placeholder="name"
                                                name="name"
                                                value={register.name}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                        <Flex justify="end">
                                            <Text fontSize="sm">
                                                {register.error_list.name}
                                            </Text>
                                        </Flex>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={
                                                    <CFaUserAlt color="gray.300" />
                                                }
                                            />
                                            <Input
                                                type="email"
                                                placeholder="email address"
                                                onChange={handleChange}
                                                name="email"
                                                value={register.email}
                                            />
                                        </InputGroup>
                                        <Flex justify="end">
                                            <Text fontSize="sm">
                                                {register.error_list.email}
                                            </Text>
                                        </Flex>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                color="gray.300"
                                                children={
                                                    <CFaLock color="gray.300" />
                                                }
                                            />
                                            <Input
                                                type="password"
                                                placeholder="Password"
                                                onChange={handleChange}
                                                name="password"
                                                value={register.password}
                                            />
                                        </InputGroup>
                                        <Flex justify="end">
                                            <Text fontSize="sm">
                                                {register.error_list.password}
                                            </Text>
                                        </Flex>
                                    </FormControl>
                                    <FormControl>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                color="gray.300"
                                                children={
                                                    <CFaLock color="gray.300" />
                                                }
                                            />
                                            <Input
                                                type="password"
                                                placeholder="Confirm Password"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <Button
                                        borderRadius={6}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="full"
                                    >
                                        Register
                                    </Button>
                                    <Link to="/">
                                        <Button
                                            borderRadius={6}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="full"
                                            
                                            _hover={{ bgColor:"#ff9900" }}
                                        >
                                           <Text textDecorationLine="none">Back</Text> 
                                        </Button>
                                    </Link>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>
                </Flex>
            </div>
        </div>
    );
}

export default Register;
