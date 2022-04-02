import React, { useState, useEffect, useLayoutEffect } from "react";
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
    Radio,
    Heading
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { Sidebar } from "../components/Sidebar";
import Link from "next/link";
import { data } from "../RecipeData";
//import { RecipesList } from "../components/RecipePage/RecipesList";
import { RecipeCard } from "../components/RecipePage/RecipeCard";


export const Favorites = () => {

    const [displayRecipes, setDisplayRecipes] = useState();
    const [forceUpdate, setForceUpdate] = useState(false);


    
    useLayoutEffect(()=> {

        
        console.log("User: " + sessionStorage.getItem("username"));
        
        if(displayRecipes==undefined){
            populateFavorites();
        }
        

        console.log(displayRecipes);
        

    }); 

    useEffect(()=>{
       
        //window.location.href = ("/favorites");
        //setForceUpdate(!forceUpdate);
    }, [])

    const populateFavorites = () =>{
        
        if(sessionStorage.getItem("username")!=""){
            console.log("Heyo");
            const favoriteArray = JSON.parse(sessionStorage.getItem('favorite'));
            let favoriteRecipes = [];
    
            favoriteArray.map((id)=>{
                const requestOptions = {
                    method: 'GET'
                };
                fetch('http://easychef.herokuapp.com/recipe/get_recipe_by_id?id='+id, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success != 0) {
                        //console.log(JSON.stringify(data));
                        favoriteRecipes.push(data);
                    }
    
                })
                .catch((error) =>
                    console.log(error));
            })
            //console.log(favoriteRecipes);
            
            setDisplayRecipes(favoriteRecipes);
            //console.log(forceUpdate);
        } else {
            console.log("didnt run");
            console.log("However,");
            console.log(displayRecipes);
        }
    }
    

    return (
        <Box>
            <Header />
            <Flex justifyContent="center"
                flexDirection="row"
            >

                <VStack mt={5} >
                    <Heading size='xl'>
                        My Favorite Recipes
                    </Heading>
                    <HStack pt={3}>
                        {/* <Button onClick={()=>setForceUpdate(!forceUpdate)}>Generate</Button> */}
                        <Button size='md' colorScheme='teal'>
                            <Link href="/pantry">
                                <ChakraLink ><strong>Go Back to Pantry</strong></ChakraLink>
                            </Link>
                        </Button>
                        <Button size='md' colorScheme='teal'>
                            <Link href="/recipes">
                                <ChakraLink><strong>Get Recipes</strong></ChakraLink>
                            </Link>
                        </Button>
                    </HStack>
                
                <Box >
                    <VStack>
                        <VStack alignSelf="flex-start" width="100%">
                           
                            {displayRecipes != undefined ? (

                                                         
                                displayRecipes.length==0 ? (
                                    <VStack justifyContent="center">
                                        <Text>No Favorite Recipes</Text>

                                    </VStack>
                                )
                                    : (
                                        displayRecipes.map(function (recipe, index) {
                                            return (
                                                <RecipeCard
                                                    data={recipe}
                                                    key={index}
                                                />
                                            );

                                        }))

                            ) : (
                                <Text>No Favorite Recipes</Text>
                            )}

                        </VStack>

                    </VStack>
                </Box>
                </VStack>
            </Flex>
        </Box>
    );
}

export default Favorites;
