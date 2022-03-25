import React, { useState, useEffect } from "react";
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


export const RecipeCard = (props) => {

    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        console.log(props.data);
    })

    return (
        <Box shadow='md' marginLeft={2} marginRight={1}
            paddingBottom={2} >
            <HStack justifyContent='start' spacing='24px' marginLeft={2}>
                <Box width='100px'>
                    <strong>{props.data.title}</strong>
                    <Image src={props.data.photo_url} />
                </Box>
                <VStack>
                    <Box width="800px">
                        <Text>{"Recipe"}</Text>
                        <Text isTruncated>{props.data.description}</Text>
                        <p><strong>Cook time:</strong> {props.data.cook_time != 0 ? props.data.cook_time : "Not Given"}</p>
                        <p><strong>Prep time:</strong> {props.data.prep_time != 0 ? props.data.prep_time : "Not Given"}</p>
                        <p>Add to favorite recipes <StarIcon /></p>
                        <Button size='sm' colorScheme='teal' onClick={()=>setCollapsed(!collapsed)}>List Ingredients</Button>
                        <Box sx={{ display: collapsed ? "none" : "block" }}>
                            {props.data.ingredients.map((ingredient) => <Text>{ ingredient }</Text>
                            
                            )}
                        </Box>
                        <Button ml={5} size='sm' colorScheme='teal'>Show full recipe</Button>
                        
                    </Box>
                </VStack>
            </HStack>
        </Box>
    );
}