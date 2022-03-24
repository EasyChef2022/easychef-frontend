import React, { useState, useEffect } from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Spacer,
    FormControl,
    InputGroup,
    Input,
    InputRightElement,
    Link,
    Center,
    FormErrorMessage

} from "@chakra-ui/react";
import NextLink from "next/link"
import { Router } from "next/router";



export const LoginComponent = () => {


    //TODO: Error handling

    const [formError, setFormError] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    // const toggleShowPass = () => {
    //     setShowPass(!showPass);
    // }




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



        if (username.length == 0) {
            setFormError("Username is Required");
            return;
        }

        if (password.length == 0) {
            setFormError("Password is Required");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": username,
                "password": password
            })

        };


        fetch('http://easychef.herokuapp.com/user/sign_in', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success != 0) {

                    // sessionStorage.setItem('username', data.user.username);
                    // sessionStorage.setItem('userId', data.user.id);
                    sessionStorage.setItem('token', data.token);
                    populateSessionStorage(data.user);

                    location.href = '/';

                } else {
                    setFormError("Invalid Username/Password");

                }

            })
            .catch((error) =>
                console.log(error));
    }

    return (
        <>
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"

            >
                <Heading color="teal.400">
                    EasyChef Sign In
                </Heading>
                <Box pt={5} minW={{ md: "500px" }}>
                    <FormControl isInvalid={!formError == ""}>
                        <form onSubmit={handleSubmit}>
                            <Stack
                                spacing={4}
                                p="5"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"

                            >
                                <FormControl>
                                    <Input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
                                </FormControl>

                                <FormControl>
                                    <InputGroup>
                                        <Input
                                            type={showPass ? "text" : "password"}
                                            placeholder="Password"
                                            onChange={e => setPassword(e.target.value)}
                                        />

                                        <InputRightElement width="20">
                                            <Button
                                                size="sm"
                                                colorScheme="teal"

                                                onClick={() => setShowPass(!showPass)}>
                                                {showPass ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>

                                    </InputGroup>
                                    <Box mt={3} >
                                        <NextLink href="#">
                                            <Link
                                                pt={4}

                                            ><Text textColor="gray.500">Forgot Password?</Text>
                                            </Link>
                                        </NextLink>
                                    </Box>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Log In
                                </Button>

                                <FormErrorMessage alignSelf="center">
                                    {formError}

                                </FormErrorMessage>

                                <Box
                                    alignSelf="center"
                                    justifyContent="center"
                                    width="50%">
                                    <Text textAlign="center">Need an Account?</Text>
                                    <NextLink href="/signup">
                                        <Button
                                            borderRadius={0}
                                            type="submit"
                                            variant="solid"
                                            colorScheme="teal"
                                            width="100%"
                                        >
                                            Sign Up
                                        </Button>
                                    </NextLink>

                                </Box>
                            </Stack>
                        </form>
                    </FormControl>
                </Box>
            </Stack>

        </>
    );

}