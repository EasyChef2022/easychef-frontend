import React from "react";
import { Header } from "../components/Header";
import {
    Heading,
    Flex,
    Box,
    HStack,
    VStack,
    Spacer,
    Checkbox,
    CheckboxGroup,
    Button,
    ButtonGroup,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Link as ChakraLink,
    Select
} from '@chakra-ui/react';

import { SearchIcon } from "@chakra-ui/icons";

import Link from "next/link";

import { PantryCategory } from "../components/PantryList/PantryCategory";

import { pantry_data } from "../PantryData";

function PantryHeader() {
    return (
        <Box align="center" marginRight={4}>
            <Heading size='xl'>
                My Pantry
            </Heading>
        </Box>
    );
}

function PriorityIngredients() {
    return (
        <Box>
            <Heading size='md'>Priority Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Search for ingredients'
                    />
                    <InputRightElement>
                        <Button colorScheme='teal' h='1.75rem' size='sm'>
                            Add
                        </Button>
                    </InputRightElement>
                    <InputLeftElement>
                        <SearchIcon color='gray.400' />
                    </InputLeftElement>
                </InputGroup>
            </VStack>
        </Box>
    );
}

function AvailableIngredients() {
    return (
        <Box>
            <Heading size='md'>Available Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <Checkbox defaultChecked>
                    Herbs
                </Checkbox>
                <Checkbox defaultChecked>
                    Spices
                </Checkbox>
                <Checkbox defaultChecked>
                    Proteins
                </Checkbox>
                <Checkbox defaultChecked>
                    Vegetables
                </Checkbox>
                <HStack>
                    <InputGroup size='sm' width='60%'>
                        <Input
                            pr='4.5rem'
                            placeholder='Search for ingredients'
                        />
                        <InputRightElement>
                            <Button colorScheme='teal' h='1.75rem' size='sm'>
                                Add
                            </Button>
                        </InputRightElement>
                        <InputLeftElement>
                            <SearchIcon color='gray.400' />
                        </InputLeftElement>
                    </InputGroup>
                    <Box>
                        Add to:
                        <Select placeholder="Select category">
                            <option value='herbs'>Herbs</option>
                            <option value='spices'>Spices</option>
                            <option value='protein'>Proteins</option>
                            <option value='vegetables'>Vegetables</option>
                        </Select>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
}

function DefaultIngredients() {
    return (
        <Box>
            <Heading size='md'>Default Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <Checkbox defaultChecked>
                    Water
                </Checkbox>
                <Checkbox defaultChecked>
                    Pepper
                </Checkbox>
                <Checkbox defaultChecked>
                    Salt
                </Checkbox>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Search for ingredients'
                    />
                    <InputRightElement>
                        <Button colorScheme='teal' h='1.75rem' size='sm'>
                            Add
                        </Button>
                    </InputRightElement>
                    <InputLeftElement>
                        <SearchIcon color='gray.400' />
                    </InputLeftElement>
                </InputGroup>
            </VStack>
        </Box>
    );
}

function BlockedIngredients() {
    return (
        <Box>
            <Heading size='md'>Blocked Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Search for ingredients'
                    />
                    <InputRightElement>
                        <Button colorScheme='teal' h='1.75rem' size='sm'>
                            Add
                        </Button>
                    </InputRightElement>
                    <InputLeftElement>
                        <SearchIcon color='gray.400' />
                    </InputLeftElement>
                </InputGroup>
            </VStack>
        </Box>
    );
}

function PantryPage() {
    return (
        <div>
            <Header />
            <PantryHeader />
            <Flex justifyContent='space-around'>
                <HStack spacing={20} align='stretch' alignItems='baseline' display='flex'
                    marginTop={4}>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <AvailableIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <DefaultIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <PriorityIngredients />
                    </Box>
                    <Box marginLeft={4} borderWidth='2px' borderRadius='1g' shadow='md' marginBottom={4}
                        paddingLeft={4} paddingRight={4} paddingTop={4} paddingBottom={4}>
                        <BlockedIngredients />
                    </Box>
                </HStack>
            </Flex>
            <HStack paddingLeft={4}>
                <Button colorScheme='teal'>
                    <strong>Update Ingredients</strong>
                </Button>
                <Button colorScheme='teal' size='md'>
                    <Link href="/recipes">
                        <ChakraLink> <strong>Get Recipes</strong> </ChakraLink>
                    </Link>
                </Button>
                <Button size='md' colorScheme='teal'>
                    <Link href="/favorites">
                        <ChakraLink><strong>See favorite recipes</strong></ChakraLink>
                    </Link>
                </Button>
            </HStack>
        </div>
    );
}

export default PantryPage;