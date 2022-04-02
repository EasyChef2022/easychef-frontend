import React, { useEffect, useState } from "react";
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

export const PantryComponent = () => {


    return (
        <Flex flexDirection="column" alignSelf="flex-start" pl={4} pt={4} width="100%" pr={8}>
                <Text alignSelf="flex-start" fontSize="xl">
                    Available Ingredients:
                </Text>
                <List spacing={3} fontSize="24" mt={2}>
                    <PantryCategory
                    dbname="herbs"
                    catname="Herbs"
                    key={"herbs"}
                    />

                    <PantryCategory 
                    dbname="spices"
                    catname="Spices"
                    key={"spices"}
                    />
                    
                    <PantryCategory 
                    dbname="proteins"
                    catname="Proteins"
                    key={"proteins"}
                    />

                    <PantryCategory 
                    dbname="vegetables"
                    catname="Vegetables"
                    key={"vegetables"}
                    />

                </List>
            </Flex>
    );

}