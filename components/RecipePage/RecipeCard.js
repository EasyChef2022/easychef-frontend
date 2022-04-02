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
    Text,
} from '@chakra-ui/react';
import { StarIcon } from "@chakra-ui/icons";
import { DeleteIcon } from "@chakra-ui/icons";

export const RecipeCard = (props) => {


    const [collapsed, setCollapsed] = useState(true);
    const [isFavorited, setIsFavorited] = useState(0); //0 is not favorited, 1 is favorited, -1 is not signed in
    const [isBanned, setIsBanned] = useState(0);


    const checkFavorited = () => {
        if(sessionStorage.getItem('username')==""){  //No user signed in
            setIsFavorited(-1);
            setIsBanned(-1);
            
        } else {
            let favArray = JSON.parse(sessionStorage.getItem('favorite'));
            const hasValue = Object.values(favArray).includes(String(props.data.id));
            if(hasValue){
                setIsFavorited(1);
            } else {
                setIsFavorited(0);
            }
            let banArray = JSON.parse(sessionStorage.getItem('ban'));
            const hasValueBan = Object.values(banArray).includes(String(props.data.id)) || Object.values(banArray).includes(String(props.data.id));
            if(hasValueBan){
                setIsBanned(1);
            } else {
                setIsBanned(0);
            }
        }
    }

    useEffect(()=>{
        checkFavorited();
    }, [isFavorited])

    const addFavoriteBan = (operation) => {
       
        if(sessionStorage.getItem('username')==""){
            alert("Sign in to favorite recipes");
            return;
        }
        let favArray = JSON.parse(sessionStorage.getItem(operation));
        const hasValue = Object.values(favArray).includes(String(props.data.id));
        if(!hasValue){
            favArray.push(String(props.data.id));
            sessionStorage.setItem(operation, JSON.stringify(favArray));
            console.log(sessionStorage.getItem(operation));
            checkFavorited();

        } else {
            return;
        }
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": sessionStorage.getItem('username'),
                "token": sessionStorage.getItem('token'),
                "item": String(props.data.id),
                "type" : operation
            })

        };


        fetch('http://easychef.herokuapp.com/user/add_pantry', requestOptions)
            .then(response => response.json())
            .then(data => {

            })
            .catch((error) =>
                console.log(error));
       
    }

    const removeFavoriteBan = (operation) => {

        if(sessionStorage.getItem('username')==""){
            alert("Sign in to favorite recipes");
            return;
        }
       
        let favArray = JSON.parse(sessionStorage.getItem(operation));
        
        

        let index = 0;
        for (const [key, value] of Object.entries(favArray)) {
            if(value==props.data.id){
                favArray.splice(index, 1);
                sessionStorage.setItem(operation, JSON.stringify(favArray));
                
                checkFavorited();

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "username": sessionStorage.getItem('username'),
                        "token": sessionStorage.getItem('token'),
                        "item": String(props.data.id),
                        "type" : operation
                    })
        
                };
        
        
                fetch('http://easychef.herokuapp.com/user/remove_pantry', requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        
                    })
                    .catch((error) =>
                        console.log(error));
                return;
            }
            index++;
          }       
    }



    return (
        <>
        {isBanned==1 ? (<></>) : (<Box shadow='md' marginLeft={2} marginRight={1}
            paddingBottom={2} >
            <HStack justifyContent='start' spacing='24px' marginLeft={2}>
                <Box width='200px'>

                    <Image width="200px" src={props.data.photo_url} />
                </Box>
                <VStack>
                    <Box width="800px">
                        <Text fontWeight="bold">{props.data.title}</Text>
                        <Text isTruncated>{props.data.description}</Text>
                        <HStack><Box fontWeight="bold">Cook time: </Box> <Text>{props.data.cook_time != 0 ? props.data.cook_time : "Not Given"}</Text></HStack>
                        <HStack><Box fontWeight="bold">Prep time: </Box> <Text> {props.data.prep_time != 0 ? props.data.prep_time : "Not Given"} </Text></HStack>
                        <HStack mt={3} mr={3}>
                            <Button size='sm' colorScheme='teal' onClick={() => setCollapsed(!collapsed)}>List Ingredients</Button>
                            <Box sx={{ display: collapsed ? "none" : "block" }}>
                                {props.data.ingredients.map((ingredient, index) => <Text key={index}>{ingredient}</Text>

                                )}
                            </Box>
                            <Button ml={5} size='sm' colorScheme='teal'>Show full recipe</Button>

                            {isFavorited!=-1 ? (

                                isFavorited==1 ? (
                                <Button colorScheme="yellow" size="sm" rightIcon={<StarIcon />} onClick={() => removeFavoriteBan("favorite")}> Remove From Favorite Recipes</Button>) 
                                : (<Button colorScheme="teal" size="sm" rightIcon={<StarIcon />} onClick={() => addFavoriteBan("favorite")}> Add To Favorite Recipes</Button>)
                            ) 
                            : (<></>) }
                            
                            <Spacer />
                            <Button colorScheme="red" rightIcon={<DeleteIcon /> } onClick={() => addFavoriteBan("ban")}>Hide Recipe</Button>
                        </HStack>
                    </Box>
                </VStack>
            </HStack>
        </Box>)}
        </>
    );
}