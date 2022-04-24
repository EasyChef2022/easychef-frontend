import {
	Heading,
	Box,
	VStack,
	Checkbox,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//Currently no functionality implemented, but will maintain this code for completion in future.
const BlockedIngredients =()=> {
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
};

export default BlockedIngredients;