import React, { useState } from "react";
import { Header } from "../components/Header";
import {
	Stack,
	HStack,
	VStack,
	Flex,
	Box,
	Select,
	Link as ChakraLink,
	Button,
	LightMode,
	Text,
	RadioGroup,
	Radio
} from "@chakra-ui/react";

import Link from "next/link";
import RecipeCard from "../components/RecipePage/RecipeCard";

//Recipes Component, collects all ingredients and gets all recipes generated from the backend. Passes information to recipeCards

export const Recipes = () => {

	const [displayRecipes, setDisplayRecipes] = useState();

	const [exact, setExact] = useState("exact");

	const [sortMethod, setSortMethod] = useState("name");

	//Gets all ingredients from all categories, fetches the list of possible recipes from backend based on the current filter
	const getRecipes = async e => {
		e.preventDefault();

		let ingredients = [];
		const herbs = JSON.parse(sessionStorage.getItem("herbs"));
		const spices = JSON.parse(sessionStorage.getItem("spices"));
		const proteins = JSON.parse(sessionStorage.getItem("proteins"));
		const vegetables = JSON.parse(sessionStorage.getItem("vegetables"));

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


		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				"ingredients": ingredients.flat(),
				"ban": [0],
				"sort": sortMethod
			})


		};

		console.log(ingredients.flat());
		console.log(exact);
		if (exact == "exact") {
			//If we are looking for recipes that we can make, use this call
			fetch("https://easychef.herokuapp.com/recipe/get_recipe_by_exact_match", requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.success != 0) {
						console.log(data);

						//Only return if exact
						if(data.exact==1){
							setDisplayRecipes(data);
                            
						} else {
							setDisplayRecipes();
						}
                        
					}
				})
				.catch((error) =>
					console.log(error));

			console.log(exact);
		} else {
			//If we are looking for recipes containing all ingredients owned, use this call
			fetch("https://easychef.herokuapp.com/recipe/get_recipe_by_ingredients", requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.success != 0) {
						console.log(data);
						setDisplayRecipes(data);
					}
				})
				.catch((error) =>
					console.log(error));

		}

	};
	return (
		<Box>
			<Header />
			<Flex justifyContent="center"
				flexDirection="row"
			>
				<HStack>
					<Box >
						<VStack>
							<Box fontWeight="bold">
								<Text>Bought some rice? Just run out of parsley? Want to prioritize that
                                    salmon that&#39;s about to go bad? <Link href='/pantry' passHref>
									<ChakraLink color='teal.500'>Go to your pantry
                                            and update it!</ChakraLink>
								</Link>
								</Text>
							</Box>
							<Box paddingTop="-4" paddingLeft={4} paddingRight={4} align='self-start'
							>
								<HStack>
									<Box>
										<RadioGroup onChange={setExact} defaultValue="exact">
											<Stack direction="row">
												<Radio value="exact">Can Be Made With Ingredients</Radio>
												<Radio value="contains">Contains Everything In Pantry</Radio>
											</Stack>
										</RadioGroup>
                                       
									</Box>
                                    
									<Box>
										<LightMode>
											<Select 
												onChange={e => setSortMethod(e.target.value)}
											>
												<option value='name'>Name</option>
												<option value='time'>Cook time</option>
												{/* <option value='rating'>Rating</option> */}
												<option value='complexity'>Complexity</option>
											</Select>
										</LightMode>
									</Box>
								</HStack>
							</Box>
							<VStack alignSelf="flex-start" width="100%">
								<Button onClick={getRecipes} colorScheme={"teal"}>
                                    Generate New Recipes
								</Button>
								{displayRecipes != undefined ? (
                         
									displayRecipes.result.length == 0 ? (
										<VStack justifyContent="center">
											<Text>No Results Found. Update The Pantry And Try Again</Text>
                                        
										</VStack>
									) 
										: (
											displayRecipes.result.map(function (recipe, index) {
												return (
													<RecipeCard
														data={recipe}
														key={index}
													/>
												);
											}))
								) : (
									<></>
								)}
                                 
							</VStack>

						</VStack>
					</Box>
				</HStack>
			</Flex>
		</Box>
	);
};

export default Recipes;
