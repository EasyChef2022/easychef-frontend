
import PropTypes from "prop-types";
import {
	Flex,
	Text,
	Heading,
	Image,
	Box,
	UnorderedList,
	ListItem,
	VStack,
	HStack,
	OrderedList
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


//Component to format and display a recipe

/**
 * 
 * @param data JSON object; An object containing all of the recipe data 
 * 
 */
const Recipe = (props) => {

	const [missingIng, setMissingIng] = useState([]);
	const [availIng, setAvailIng] = useState([]);


	//Function to scan the ingredients present in the recipe and mark which ones the user currently has/doesn't have
	const getMissingIngredients = () => {
		let missingIngArray = [];
		let foundArray = [];
		let ingredients = [];
		const herbs = JSON.parse(sessionStorage.getItem("herbs"));
		const spices = JSON.parse(sessionStorage.getItem("spices"));
		const proteins = JSON.parse(sessionStorage.getItem("proteins"));
		const vegetables = JSON.parse(sessionStorage.getItem("vegetables"));


		//Merge all ingredients into one cumulative array

		if (herbs != null && herbs.length != 0) {
			ingredients.push(herbs);
		}
		if (spices != null && spices.length != 0) {
			ingredients.push(spices);
		}
		if (proteins != null && proteins.length != 0) {
			ingredients.push(proteins);
		}
		if (vegetables != null && vegetables.length != 0) {
			ingredients.push(vegetables);
		}


		if (props != undefined) {
			//The following code loops thru the ingredients the recipe uses and marks which ones are in pantry/aren't in pantry
			let found = false;
			props.data?.ingredients?.map((ingredient) => {
				ingredients.flat().map((ingredientInPantry) => {
					if (ingredient.toLowerCase().includes(ingredientInPantry.toLowerCase()) && found == false) {
						console.log("Match found, " + ingredientInPantry);
						if (!foundArray.includes(ingredientInPantry)) {
							foundArray.push(ingredientInPantry);
						}
						found = true;

					}

				});
				if (!found) {
					missingIngArray.push(ingredient);
				}
				found = false;
			});

			console.log("Missing: " + missingIngArray);
		}

		setAvailIng(foundArray);
		setMissingIng(missingIngArray);

	};

	//When the component is rendered, or when the data passed in changes, the missingIngredients are recalculated
	useEffect(() => {
		getMissingIngredients();
	}, [props]);

	return (

		<Flex
			flexDirection="column"
			width="70%"
			ml={10} mt={4}

		>
			<Heading size="3xl">Recipe Of The Day</Heading>

			{props.data != null ? (
				<HStack >
					<VStack pt={10} justifyContent="left" width="70%" height="100%">
						<Heading size="2xl" alignSelf="flex-start" pl={20}>{props.data.title}</Heading>
						<HStack alignSelf="flex-start" width="100%">
							<Box pl={20} pt={10} width="40%" alignSelf="flex-start">
								<Box justifySelf="right" fontWeight="bold" >Ingredients</Box>
								<UnorderedList spacing={3} pt={5}>

									{/* Map out the ingredients */}
									{props.data.ingredients.map((ingredient, index) =>
										<ListItem key={"recipeIngredient" + index}>{ingredient}</ListItem>
									)}
								</UnorderedList>

							</Box>
							<Box width="60%" alignSelf="flex-start" pt={10} pr={20}>
								<Box fontWeight="bold">
                                    Directions
								</Box>
								<OrderedList spacing={5} pt={5}>
									{/* Map out the instructions */}
									{props.data.instructions.map((instruction, index) =>
										<ListItem key={"instruction" + index}>{instruction}</ListItem>
									)}
								</OrderedList>
							</Box>
						</HStack>

					</VStack>
					<VStack height="100%" width="30%" >
						<Image width={350} pl={4} src={props.data.photo_url}></Image>
						<Box justifySelf="center">
							<Text fontSize="xl" mt={10}>Missing Ingredients: </Text>
							<UnorderedList spacing={4} >
								{/* Map out the missing ingredients */}
								{missingIng.map((ingredientFound, index) =>
									<ListItem key={"avail" + index}>{ingredientFound}</ListItem>
								)}

							</UnorderedList>
							<Text fontSize="xl" mt={3}>Available Ingredients: </Text>
							<UnorderedList spacing={4} alignSelf="flex-start">
								{/* Map out the available ingredients */}
								{availIng.map((ingredientFound, index) =>
									<ListItem key={"avail" + index}>{ingredientFound}</ListItem>
								)}
							</UnorderedList>
						</Box>
					</VStack>

				</HStack>
			) : (

				<Text>Loading...</Text>
			)}

		</Flex>
	);
};
Recipe.propTypes = {
	data: PropTypes.object,

};
export default Recipe;