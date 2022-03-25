import React, { useState, useEffect } from "react";
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
    Image,
    LightMode,
    Text
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { Sidebar } from "../components/Sidebar";
import Link from "next/link";
import { data } from "../RecipeData";
//import { RecipesList } from "../components/RecipePage/RecipesList";
import { RecipeCard } from "../components/RecipePage/RecipeCard";


export const Recipes = () => {

    const [displayRecipes, setDisplayRecipes] = useState();
    
    const getRecipes = () => {


        let ingredients = [];
        const herbs = JSON.parse(sessionStorage.getItem('herbs'));
        const spices = JSON.parse(sessionStorage.getItem('spices'));
        const proteins = JSON.parse(sessionStorage.getItem('proteins'));
        const vegetables = JSON.parse(sessionStorage.getItem('vegetables'));

        if (herbs != null && herbs.length != 0) {
            ingredients.push(herbs);
        }
        if (spices != null && spices.length != 0) {
            ingredients.push(spices);
        }
        if (proteins != null && proteins.length != 0) {
            ingredients.push(proteins);
        }
        if (vegetables != null && vegetables.length != 0) {
            ingredients.push(vegetables);
        }


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "ingredients": ingredients.flat(),
                "ban": [0]
            })


        };

        //alert(ingredients);

        fetch('http://easychef.herokuapp.com/recipe/get_recipe_by_ingredients', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success != 0) {
                    setDisplayRecipes(data);
                }

            })
            .catch((error) =>
                console.log(error));


    };
    return (
        <Box>
            <Header />
            <Flex justifyContent="center"
                flexDirection="row"
                >
                <HStack>
                    <Box >
                        <VStack>
                            <Box>
                                <strong>Bought some rice? Just run out of parsley? Want to prioritize that
                                    salmon that's about to go bad? <Link href='/pantry'>
                                        <ChakraLink color='teal.500'>Go to your pantry
                                            and update it!</ChakraLink>
                                    </Link>
                                </strong>
                            </Box>
                            <Box paddingTop="-4" paddingLeft={4} paddingRight={4} align='self-start'
                            >
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
                                        <LightMode>
                                            <Select placeholder='Sort recipes by'>
                                                <option value='option1'>Cook time</option>
                                                <option value='option3'>Serving size</option>
                                            </Select>
                                        </LightMode>
                                    </Box>
                                </HStack>
                            </Box>
                            <VStack alignSelf="flex-start">
                                {displayRecipes != undefined ? (
                                    displayRecipes.map(function (recipe) {
                                        return (
                                            <RecipeCard
                                                data={recipe}
                                            />
                                        );
                                    })
                                ) : (
                                <VStack alignSelf="center">
                                <Text>No Recipes Generated</Text>
                                <Button onClick={getRecipes}>
                                    Generate Now
                                </Button>
                                </VStack>
                                )}

                            </VStack>

                        </VStack>
                    </Box>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Recipes;
