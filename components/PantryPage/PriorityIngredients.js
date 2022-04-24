import {
	Heading,
	Box,
	VStack,
	Button,
	Input,
	InputGroup,
	InputRightElement,
	InputLeftElement
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
//Currently no functionality implemented, but will maintain this code for completion in future.

const PriorityIngredients = () => {
	return (
		<Box>
			<Heading size='md'>Priority Ingredients</Heading>
			<VStack spacing={5} alignItems='flex-start' marginTop={2}>
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
};

export default PriorityIngredients;