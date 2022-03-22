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
    Select
} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";
export const BlockedIngredients =()=> {
    return (
        <Box>
            <Heading size='md'>Blocked Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <Checkbox >
                    Nuts
                </Checkbox>
                <Checkbox >
                    Gluten
                </Checkbox>
                <Checkbox >
                    Dairy
                </Checkbox>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Search for ingredients'
                    />
                    <InputRightElement width="5vh">
                        <Button colorScheme='teal' h='1.75rem'>
                            Add
                        </Button>
                    </InputRightElement>
                    <InputLeftElement>
                        <SearchIcon color='gray.400' />
                    </InputLeftElement>
                </InputGroup>
            </VStack>
        </Box>
    );
}