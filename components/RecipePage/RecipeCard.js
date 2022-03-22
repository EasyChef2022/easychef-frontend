import React, { useEffect } from "react";
import {
    Stack,
    HStack,
    VStack,
    Select,
    Link as ChakraLink,
    Spacer,
    Button,
    Image,
    Box,
    Text
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";


export const RecipeCard = ({ recipe }) => {
    return (
        <Box shadow='md' marginLeft={2} marginRight={1}
            paddingBottom={2} >
            <HStack justifyContent='start' spacing='24px' marginLeft={2}>
                <Box width='100px'>
                    <strong>{recipe.name}</strong>
                    <Image src={`dummy-recipe.jpg`} />
                </Box>
                <VStack>
                    <Box minWidth="600" maxWidth="600" >
                        <Text isTruncated>{recipe.description}</Text>
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