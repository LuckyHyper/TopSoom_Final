import React from "react";
import { Box,Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import ShopCard from "./ShopCard";
import ScanButton from "./ScanButton/ScanButton";

export default function ShopList() {
    return (
        <div>
             <Box bgColor="#f2f2f2" d="flex" top="0" height="60px" p={2} justifyContent="center">
             <Box position="fixed" left="0" top="0" p={2} >
                <Link to='/'>
                    <Text fontSize="30px" p={1} pl={0}>
                         <IoIosArrowBack />
                    </Text>
                </Link>
                </Box>
           
                <Box d="flex" justifyContent="center">
                    <Text p={1} ml={2} fontSize="18px" fontFamily="'Roboto', sans-serif" alignItems="center">My List</Text>
                </Box>
               
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" p={1}>
              <ShopCard />
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </Box>
            <Box display="flex" justifyContent="end" p={3}>
                <Text mr={5} borderBottom="1px solid black">test</Text>
                <Button colorScheme='teal' size='sm'>Calculate</Button>
            </Box>
            <ScanButton></ScanButton>
        </div>
    );
}
