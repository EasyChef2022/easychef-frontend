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
//Currently no functionality implemented, but will maintain this code for completion in future.

export const DefaultIngredients = () => {
    return (
        <Box>
            <Heading size='md'>Default Ingredients</Heading>
            <VStack spacing={5} alignItems='flex-start' marginTop={2}>
                <Checkbox defaultChecked>
                    Water
                </Checkbox>
                <Checkbox defaultChecked>
                    Pepper
                </Checkbox>
                <Checkbox defaultChecked>
                    Salt
                </Checkbox>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Search for ingredients'
                    />
                    <InputRightElement>
                        <Button colorScheme='teal' h='1.75rem' size='sm'>
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