import {
    Heading,
    Flex,
    Box,
    HStack,
    VStack,
    Spacer,
    Checkbox,
    CheckboxGroup,
    Button,
    ButtonGroup,
    Input,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Link as ChakraLink,
    Select,
    List,
    Text,
    LightMode
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
import PantryCategory from "../PantryList/PantryCategory";

export const AvailableIngredients = () => {
    return (
        <Box
            marginLeft={4}
            borderWidth='2px'
            borderRadius='1g'
            shadow='md'
            marginBottom={4}
            paddingLeft={4}
            paddingRight={4}
            paddingTop={4}
            paddingBottom={4}
            width="40vh">

            <Heading size='md'>Available Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2} width="100%">
                <List spacing={3} fontSize="24" mt={2}>
                    <PantryCategory
                        dbname="herbs"
                        catname="Herbs"
                         />

                    <PantryCategory
                        dbname="spices"
                        catname="Spices"
                        />

                    <PantryCategory
                        dbname="proteins"
                        catname="Proteins"
                         />

                    <PantryCategory
                        dbname="vegetables"
                        catname="Vegetables"
                        />

                </List>
                <VStack width="100%">
                    <HStack>
                        <InputGroup size='sm' width='100%'>
                            <Input
                                pr='4.5rem'
                                placeholder='Enter new ingredient'
                            />
                            <InputLeftElement>
                                <SearchIcon color='gray.400' />
                            </InputLeftElement>
                        </InputGroup>
                    </HStack>
                    <Box>
                    <LightMode>
                    <Select
                    
                    placeholder="Select category"
                    >
                            <option value='herbs'>Herbs</option>
                            <option value='spices'>Spices</option>
                            <option value='protein'>Proteins</option>
                            <option value='vegetables'>Vegetables</option>
                        </Select>
                        </LightMode>
                    </Box>

                    <Button colorScheme='teal' h='1.75rem'>
                                Add
                    </Button>
                </VStack>
            </VStack>
        </Box>
    );
}