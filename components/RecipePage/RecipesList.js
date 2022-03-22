import React, { useEffect } from "react";
import {
    Stack,
    HStack,
    VStack,
    Link as ChakraLink,
    Spacer,
    Button,
    Image
} from '@chakra-ui/react';

import { RecipeCard } from "./RecipeCard";
import { data } from "../../RecipeData";

export const RecipesList = (recipeList) => {

    const displayRecipes = [...data];
    return (
        <VStack align="center"> 
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
