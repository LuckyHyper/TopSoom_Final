import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
    IoIosRemoveCircleOutline,
    IoIosAddCircleOutline,
} from "react-icons/io";
import { BsTrash } from "react-icons/bs";

export default function ShopItem(props) {
    const [num, setNum] = useState(1);
    const [checkbox, setCheckbox] = useState(false);
  
    const deleteItem = async () => {
        props.setReload(props.itemId);
          await axios
            .delete(`/api/delete-item/${props.itemId}`)
            .then((res) => {
            })
            .catch((err) => console.log(err));
            
    };


    return (
        <Box d="flex" p={1} m={0.1} ml={2}>
            <Box d="flex" alignItems="center" mr={3}>
                <Box
                    border="1px solid black"
                    p={0.5}
                    boxSize="15px"
                    borderRadius="3px"
                    onClick={() => {
                        if (checkbox == false) setCheckbox(true);
                        else setCheckbox(false);
                    }}
                >
                    {checkbox && (
                        <Box bgColor="black" width="100%" height="100%" />
                    )}
                </Box>
            </Box>
            <Box
                bgColor="#e6e6e6"
                width="100%"
                height="50px"
                d="flex"
                justifyContent="space-between"
            >
                <Box>
                    <Text textDecoration={checkbox && 'line-through'} > {props.product_name} </Text>
                    <Text>{props.price}</Text>
                </Box>
                <Box
                    d="flex"
                    alignItems="center"
                    p={1}
                    pr={2}
                >
                    {num > 1 ? (
                        <button onClick={() => setNum(num - 1)}>
                            <Text fontSize="18px" pr={1.5} pl={1.5}>
                                <IoIosRemoveCircleOutline />
                            </Text>
                        </button>
                    ) : (
                        <button onClick={deleteItem}>
                            <Text fontSize="17px" pr={1.5} pl={1.5}>
                                <BsTrash />
                            </Text>
                        </button>
                    )}
                    <Text>{num}</Text>
                    <button onClick={() => setNum(num + 1)}>
                        <Text fontSize="18px" pr={1.5} pl={1.5}>
                            <IoIosAddCircleOutline />
                        </Text>
                    </button>
                </Box>
            </Box>
        </Box>
    );
}
