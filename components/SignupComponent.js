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
    Center,
    FormErrorMessage

} from "@chakra-ui/react";
import NextLink from "next/link"
import { populateSessionStorage } from "./populateSessionStorage";

export const SignupComponent = () => {

    const [formError, setFormError] = useState("");

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
            setFormError("Passwords Must Match");
            return;
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })

            };
            fetch('http://easychef.herokuapp.com/user/sign_up', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success == 1) {

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

                    } else {
                        alert(JSON.stringify(data));
                        if (data.message == "duplicate key value violates unique constraint") {
                            setFormError("Username is Currently in Use");
                        } else if (data.message == "Invalid username") {
                            setFormError("Invalid Username");
                        } else if (data.message == "Invalid password") {
                            setFormError("Invalid Password")
                        } else {
                            setFormError("Unknown Error " + data.message);
                        }
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
                    <FormControl isInvalid={!formError == ""}>
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
                                        onChange={e => setUsername(e.target.value)} />
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
                                <FormErrorMessage alignSelf="center">
                                    {formError}

                                </FormErrorMessage>

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
                    </FormControl>
                </Box>
            </Stack>

        </>
    );

}