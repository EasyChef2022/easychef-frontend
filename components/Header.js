import React, { useState } from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    Spacer,

} from "@chakra-ui/react";

export const Header = () => {

    const [signedIn, setSignedIn] = useState(false);

    const signIn = () =>{
        setSignedIn(true);
    }
    return (
        <Flex
            as="nav"
            align="center"
            padding={6}
            bg="teal.500"
            color="white"
            width="auto"
            flexDirection="row"
        >
            <Flex align="center" mr={5}>
                <Heading size="3xl">
                    EasyChef
                </Heading>
            </Flex>
            <Spacer />
            <Flex>
            <Box display={!signedIn ? 'block' : 'none'}>
                <Button
                    variant="outline"
                    _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                    onClick={signIn}
                >
                    Sign In
                </Button>
                <Button
                    variant="outline"
                    _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                   
                >
                    Create account
                </Button>
                

            </Box>
            <Text 
            fontSize="24px"
            as="i"
            display={signedIn ? 'block' : 'none'}
                >
                    Welcome, Matthew
                </Text>
            </Flex>
        </Flex>
    );

}