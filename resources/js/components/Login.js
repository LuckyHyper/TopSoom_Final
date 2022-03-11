import React, { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    const handleShowClick = () => setShowPassword(!showPassword);
    const handleChange= (e) => {
        setLogin({...login, [e.target.name] : e.target.value});
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/login').then(res => {

        });
    }
    return (
        <div>
            <Navbar />
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
                            <form onSubmit={loginSubmit}>
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
                                                type="email"
                                                placeholder="email address"
                                                name="email"
                                                value={login.email}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
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
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                placeholder="Password"
                                                name="password"
                                                value={login.password}
                                                onChange={handleChange}
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    h="1.75rem"
                                                    size="sm"
                                                    onClick={handleShowClick}
                                                >
                                                    {showPassword
                                                        ? "Hide"
                                                        : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </FormControl>
                                    <Button
                                        borderRadius={6}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="full"
                                    >
                                        Login
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>
                    <Box>
                        New to us?{" "}
                        <Link color="teal.500" href="#">
                            Sign Up
                        </Link>
                    </Box>
                </Flex>
            </div>
        </div>
    );
};

export default Login;
