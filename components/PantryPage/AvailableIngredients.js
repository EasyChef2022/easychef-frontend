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
    Select,
    List,
    Text,
    LightMode,
    FormControl
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import PantryCategory from "../PantryList/PantryCategory";
import { useEffect, useState } from 'react';

export const AvailableIngredients = () => {

    const [currentIngredient, setCurrentIngredient] = useState("");
    const [category, setCategory] = useState("");


    const [checkSignal, setCheckSignal] = useState(true);

    const populateSessionStorage = (user) => {

        for (const [key, value] of Object.entries(user)) {
            if(typeof value === "string"){
                sessionStorage.setItem(key, value);
            } else {
                sessionStorage.setItem(key, JSON.stringify(value));
            }
            
           
          }

    }

    const handleSubmit = async e => {
        e.preventDefault();

        if(sessionStorage.getItem('username')==""){
            alert("Make an account to save ingredients");
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": sessionStorage.getItem('username'),
                "token": sessionStorage.getItem('token'),
                "item": currentIngredient,
                "type": category
            })

        };

        const requestUser = {
            method: 'GET'
        };

        


        fetch('http://easychef.herokuapp.com/user/add_pantry', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success != 0) {
                    

                    fetch('http://easychef.herokuapp.com/user/get_user?username='+sessionStorage.getItem('username'), requestUser)
                    .then(response2 => response2.json())
                    .then(data2 => {
                        if (data2.success != 0) {
                            
                            populateSessionStorage(data2.user);
                            setCheckSignal(!checkSignal);
                        }
        
                    })
                    .catch((error) =>
                        console.log(error));
                } else {
                    alert(JSON.stringify(data));
                }

            })
            .catch((error) =>
                console.log(error));
    }

    return (
        <Box
            marginLeft={4}
            borderWidth='2px'
            borderRadius='1g'
            shadow='md'
            marginBottom={4}
            paddingLeft={4}
            paddingRight={4}
            paddingTop={4}
            paddingBottom={4}
            width="40vh">

            <Heading size='md'>Available Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2} width="100%">
                <List spacing={3} fontSize="24" mt={2}>
                    <PantryCategory
                        dbname="herbs"
                        catname="Herbs"
                        signal={checkSignal}
                    />

                    <PantryCategory
                        dbname="spices"
                        catname="Spices"
                        signal={checkSignal}
                    />

                    <PantryCategory
                        dbname="proteins"
                        catname="Proteins"
                        signal={checkSignal}
                    />

                    <PantryCategory
                        dbname="vegetables"
                        catname="Vegetables"
                        signal={checkSignal}
                    />

                </List>
                <FormControl>
                    <form onSubmit={handleSubmit}>
                    <VStack width="100%">
                        <HStack>
                            <InputGroup size='sm' width='100%'>
                                <Input
                                    pr='4.5rem'
                                    placeholder='Enter new ingredient'
                                    onChange={e => setCurrentIngredient(e.target.value)}
                                />
                                <InputLeftElement>
                                    <SearchIcon color='gray.400' />
                                </InputLeftElement>
                            </InputGroup>
                        </HStack>
                        <Box>
                            <LightMode>
                                <Select
                                    onChange={e => setCategory(e.target.value)}
                                    placeholder="Select category"
                                >
                                    <option value='herbs'>Herbs</option>
                                    <option value='spices'>Spices</option>
                                    <option value='proteins'>Proteins</option>
                                    <option value='vegetables'>Vegetables</option>
                                </Select>
                            </LightMode>
                        </Box>

                        <Button colorScheme='teal' h='1.75rem' type="submit">
                            Add
                        </Button>
                    </VStack>
                    </form>
                </FormControl>
            </VStack>
        </Box>
    );
}