import React, { useState } from "react";
import PropTypes, { array, string } from 'prop-types';

import {
    Flex,
    Text,
    Spacer,
    List,
    ListItem,
    ListIcon,
    HStack,
    Box
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon, ChevronRightIcon, SmallCloseIcon} from "@chakra-ui/icons";

const PantryCategory = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    
    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
        <ListItem onClick={toggleCollapse} sx={{ cursor: 'pointer', userSelect: "none" }}>
            <ListIcon as={collapsed ? ArrowForwardIcon : ArrowDownIcon}  color='green.500' />
            {props.name} ({props.data?.length})
        </ListItem>
        
        {props.data?.map((ingredient)=>(
            
            <>
            <Box sx={{display: collapsed ? "none" : "block"}}>
            <ListItem pl="4vw" fontSize={20}>
                <HStack width="100%">
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    <Text>{ingredient[0] /* Ingredient (Rosemary) */}</Text>
                    <Spacer/>
                    <Text>{ingredient[1] /* Amount (3) */}</Text>
                    <Text>{ingredient[2] /* Measurement (Stems) */}</Text>
                    <ListIcon as={SmallCloseIcon} color='green.500' sx={{ cursor: 'pointer' }}/>
                </HStack>
            </ListItem>
            </Box>
            
            </>
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