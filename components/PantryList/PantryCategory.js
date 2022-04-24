import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
	ListItem,
	ListIcon,
	HStack,
	Box
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon } from "@chakra-ui/icons";
import  PantryEntry  from "./PantryEntry";

/**
 * 
 * @param dbname String; The corresponding database table  
 * @param catname String; The name of the category to be displayed
 * @param signal Boolean, optional; Variable passed in, change in variable from parent triggers a redraw
 * 
 */
const PantryCategory = (props) => {

	const [collapsed, setCollapsed] = useState(true);
	const [ingredients, setIngredients] = useState([]);


	//Parses the session storage to populate the list of ingredients based on the category
	const getData = () => {
		const result = JSON.parse(sessionStorage.getItem(props.dbname));
		if (result != null) {
			setIngredients(result);
			if(result.length==0){
				setCollapsed(true);
			}
		}
	};


	//Onload, set the data to be displayed. Also, refresh page on signal. Signal sent by parent (AvailableIngredients) when ingredient is added.
	useEffect(() => {
		getData();
	}, [props.signal]);


	return (
		<>
			<HStack>
				<ListItem onClick={() => setCollapsed(!collapsed)} sx={{ cursor: "pointer", userSelect: "none" }}>
					<ListIcon as={collapsed ? ArrowForwardIcon : ArrowDownIcon} color='green.500' />
					{props.catname} ({ingredients?.length})
				</ListItem>

			</HStack>
			{/* This creates a new entry for every ingredient in the list provided by the database */}
			{ingredients.map((ingredient, index) => (

				<Box sx={{ display: collapsed ? "none" : "block" }} key={index}>
					<PantryEntry ingredientValue={ingredient} category={props.dbname} callBack={getData}/>
				</Box>

			))}
		</>
	);

};

PantryCategory.propTypes = {
	dbname: PropTypes.string,
	signal: PropTypes.bool,
	catname: PropTypes.string
};


export default PantryCategory;