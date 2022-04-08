import React, { useEffect, useState } from "react";
import {

    Link as ChakraLink,
    Text,
    Flex,
    Code,
    List,
    ListIcon,
    ListItem,
    Spacer,
    Box,
    Divider,
    Stack
  } from '@chakra-ui/react'
  import { Header } from '../components/Header'
  import { Recipe } from '../components/Recipe'
  import { Sidebar } from '../components/Sidebar'
  import { useRouter } from "next/router";



  //Main index Page
  const RecipeDisplay = () => {
      

    const [recipe, setRecipe] = useState();

    useEffect(()=>{
        const requestOptions = {
            method: 'GET'
        };

        fetch('https://easychef.herokuapp.com/recipe/get_recipe_by_id?id=' + query.id, requestOptions)
        .then(response => response.json())
        .then(data => {
            setRecipe(data);

        })
        .catch((error) =>
            console.log(error));
        
    }, [])


    const { query } = useRouter();
  
    return(
      
    <Flex
      justifyContent="space-between"
      flexDirection="column"
    >
      <Header />
      <Flex flexDirection="row">
        <Text>{query.name}</Text>
        {recipe==undefined ? (<Text>Loading Recipe...</Text>):(<Recipe data={recipe}/>)}
        {/* <Recipe data={ROTD}/> */}

        <Spacer />
        <Stack direction="row">
          <Divider orientation="vertical" />
          <Sidebar />
        </Stack>

      </Flex>
  
    </Flex>
    );
    
  
  }
  
  export default RecipeDisplay
