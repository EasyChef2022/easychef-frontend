
import React from "react";
import PropTypes from "prop-types";

import {
	Text,
	Spacer,
	ListItem,
	ListIcon,
	HStack,
	Box
} from "@chakra-ui/react";
import { ChevronRightIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { populateSessionStorage } from "../populateSessionStorage";


/**
 * 
 * @param ingredientValue String; The ingredient 
 * @param category String; The database table for the category
 * @param callBack void(); Function called in parent once data is collected
 */
const PantryEntry = (props) => {



	//Function to remove the current ingredient from the sessionStorage and the user pantry
	const handleSubmit = async function (event, ingredientValue) {
		event.preventDefault();


		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json", 
				"authorization": "Bearer "+ sessionStorage.getItem("token") 
			},
			body: JSON.stringify({
				"username": sessionStorage.getItem("username"),
				"item": ingredientValue,
				"type": props.category
			})

		};

		const requestUser = {
			method: "GET"
		};


		//TODO: Remove unecessary DB call

		fetch("https://easychef.herokuapp.com/user/remove_pantry", requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.success != 0) {
                    
					//This call fetches the new user data to repopulate the session storage. In future, will refactor to udpate session storage automatically

					fetch("https://easychef.herokuapp.com/user/get_user?username=" + sessionStorage.getItem("username"), requestUser)
						.then(response2 => response2.json())
						.then(data2 => {
							if (data2.success != 0) {

								populateSessionStorage(data2.user);
								props.callBack();
							}

						})
						.catch((error) =>
							console.log(error));
				}

			})
			.catch((error) =>
				console.log(error));
	};

	return (
        
		<Box>
			<form>
				<ListItem pl="4vw" fontSize={20}>
					<HStack width="100%" minWidth="150" maxWidth="250">
						<ListIcon as={ChevronRightIcon} color='green.500' />
						<Text>{props.ingredientValue}</Text>
						<Spacer />
						<ListIcon as={SmallCloseIcon} color='green.500' sx={{ cursor: "pointer" }} onClick={(event) => handleSubmit(event, props.ingredientValue)} />
					</HStack>
				</ListItem>

			</form>
		</Box>
	);
};

PantryEntry.propTypes = {
	category: PropTypes.string,
	callBack: PropTypes.func,
	ingredientValue: PropTypes.string,
};

export default PantryEntry;