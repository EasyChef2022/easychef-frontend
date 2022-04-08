import React, { useState, useEffect } from "react";
import {
    Box,
    Stack,
    Heading,
    Text,
    Button

} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

//The component seen on the user settings page
export const UserComponent = () => {

    const [displayWarning, setDisplayWarning] = useState(false);
    const [username, setUsername] = useState();

    useEffect(() => {
        setUsername(sessionStorage.getItem('username'));
    })

    //Simple function to delete account
    const deleteAccount = () => {
        const username = sessionStorage.getItem('username');
        const token = sessionStorage.getItem('token');

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "token": token
            })
        };

        //First, sign user out, then delete the user, then redirect to home
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