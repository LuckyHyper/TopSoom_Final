import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ScanButton from "./ScanButton/ScanButton";
import ShopItem from "./ShopItem";

export default function ShopList() {
    const [list, setList] = useState();
    const [reload, setReload] = useState();
    const [somme, setSomme] = useState(0);

    useEffect(() => {
        
        axios
            .get(`/api/shop-list`)

            .then((res) => {
                setList(res.data);
                console.log(res.data);
            })

            .catch((err) => console.log(err));
    }, [reload]);
    const deleteAll = async () => {
        axios
        .delete(`/api/delete-all-items/1`)
        .then((res) => {
            console.log(list);
        })

        .catch((err) => console.log(err));
    }
    const CalculateSomme = () => {
        if(list != undefined){
            list.map((item) => {
               setSomme(somme + item.product_price );
            })
            return somme;
        }
    }

    return (
        <Box marginBottom={16}>
            <Box height="4rem"></Box>
            
            <Box
                bgColor="#f2f2f2"
                d="flex"
                top="0"
                height="60px"
                p={2}
                justifyContent="space-between"
                position="fixed"
                width="100%"
            >
                <Box  p={1}>
                    <Link to="/">
                        <Text fontSize="30px" p={1} pl={0}>
                            <IoIosArrowBack />
                        </Text>
                    </Link>
                </Box>

                <Box d="flex" justifyContent="center">
                    <Text
                        p={2}
                        fontSize="18px"
                        fontFamily="'Roboto', sans-serif"
                        alignItems="center"
                    >
                        My List
                    </Text>
                </Box>
                <Box >
                <Button  m={1} p={2} variant='solid' bgColor="#FB9300" size="sm" onClick={deleteAll} _hover={{ bgColor:"#FB9300" }}>
                    Clear All
                </Button>
            </Box>
                
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                p={1}
            >
                {list != undefined &&
                    list.map((item) => {
                        return (
                            <ShopItem
                                product_name={item.product_id}
                                price={item.product_price}
                                itemId={item.id}
                                setReload={setReload}
                            />
                        );
                    })}
            </Box>
            <Box display="flex" justifyContent="center" p={3}>
                <Text mr={5} borderBottom="1px solid black">
                    {somme}
                </Text>

                <Button bgColor="#FB9300" size="sm" onClick={CalculateSomme}>
                    Calculate
                </Button>
            </Box>
            <ScanButton></ScanButton>
        </Box>
    );
}
