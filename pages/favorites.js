import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
	HStack,
	VStack,
	Flex,
	Box,
	Link as ChakraLink,
	Button,
	Text,
	Heading
} from "@chakra-ui/react";
import Link from "next/link";
import RecipeCard from "../components/RecipePage/RecipeCard";

//The favorites page. Displays a recipeCard for every favorited recipe.

const Favorites = () => {

	//TODO: Refactor to display recipes smoothly

	const [displayRecipes, setDisplayRecipes] = useState();
       

	useEffect(()=> {
		setDisplayRecipes(JSON.parse(sessionStorage.getItem("favRecipes")));
    
	}, []); 
    
    

	return (
		<Box>
			<Header />
			<Flex justifyContent="center"
				flexDirection="row"
			>

				<VStack mt={5} >
					<Heading size='xl'>
                        My Favorite Recipes
					</Heading>
					<HStack pt={3}>
                       
						<Button size='md' colorScheme='teal'>
							<Link href="/pantry" passHref>
								<ChakraLink ><strong>Go Back to Pantry</strong></ChakraLink>
							</Link>
						</Button>
						<Button size='md' colorScheme='teal'>
							<Link href="/recipes" passHref>
								<ChakraLink><strong>Get Recipes</strong></ChakraLink>
							</Link>
						</Button>
					</HStack>
                
					<Box >
						<VStack>
							<VStack alignSelf="flex-start" width="100%">
                           
								{displayRecipes != undefined ? (

                                                         
									displayRecipes.length==0 ? (
										<VStack justifyContent="center">
											<Text>No Favorite Recipes</Text>

										</VStack>
									)
										: (
											displayRecipes.map(function (recipe, index) {
												return (
													<Box key={index}>
														<RecipeCard
															data={recipe}
														/>
													</Box>
												);

											}))

								) : (
									<Text>No Favorite Recipes</Text>
								)}

							</VStack>

						</VStack>
					</Box>
				</VStack>
			</Flex>
		</Box>
	);
};

export default Favorites;
