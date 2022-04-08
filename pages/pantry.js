import React from "react";
import { Header } from "../components/Header";
import {
    Heading,
    Flex,
    Box,
    HStack,
    Button,
    Link as ChakraLink,
    Center
} from '@chakra-ui/react';



import Link from "next/link";


import { PriorityIngredients } from '../components/PantryPage/PriorityIngredients';
import { BlockedIngredients } from "../components/PantryPage/BlockedIngredients";
import { AvailableIngredients } from '../components/PantryPage/AvailableIngredients';
import { DefaultIngredients } from "../components/PantryPage/DefaultIngredients";




//Pantry page, container for AvailableIngredients, DefaultIngredients, PriorityIngredients, and BlockedIngredients
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
                    
                    {/* The following blocks are pantry features that can be implemented at a later date. */}
                    {/* <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <DefaultIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <PriorityIngredients />
                    </Box> */}
                    {/* <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <BlockedIngredients />
                    </Box> */}
                </HStack>
            </Flex>
            <Center>

                <Button colorScheme='teal' size='md' mr={3}>
                    <Link href="/recipes" passHref>
                        <ChakraLink> <strong>Get Recipes</strong> </ChakraLink>

                    </Link>
                </Button>
                <Button size='md' colorScheme='teal'>
                    <Link href="/favorites" passHref>
                        <ChakraLink><strong>See favorite recipes</strong></ChakraLink>
                    </Link>
                </Button>
            </Center>

        </>

    );
}
export default PantryPage;