import React, { useEffect } from "react";
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
import { RecipesList } from "../components/RecipePage/RecipesList";



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



export const Recipes = () => {
    useEffect(() => {

        
        let ingredients = [];
        const herbs = JSON.parse(sessionStorage.getItem('herbs'));
        const spices = JSON.parse(sessionStorage.getItem('spices'));
        const proteins = JSON.parse(sessionStorage.getItem('proteins'));
        const vegetables = JSON.parse(sessionStorage.getItem('vegetables'));

        if(herbs!=null && herbs.length!=0){
            ingredients.push(herbs);
        }
        if(spices!=null && spices.length!=0){
            ingredients.push(spices);
        }
        if(proteins!=null && proteins.length!=0){
            ingredients.push(proteins);
        }
        if(vegetables!=null && vegetables.length!=0){
            ingredients.push(vegetables);
        }
        

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "ingredients": ingredients.flat(),
                "ban": [""]
            })


        };

        //alert(ingredients);

        fetch('http://127.0.0.1:8000/recipe/get_recipe_by_ingredients', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.success != 0) {
                alert(JSON.stringify(data));
            }

        })
        .catch((error) =>
            console.log(error));


    }, [])
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
