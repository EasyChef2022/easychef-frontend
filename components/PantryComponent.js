import {
	Flex,
	Text,
	List
} from "@chakra-ui/react";
import PantryCategory from "./PantryList/PantryCategory";


//Container to display pantryCategory components. Visible on the sidebar. Simply contains other components and formats them
const PantryComponent = () => {


	return (
		<Flex flexDirection="column" alignSelf="flex-start" pl={4} pt={4} width="100%" pr={8}>
			<Text alignSelf="flex-start" fontSize="xl">
                Available Ingredients:
			</Text>
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
					catname="Misc"

				/>

			</List>
		</Flex>
	);

};

export default PantryComponent;