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
    let data = [];
    if(props.dbname=="herbs"){
        data = [["Basil", 1, "bunches"], ["Sage", 2, "tbsp"], ["Rosemary", 3, "stems"], ["Thyme", -1, "measurement"]];
    }

    return (
        <>
        <ListItem onClick={toggleCollapse} sx={{ cursor: 'pointer', userSelect: "none" }}>
            <ListIcon as={collapsed ? ArrowForwardIcon : ArrowDownIcon}  color='green.500' />
            {props.catname} ({data?.length})
        </ListItem>
        
        {data?.map((ingredient)=>(
            
            <>
            <Box sx={{display: collapsed ? "none" : "block"}}>
            <ListItem pl="4vw" fontSize={20}>
                <HStack width="100%">
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    <Text>{ingredient[0] /* Ingredient (Rosemary) */}</Text>
                    <Spacer/>
                    {ingredient[1]!=-1 ? ( //-1 means infinite amount
                    <>
                    <Text>{ingredient[1] /* Amount (3) */}</Text>
                    <Text>{ingredient[2] /* Measurement (Stems) */}</Text>
                    </>
                    ): (<></>)}
                    
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