import React, { useState, useEffect, useLayoutEffect } from "react";
import { Header } from "../components/Header";
import {
    HStack,
    VStack,
    Flex,
    Box,
    Link as ChakraLink,
    Button,
    Text,
    Heading
} from '@chakra-ui/react';
import Link from "next/link";
import { RecipeCard } from "../components/RecipePage/RecipeCard";

//The favorites page. Displays a recipeCard for every favorited recipe.

export const Favorites = () => {

    //TODO: Refactor to display recipes smoothly

    const [displayRecipes, setDisplayRecipes] = useState();
       
    //On the component load, call the populateFavorites function if the current list of favorites is undefined. Will rewrite

    useLayoutEffect(()=> {

        
        console.log("User: " + sessionStorage.getItem("username"));
        
        if(displayRecipes==undefined){
            populateFavorites();
        }
        

        console.log(displayRecipes);
        

    }); 
    //Collect the favorite recipes from the database and populates the sessionStorage. Will rewrite
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
            
            setDisplayRecipes(favoriteRecipes);
        } else {
            console.log("not signed in");
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
                                                <Box key={index}>
                                                <RecipeCard
                                                    data={recipe}
                                                />
                                                </Box>
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
