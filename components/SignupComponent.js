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
                    <form>
                        <Stack
                            spacing={4}
                            p="5"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"

                        >
                            <FormControl>
                                <Input type="text" placeholder="username" />
                            </FormControl>

                            <FormControl>
                                <InputGroup>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                    />
                                </InputGroup>
                                
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
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