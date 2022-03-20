import React from "react";
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
import { RecipeOTD } from '../components/RecipeOTD'
import { Sidebar } from '../components/Sidebar'
import ReactDOM from 'react-dom';
import Recipes from "./recipes";
import HomePage from "./home";
import { render } from 'react-dom';
import Link from "next/link";

const Index = () => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
    >
      <Header />
      <Flex flexDirection="row">
        <RecipeOTD />
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
