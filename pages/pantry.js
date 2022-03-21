import React from "react";
import { Header } from "../components/Header";
import {
    Heading,
    Flex,
    Box,
    HStack,
    VStack,
    Spacer,
    Checkbox,
    CheckboxGroup,
    Button,
    ButtonGroup,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Link as ChakraLink,
    Select,
    Center
} from '@chakra-ui/react';



import Link from "next/link";

import { PantryCategory } from "../components/PantryList/PantryCategory";

import { pantry_data } from "../PantryData";

import { PriorityIngredients } from '../components/PantryPage/PriorityIngredients';
import { BlockedIngredients } from "../components/PantryPage/BlockedIngredients";
import { AvailableIngredients } from '../components/PantryPage/AvailableIngredients';
import { DefaultIngredients } from "../components/PantryPage/DefaultIngredients";





const PantryPage = () => {
    return (
        <>
            <Header />
            <Box align="center" marginRight={4} mt={5}>
                <Heading size='xl'>
                    My Pantry
                </Heading>
            </Box>
            <Flex justifyContent='space-around'>
                <HStack spacing={20} align='stretch' alignItems='baseline' display='flex'
                    marginTop={4}>
                        <AvailableIngredients />
                    
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <DefaultIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <PriorityIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <BlockedIngredients />
                    </Box>
                </HStack>
            </Flex>
            <Center>

                <Button colorScheme='teal' size='md'>
                    <Link href="/recipes">
                        <ChakraLink> <strong>Get Recipes</strong> </ChakraLink>
                    </Link></Button>

            </Center>
        </>
    );
}
export default PantryPage;