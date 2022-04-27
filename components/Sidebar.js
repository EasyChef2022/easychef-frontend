import React from "react";
import {
	VStack,
	Heading,
	Button,
	Divider
} from "@chakra-ui/react";

import { PantryComponent } from "./PantryComponent";
import Link from "next/link";


//Class to display the sidebar, simply contains other components
export const Sidebar = () => {


	return (
		<VStack ml={4} mr={6} mt="5vh" spacing={4} pl={4} pr={4} pt={4} direction='row' align='center' height="80vh" >


			<Heading textColor="black" size="2xl">
                Pantry At-A-Glance
			</Heading>


			<PantryComponent />
			<Divider />
			<Button mt={1} colorScheme='teal' size='lg'>
				<Link href="/recipes">Get Recipes</Link>
			</Button>
		</VStack>
	);

};