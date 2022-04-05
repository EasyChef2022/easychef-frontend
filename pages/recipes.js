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
    Text,
    RadioGroup,
    Radio
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { Sidebar } from "../components/Sidebar";
import Link from "next/link";
import { data } from "../RecipeData";
//import { RecipesList } from "../components/RecipePage/RecipesList";
import { RecipeCard } from "../components/RecipePage/RecipeCard";

//Recipes Component, collects all ingredients and gets all recipes generated from the backend. Passes information to recipeCards

export const Recipes = () => {

    const [displayRecipes, setDisplayRecipes] = useState();

    const [exact, setExact] = useState("exact");


    //Gets all ingredients from all categories, fetches the list of possible recipes from backend based on the current filter
    const getRecipes = async e => {


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
        console.log(exact);
        if (exact == "exact") {
            fetch('http://easychef.herokuapp.com/recipe/get_recipe_by_exact_match', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success != 0) {
                        console.log(data);
                        setDisplayRecipes(data);
                    }

                })
                .catch((error) =>
                    console.log(error));

            console.log(exact);
        } else {
            fetch('http://easychef.herokuapp.com/recipe/get_recipe_by_ingredients', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success != 0) {
                        console.log(data);
                        setDisplayRecipes(data);
                    }
                })
                .catch((error) =>
                    console.log(error));


        }
        

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
                                        <RadioGroup onChange={setExact} defaultValue="exact">
                                            <Stack direction="row">
                                                <Radio value="exact">Can Be Made With Ingredients</Radio>
                                                <Radio value="contains">Contains Everything In Pantry</Radio>
                                            </Stack>
                                        </RadioGroup>
                                        {/* <Checkbox onChange={(e) => setExact(!e.target.checked)}></Checkbox> */}
                                    </Box>
                                    {/* <Box>
                                        Max Missing Ingredients
                                        <NumberInput>
                                            <NumberInputField />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper />
                                                <NumberDecrementStepper />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </Box> */}
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
                            <VStack alignSelf="flex-start" width="100%">
                            <Button onClick={getRecipes} colorScheme={"teal"}>
                                    Generate New Recipes
                                </Button>
                                {displayRecipes != undefined ? (

                                    //(displayRecipes.exact == 1) ? alert("exact found") : alert("general found"),                           
                                    displayRecipes.result.length == 0 ? (
                                    <VStack justifyContent="center">
                                        <Text>No Results Found. Update The Pantry And Try Again</Text>
                                        
                                    </VStack>
                                    ) 
                                    : (
                                        displayRecipes.result.map(function (recipe, index) {
                                        return (
                                            <RecipeCard
                                                data={recipe}
                                                key={index}
                                            />
                                        );
                                        
                                    }))

                                ) : (
                                    <></>
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
