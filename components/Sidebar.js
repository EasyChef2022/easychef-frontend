import React from "react";
import {
    Box,
    VStack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,
    Input,
    InputGroup,
    List,
    ListIcon,
    ListItem,
    InputLeftElement,
    Spacer,
    Icon,
    Divider,
    HStack
} from "@chakra-ui/react";
import {
    SearchIcon,
    SmallAddIcon,
    ArrowForwardIcon,
    ArrowDownIcon,
    ArrowRightIcon,
    StarIcon,
    SmallCloseIcon,
    MinusIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import { PantryComponent } from "./PantryComponent";
import Link from "next/link";

export const Sidebar = () => {


    return (
        <VStack ml={4} mr={6} mt="5vh" spacing={4} pl={4} pr={4} pt={4} direction='row' align='center' height="80vh" >


            <Heading textColor="black" size="2xl">
                Pantry At-A-Glance
            </Heading>

            
            <PantryComponent />
            <Divider />
            <Button mt={1} colorScheme='teal' size='lg'>
                <Link href="/recipes">Get Recipes</Link>
            </Button>
        </VStack>
    );

}