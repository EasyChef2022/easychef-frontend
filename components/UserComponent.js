import React, { useState, useEffect } from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,

    Center,
    FormErrorMessage

} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
//The component seen on the login page, handles login forms
export const UserComponent = () => {

    const [displayWarning, setDisplayWarning] = useState(false);

    //On form submit, do some error checking, and sign the user in if no error
    const username = sessionStorage.getItem('username');
    const token = sessionStorage.getItem('token');
    const deleteAccount = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "token": token
            })
        };


        sessionStorage.clear();
        fetch('https://easychef.herokuapp.com/user/delete_user', requestOptions)
            .then(response => response.json())
            .catch((error) =>
                console.log(error));
        location.href = '/';
    }

    return (
        <>
            <Stack
                flexDir="column"
                //mb="2"
                justifyContent="center"
                alignItems="center"

            >
                <Heading color="teal.400">
                    User Profile
                </Heading>
                <Box pt={5} alignSelf="center">
                    <Text fontWeight="bold" fontSize="2xl" alignSelf="center">Username: {username}</Text>
                </Box>
                <Box pt={10}>
                    <Button colorScheme="red" rightIcon={<DeleteIcon />} onClick={() => setDisplayWarning(true)}>Delete Account</Button>
                </Box>

                <Box sx={{ display: !displayWarning ? "none" : "block" }} >
                    <Button colorScheme="red" rightIcon={<DeleteIcon />} onClick={deleteAccount}>Confirm</Button>
                </Box>
            </Stack>

        </>
    );

}