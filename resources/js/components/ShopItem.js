import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
    IoIosRemoveCircleOutline,
    IoIosAddCircleOutline,
} from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

export default function ShopItem(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    const [checkbox, setCheckbox] = useState(false);
    const itemId= props.itemId;

     useEffect(() => { 

        props.setReload2(quantity);
        axios
            .put(`/api/item-quantity`,{itemId,quantity})
        
    },[quantity]); 
  
    const deleteItem = async () => {
        props.setReload(props.itemId);
        props.setSomme(0);
          await axios
            .delete(`/api/delete-item/${props.itemId}`)
            .then((res) => {
            })
            .catch((err) => console.log(err));
            
        props.setShopNum(props.shopNum-1);
            
    };

    return (
        <Box d="flex" p={1} m={0.1} ml={2}>
            <Box d="flex" alignItems="center" mr={3}>
                <Box
                    border="1px solid #343F56"
                    p={0.5}
                    boxSize="15px"
                    borderRadius="6px"
                    onClick={() => {
                        if (checkbox == false) setCheckbox(true);
                        else setCheckbox(false);
                    }}
                >
                    {checkbox && (
                        <Box bgColor="#343F56" borderRadius="6px" width="100%" height="100%" />
                    )}
                </Box>
            </Box>
            <Box
                bgColor="#e6e6e6"
                width="100%"
                minHeight="50px"
                d="flex"
                borderRadius="15px"
                justifyContent="space-between"
            >
                <Box p={1} pl={4} width="70%" >
                    <Text textDecoration={checkbox && 'line-through'} textDecorationColor="#343F56" color="#343F56" fontSize="15px" > {props.product_name} </Text>
                    <Text display="flex" justifyContent="left" color="#343F56" ml="1.5rem" >{props.price}</Text>
                </Box>
                <Box
                    d="flex"
                    alignItems="center"
                    p={1}
                    pr={2}
                    width="4.5rem"
                >
                    {quantity > 1 ? (
                        <button onClick={ () => setQuantity(quantity - 1) }>
                            <Text color="#343F56" fontSize="18px" pr={1.5} pl={1.5}>
                                <IoIosRemoveCircleOutline />
                            </Text>
                        </button>
                    ) : (
                        <button onClick={deleteItem}>
                            <Text color="#343F56" fontSize="17px" pr={1.5} pl={1.5}>
                                <BsTrash />
                            </Text>
                        </button>
                    )}
                    <Text color="#343F56" >{quantity}</Text>
                    <button onClick={ () => setQuantity(quantity + 1) }>
                        <Text color="#343F56" fontSize="18px" pr={1.5} pl={1.5}>
                            <IoIosAddCircleOutline />
                        </Text>
                    </button>
                </Box>
            </Box>
        </Box>
    );
}
