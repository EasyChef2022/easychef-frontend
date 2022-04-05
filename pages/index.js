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
  


  //Main index Page
  const Index = () => {

    const [ROTD, setROTD] = useState();
    //Whenever the page loads, it fetches the recipe of the day from the backend
    useEffect(()=>{

      const requestOptions = {
        method: 'GET',

    };


    fetch('https://easychef.herokuapp.com/recipe/get_recipe_of_today', requestOptions)
        .then(response => response.json())
        .then(data => {
            setROTD(data);

        })
        .catch((error) =>
            console.log(error));
    }, [])

    
  
    return(
      

    <Flex
      justifyContent="space-between"
      flexDirection="column"
    >
      <Header />
      <Flex flexDirection="row">

        <Recipe data={ROTD}/>

        <Spacer />
        <Stack direction="row">
          <Divider orientation="vertical" />
          <Sidebar />
        </Stack>

      </Flex>
  
    </Flex>
    );
    
  
  }
  
  export default Index

