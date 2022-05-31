import React, { useState} from "react";
import Footer from "../Footer";
import Search from "../SearchBar/Search";
import Slider from "../Slider/Slider";
import { SliderData } from "../Slider/SliderData";
import "./Home.css";

import {
    Box,
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    FcFinePrint,
    FcPhoneAndroid,
    FcInTransit,
    FcCamera,
} from "react-icons/fc";


//HOW IT WORKS FEATURES
const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={"center"}
                justify={"center"}
                color={"white"}
                rounded={"full"}
                bg={"gray.100"}
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={"gray.600"}>{text}</Text>
        </Stack>
    );
};
//ABOUT US FEATURES
const Feature2 = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={"row"} align={"center"}>
            <Flex
                w={8}
                h={8}
                align={"center"}
                justify={"center"}
                rounded={"full"}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};
export default function Home(props) {

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };
    const contactSubmit = (e) => {
        e.preventDefault();
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios.post(`/api/contact`, contact).then((res) => 
            {
                if (res.data.status === 200) {
                    swal("Success", res.data.message, "success");
                }
            });
        });
    }
    
    return (
        <div className="home-container">
            <Box mt="5rem">
                  <Search  setSearch={props.setSearch} ProductsByName={props.ProductsByName} />
                </Box>
            <Slider slides={SliderData} />

            <section className="about-us" id="about-us">
                <Container maxW={"5xl"} pt="75px" >
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Stack spacing={4}>
                            <Heading>About us</Heading>
                            <Text color={"gray.500"} fontSize={"lg"}>
                                We are a group of young developers that shares
                                the same goal which is to garantee that the
                                costumer would be able to compare the price of
                                goods from different popular supermarkets which
                                eventually allows him to make sure to get a deal
                                that's tailored to him at the best price. We
                                also seek to provide the user the best user
                                experience with an appealing and easy to use
                                website and mobile application
                            </Text>
                        </Stack>
                        <Flex>
                            <Image
                                rounded={"md"}
                                alt={"feature image"}
                                src={
                                    "https://cardboardit.com/wp-content/uploads/2022/01/biggest_challenge_blog.png"
                                }
                                objectFit={"cover"}
                                boxSize="350px"
                                p={10}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
            </section>
            <Box height="90px" id="how-it-works"></Box>
            <section className="How-it-works"  py="90px">
                <Box py={4}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <Feature
                            icon={<Icon as={FcPhoneAndroid} w={10} h={10} />}
                            title={"Scan Products"}
                            text={
                                "Once our application is installed in your mobile phone, you can easily scan any product"
                            }
                        />
                        <Feature
                            icon={<Icon as={FcFinePrint} w={10} h={10} />}
                            title={"Search Products"}
                            text={
                                "If you are nowhere near any of our featured supermarkets and you want to check the price of a specific product you can simply look for it via our search engine "
                            }
                        />
                        <Feature
                            icon={<Icon as={FcInTransit} w={10} h={10} />}
                            title={"Compare Prices"}
                            text={
                                "You can compare the prices in different supermarkets to get the best deal tailored to you"
                            }
                        />
                    </SimpleGrid>
                </Box>
            </section>
            <section className="contact-us" id="contact-us">
                <div className="contact-container">
                    <div className="contact-box">
                        <div className="left"></div>
                        <form onSubmit={contactSubmit}>
                            <div className="right">
                                <h2 className="page-titles">Contact Us</h2>
                                <input
                                    type="text"
                                    className="field"
                                    placeholder="Your Name"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    className="field"
                                    placeholder="Your Email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    className="field"
                                    placeholder="Phone"
                                    name="phone"
                                    value={contact.phone}
                                    onChange={handleChange}
                                />
                                <textarea
                                    placeholder="Message"
                                    className="field"
                                    name="message"
                                    value={contact.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button className="send-btn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="footer">
                {" "}
                <Footer />
            </section>
        </div>
    );
}