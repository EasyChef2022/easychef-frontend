import React, { useEffect, useState, useLayoutEffect } from "react";
import PropTypes, { array, string } from 'prop-types';

import {
    Flex,
    Text,
    Spacer,
    List,
    ListItem,
    ListIcon,
    HStack,
    Box,
    Link as ChakraLink,
    Icon
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon, ChevronRightIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { PantryEntry } from "./PantryEntry";


const PantryCategory = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    const [ingredients, setIngredients] = useState([]);


    const getData = () => {
        const result = JSON.parse(sessionStorage.getItem(props.dbname));
        if (result != null) {
            setIngredients(result);
            if(result.length==0){
                setCollapsed(true);
            }
        }
        
    }

    


    useEffect(() => {
        getData();
    }, [props.signal])


    return (
        <>
            <HStack>
                <ListItem onClick={() => setCollapsed(!collapsed)} sx={{ cursor: 'pointer', userSelect: "none" }}>
                    <ListIcon as={collapsed ? ArrowForwardIcon : ArrowDownIcon} color='green.500' />
                    {props.catname} ({ingredients?.length})
                </ListItem>



            </HStack>
            {ingredients.map((ingredient) => (

                <Box sx={{ display: collapsed ? "none" : "block" }}>
                    <PantryEntry ingredientValue={ingredient} category={props.dbname} callBack={getData} />
                </Box>

            ))}
        </>
    );

}


PantryCategory.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        ingredient: PropTypes.string,
        amount: PropTypes.number,
        measurement: PropTypes.string
    }))
}


export default PantryCategory