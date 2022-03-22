import React from "react";
import { Header } from "../components/Header";
import {
    Stack,
    Heading,
    HStack,
    VStack,
    Flex,
    Checkbox,
    CheckboxGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box,
    Select,
    Link as ChakraLink,
    Spacer,
    Button,
    Image
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { Sidebar } from "../components/Sidebar";
import Link from "next/link";
import { data } from "../RecipeData";

function FavoritesList() {
    const displayRecipes = [...data];
    if (displayRecipes.length === 0) {
        return (
            <strong>No recipes found!
                <Link href="/pantry">
                    <ChakraLink color='teal.500'> Update your pantry ingredients </ChakraLink>
                </Link>
                and try again.</strong>

        );
    }
    else {
        return (
            <VStack>
                {displayRecipes.map(function (favorite) {
                    return (
                        <FavoriteCard
                            favorite={favorite}
                        />
                    );
                })}

            </VStack>
        );
    }
}

function FavoriteCard({ favorite }) {
    return (
        <Box shadow='md' marginLeft={2} marginRight={1} w='100%'
            paddingBottom={2}>
            <HStack justifyContent='start' spacing='24px' marginLeft={2}>
                <Box width='100px'>
                    <strong>{favorite.name}</strong>
                    <Image src={`dummy-recipe.jpg`} />
                </Box>
                <VStack>
                    <Box>
                        <p>{favorite.description}</p>
                        <p><strong>Cook time:</strong> {favorite.cook_time}</p>
                        <p><strong>Serving size:</strong> {favorite.serving_size}</p>
                        <p>Remove from favorite recipes <StarIcon /></p>
                        <Button size='sm' colorScheme='teal'>Show full recipe</Button>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}

function ButtonBar() {
    return (
        <HStack>
            <Button size='md' colorScheme='teal'>
                <Link href="/pantry">
                    <ChakraLink><strong>Go Back to Pantry</strong></ChakraLink>
                </Link>
            </Button>
            <Button size='md' colorScheme='teal'>
                <Link href="/recipes">
                    <ChakraLink><strong>Get Recipes</strong></ChakraLink>
                </Link>
            </Button>
        </HStack>
    );
}

function Favorites() {
    return (
        <Box>
            <Header />
            <Flex justifyContent="space-between"
                flexDirection="row"
                marginTop={10}
                h='10'>
                <HStack marginTop={200}>
                    <Box>
                        <VStack>
                            <Box paddingTop={4}>
                                <Box align="center" marginRight={4}>
                                    <Heading size='xl'>
                                        My Favorite Recipes
                                    </Heading>
                                </Box>
                            </Box>
                            <ButtonBar />
                            <Box maxWidth='50%'>
                                <FavoritesList />
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Favorites;
