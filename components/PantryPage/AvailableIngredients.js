import {
	Heading,
	Box,
	HStack,
	VStack,
	Button,
	Select,
	List,
	LightMode,
	FormControl
} from "@chakra-ui/react";
import PantryCategory from "../PantryList/PantryCategory";
import { useEffect, useState } from "react";

import { Autocomplete } from "chakra-ui-simple-autocomplete";
import { ingredients } from "../../public/ingredientList";

//The Pantry Component which displays current ingredient and allows the user to add more
export const AvailableIngredients = () => {


	const [category, setCategory] = useState("");
	const [checkSignal, setCheckSignal] = useState(true);

	const [result, setResult] = useState([]);

	useEffect(() => {
		console.log("Refreshing Page");
	}, [checkSignal]);



	//Adds a callback function to handleSubmit in order to refresh the page

	const submitContainer = async e => {
		e.preventDefault();
		//console.log("Signal: " + checkSignal);
		handleSubmit(e, function(){
			console.log("Ack");
			setCheckSignal(!checkSignal);
			setResult([]);
		});
	};

	//Function to add an ingredient. Gets list of ingredients added from the autocomplete, then adds each one in a fetch loop
	const handleSubmit = async (e, _callback) => {
		e.preventDefault();


		if (sessionStorage.getItem("username") == "") {
			alert("Make an account to save ingredients");
			return;
		}

		if (category == "") {
			alert("Select a category to add ingredients to");
			return;
		}
		for (const [key, value] of Object.entries(result)) {
			console.log("Adding " + value.label + " " + key);
			let requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json", "authorization": "Bearer " + sessionStorage.getItem("token") },
				body: JSON.stringify({
					"username": sessionStorage.getItem("username"),

					"item": value.label,
					"type": category
				})

			};
			console.log("Fetching " + value.label);
			let a = JSON.parse(sessionStorage.getItem(category));
			await fetch("https://easychef.herokuapp.com/user/add_pantry", requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.success != 0) {

						a.push(data.item);

					}

				})
				.catch((error) =>
					console.log(error));
			console.log("Setting Storage");
			sessionStorage.setItem(category, JSON.stringify(a));
            
		}
		_callback();

	};
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

			width="100%">

			<Heading size='md'>Available Ingredients</Heading>
			<VStack spacing={5} alignItems='flex-start' marginTop={2} width="100%">
				<List spacing={3} fontSize="24" mt={2}>
					<PantryCategory
						dbname="herbs"
						catname="Herbs"
						signal={checkSignal}
					/>

					<PantryCategory
						dbname="spices"
						catname="Spices"
						signal={checkSignal}
					/>

					<PantryCategory
						dbname="proteins"
						catname="Proteins"
						signal={checkSignal}
					/>

					<PantryCategory
						dbname="vegetables"
						catname="Vegetables"
						signal={checkSignal}
					/>

				</List>
				<FormControl>
					<form onSubmit={submitContainer}>
						<VStack width="100%">
							<HStack>
								{/* <InputGroup size='sm' width='100%'>
                                <Input
                                    pr='4.5rem'
                                    placeholder='Enter new ingredient'
                                    onChange={e => setCurrentIngredient(e.target.value)}
                                />
                                <InputLeftElement>
                                    <SearchIcon color='gray.400' />
                                </InputLeftElement>
                            </InputGroup> */}
								<LightMode>
									<Autocomplete
										colorScheme="twitter"
										options={ingredients}
										result={result}
										setResult={(ingredients) => setResult(ingredients)}
										placeholder={"Enter new Ingredient"}
										allowCreation={false}
									/>
								</LightMode>
							</HStack>
							<Box>
								<LightMode>
									<Select
										onChange={e => setCategory(e.target.value)}
										placeholder="Select category"
									>
										<option value='herbs'>Herbs</option>
										<option value='spices'>Spices</option>
										<option value='proteins'>Proteins</option>
										<option value='vegetables'>Vegetables</option>
									</Select>
								</LightMode>
							</Box>

							<Button colorScheme='teal' h='1.75rem' type="submit">
                                Add
							</Button>
						</VStack>
					</form>
				</FormControl>
			</VStack>
		</Box>
	);
};