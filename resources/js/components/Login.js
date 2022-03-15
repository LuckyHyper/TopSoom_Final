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
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Login() {
    let navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [login, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    })
    const handleShowClick = () => setShowPassword(!showPassword);
    const handleChange= (e) => {
        setLogin({...login, [e.target.name] : e.target.value});
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        const Data = {
            email: login.email,
            password: login.password,
        }

        axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.post('/api/login',Data).then(res => {
            if(res.data.status=== 200){
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("auth_name", res.data.username);
                swal("Success", res.data.message, "success");
                navigate('/');
                
            }else if(res.data.status===401){
                swal("Warning", res.data.message, "warning");
            }else{
                setLogin({
                    ...login,
                    error_list: res.data.validation_errors,
                });
            }
        });
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
                                        <span>{login.error_list.email}</span>
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
                                        <span>{login.error_list.password}</span>
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
