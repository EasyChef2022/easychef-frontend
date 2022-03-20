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
import { FcGoogle } from 'react-icons/fc';

export const LoginComponent = () => {

    const [showPass, setShowPass] = useState(false);

    const toggleShowPass = () => {
        setShowPass(!showPass);
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
                                        type={showPass ? "text" : "password"}
                                        placeholder="Password"
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
                                Login
                            </Button>
                            
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
                </Box>
            </Stack>

        </>
    );

}