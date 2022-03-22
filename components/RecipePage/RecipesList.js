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

export const RecipesList = (recipeList) => {


    return (
        <VStack>
            {/* {recipeList.map(function (recipe) {
                return (
                    <RecipeCard
                        recipe={recipe}
                    />
                );
            })} */}
        </VStack>
    );

}
