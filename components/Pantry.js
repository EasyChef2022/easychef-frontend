import React, { useState } from "react";
import {
    Flex,
    Text,
    Spacer,
    List,
    ListItem,
    ListIcon,
    HStack
} from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronRightIcon, ArrowDownIcon, SmallCloseIcon } from "@chakra-ui/icons";
import PantryCategory from "./PantryList/PantryCategory";

export const Pantry = () => {

    const numHerbs = 25;
    const numSpices = 13;
    const numProteins = 209;
    const numVegetables = 2;
    const herbData = [["Basil", 1, "bunches"], ["Sage", 2, "tbsp"], ["Rosemary", 3, "Stems"]];

    return (
        <Flex flexDirection="column" alignSelf="flex-start" pl={4} pt={4} width="100%" pr={8}>
                <Text alignSelf="flex-start" fontSize="xl">
                    Available Ingredients:
                </Text>
                <List spacing={3} fontSize="24" mt={2}>
                    <PantryCategory 
                    name="Herbs"
                    data={herbData}/>

                    <PantryCategory 
                    name="Spices"
                    amount={numSpices}/>
                    
                    <PantryCategory 
                    name="Proteins"
                    amount={numProteins}/>

                    <PantryCategory 
                    name="Vegetables"
                    amount={numVegetables}/>

                </List>
            </Flex>
    );

}