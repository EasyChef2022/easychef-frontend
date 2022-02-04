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
ChevronRightIcon
} from "@chakra-ui/icons";

export const Sidebar = () => {


    const numHerbs = 25;
    const numSpices = 13;
    const numProteins = 209;
    const numVegetables = 2;

    return (
        <VStack ml={4} mr={6} mt="5vh" spacing={4} pl={4} pr={4} pt={4} direction='row' align='center' height="80vh" >

            
            <Heading textColor="black" size="2xl">
                Pantry At-A-Glance
            </Heading>
            <Button colorScheme='teal' size='lg'>
                Get Recipes
            </Button>
            <Flex flexDirection="row">
                <InputGroup width="fit-content" mr={4}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input placeholder='Search Ingredients' />
                </InputGroup>
                <Button colorScheme='teal' size='md'>
                    Add Ingredient
                </Button>
            </Flex>

            {/*TODO: Make this its own component */}
            <Flex flexDirection="column" alignSelf="flex-start" pl={4} pt={4} width="100%" pr={8}>
                <Text alignSelf="flex-start" fontSize="xl">
                    Available Ingredients:
                </Text>
                <List spacing={3} fontSize="24" mt={2}>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color='green.500' />
                        Herbs ({numHerbs})
                    </ListItem>
                    <ListItem>
                        
                        <ListIcon as={ArrowForwardIcon} color='green.500' />
                        Spices ({numSpices})
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowForwardIcon} color='green.500' />
                        Proteins ({numProteins})
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ArrowDownIcon} color='green.500' />
                        Vegetables ({numVegetables})
                    </ListItem>
                    <ListItem pl="4vw" fontSize={20}>
                    <HStack width="100%">
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            <Text>Eggs</Text>
                            <Spacer/>
                            <ListIcon as={SmallCloseIcon} color='green.500'/>
                        </HStack>
                    </ListItem>
                    <ListItem pl="4vw"  fontSize={20}>
                        
                        <HStack width="100%">
                            <ListIcon as={ChevronRightIcon} color='green.500' />
                            <Text>Bacon</Text>
                            <Spacer/>
                            <ListIcon as={SmallCloseIcon} color='green.500'/>
                        </HStack>
                        

                    </ListItem>
                </List>
            </Flex>
        </VStack>
    );

}