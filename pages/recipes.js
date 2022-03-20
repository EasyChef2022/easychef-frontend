import React from "react";
import { Header } from "../components/Header";
import {
    Stack,
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

function Options() {
    return (
        <HStack>
            <Box>
                <Checkbox>Allow recipes with missing ingredients</Checkbox>
            </Box>
            <Box>
                Max Missing Ingredients
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Box>
            <Box>
                <Select placeholder='Sort recipes by'>
                    <option value='option1'>Cook time</option>
                    <option value='option3'>Serving size</option>
                </Select>
            </Box>
        </HStack>
    );
}

function RecipesList() {
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
                {displayRecipes.map(function (recipe) {
                    return (
                        <RecipeCard
                            recipe={recipe}
                        />
                    );
                })}
            </VStack>
        );
    }
}

function RecipeCard({ recipe }) {
    return (
        <Box shadow='md' marginLeft={2} marginRight={1} w='100%'
            paddingBottom={2}>
            <HStack justifyContent='start' spacing='24px' marginLeft={2}>
                <Box width='100px'>
                    <strong>{recipe.name}</strong>
                    <Image src={`dummy-recipe.jpg`} />
                </Box>
                <VStack>
                    <Box>
                        <p>{recipe.description}</p>
                        <p><strong>Cook time:</strong> {recipe.cook_time}</p>
                        <p><strong>Serving size:</strong> {recipe.serving_size}</p>
                        <p>Add to favorite recipes <StarIcon /></p>
                        <Button size='sm' colorScheme='teal'>Show full recipe</Button>
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}

function Recipes() {
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
                                <strong>Bought some rice? Just run out of parsley? Want to prioritize that
                                    salmon that's about to go bad? <Link href='/pantry'>
                                        <ChakraLink color='teal.500'>Go to your pantry
                                            and update it!</ChakraLink>
                                    </Link>
                                </strong>
                            </Box>
                            <Box paddingLeft={4} paddingRight={4} align='self-start'
                            >
                                <Options />
                            </Box>

                            <Box maxWidth='50%'>
                                <RecipesList />
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Recipes;
