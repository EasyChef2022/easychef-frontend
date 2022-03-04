import React, { useState } from "react";
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
    Center

} from "@chakra-ui/react";
import NextLink from "next/link"

export const SignupComponent = () => {


    const [showPass, setShowPass] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const toggleShowPass = () => {
        setShowPass(!showPass);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (password != confirmPassword) {
            alert("Passwords Must Match");
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })

            };
            fetch('http://127.0.0.1:8000/user/sign_up', requestOptions)
                .then(response => response.json())
                .then(data => {
                    alert(data.success);
                    if (data.success) {
                        sessionStorage.setItem('username', username);
                        location.href = '/';
                    }
                })
                .catch((error) =>
                    console.log(error));
        }
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
                    EasyChef Sign Up
                </Heading>
                <Box pt={5} minW={{ md: "500px" }}>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            spacing={4}
                            p="5"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"

                        >
                            <FormControl>
                                <Input 
                                type="text" 
                                placeholder="username" 
                                onChange={e => setUsername(e.target.value)}/>
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

                                            onClick={toggleShowPass}>
                                            {showPass ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>

                                </InputGroup>

                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <Input
                                        type={showPass ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        onChange={e => setConfirmPassword(e.target.value)}
                                    />
                                </InputGroup>

                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Sign up
                            </Button>

                            <Box
                                alignSelf="center"
                                justifyContent="center"
                                width="50%">
                                <Text textAlign="center">Have an Account?</Text>
                                <NextLink href="/login">
                                    <Button
                                        borderRadius={0}
                                        type="submit"
                                        variant="solid"
                                        colorScheme="teal"
                                        width="100%"
                                    >
                                        Log In
                                    </Button>
                                </NextLink>
                            </Box>
                        </Stack>
                    </form>
                </Box>
            </Stack>

        </>
    );

}