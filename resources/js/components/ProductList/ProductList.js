import React ,{ useState ,useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../SearchBar/Search";
import axios from 'axios';
import { Box, Image, Text } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";


function ProductList(props) {
    const [search, setSearch] = useState([]);
    const ProductsByName = async () => {
        return await axios
            .get(`/api/price?product_name=${search}`)

            .then((res) => {
                props.setData(res.data);
                console.log(res.data);
                console.log(props.data);
                console.log(search);
            })

            .catch((err) => console.log(err));
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div>
            <Navbar />
            <div data-aos="flip-left" data-aos-duration="2000">
                <Search
                    setSearch={setSearch}
                    ProductsByName={ProductsByName}
                />
            </div>
            <div className="cards-container">
                <Box
                    p={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100vw"
                    height="12rem"
                >
                    <Image
                        boxSize="100px"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                    />
                </Box>
                <Box p={8} width="100vw" bgColor="#d6d6d6" borderTopRadius="25px">
                    <Box
                        p={2}
                        mb={3}
                        width="100%"
                        bgColor="red"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Text fontFamily="sans-serif" fontSize="sm">Product Name</Text>
                        <Text fontSize="sm">**</Text>
                    </Box>
                    <Box
                        pr={8}
                        pl={8}
                        pt={1}
                        pb={1}
                        width="100%"
                        bgColor="#6666"
                        display="flex"
                        justifyContent="space-between"
                        borderRadius="25px"
                    >
                        
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default ProductList;
