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
import NextLink from "next/link"

export const Header = () => {

    const [signedIn, setSignedIn] = useState(false);

    const username="Matthew"
    return (
        <Flex
            as="nav"
            align="center"
            padding={6}
            bg="teal.500"
            color="white"
            width="auto"
            flexDirection="row"
            height="10vh"
        >
            <Flex align="center" mr={5}>
                <NextLink href="/" >
                    <Heading size="3xl" sx={{ cursor: 'pointer' }}>
                        EasyChef
                    </Heading>
                </NextLink>
            </Flex>
            <Spacer />
            <Flex>
            <Box display={!signedIn ? 'block' : 'none'}>
                <NextLink href="/login">
                    <Button
                        variant="outline"
                        _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                    >
                        Sign In
                    </Button>
                </NextLink>
                <NextLink href="/signup">
                    <Button
                        variant="outline"
                        _hover={{ bg: "teal.700", borderColor: "teal.700" }}

                    >
                        Create account
                    </Button>
                </NextLink>

            </Box>
            <Text 
            fontSize="24px"
            as="i"
            display={signedIn ? 'block' : 'none'}
                >
                    Welcome, {username}
                </Text>
            </Flex>
        </Flex>
    );

}