import React, { useState, useLayoutEffect, useEffect } from "react";
import {
	Box,
	Stack,
	Heading,
	Flex,
	Text,
	Button,
	Spacer,
	HStack
} from "@chakra-ui/react";
import NextLink from "next/link";
import { SettingsIcon } from "@chakra-ui/icons";
//The header displayed at the top of the page, contains links and a display of the current username
export const Header = () => {


   
	const [username, setUsername] = useState("");

	//Function run on component load, displays the username if one is present
	useLayoutEffect(() => {
		if (sessionStorage.getItem("username")) {
            
			setUsername(sessionStorage.getItem("username"));
		} else {
			sessionStorage.setItem("username", username);
		}
	}, []);
    

	return (
		<Flex
			as="nav"
			align="center"
			padding={6}
			bg="teal.500"
			color="white"
			width="auto"
			flexDirection="row"
			height="10vh"
		>
			<Flex align="center" mr={5}>
				<NextLink href="/" >
					<Heading size="3xl" sx={{ cursor: "pointer" }}>
                        EasyChef
					</Heading>
				</NextLink>
			</Flex>

			<HStack>
				<NextLink href="/pantry">
					<Button
						variant="outline"
						_hover={{ bg: "teal.700", borderColor: "teal.700" }}

					>
                    Pantry
					</Button>
				</NextLink>
				<NextLink href="/recipes">
					<Button
						variant="outline"
						_hover={{ bg: "teal.700", borderColor: "teal.700" }}

					>
                    Recipes
					</Button>
				</NextLink>
				<NextLink href="/favorites">
					<Button
						variant="outline"
						_hover={{ bg: "teal.700", borderColor: "teal.700" }}

					>
                    Favorites
					</Button>
				</NextLink>
			</HStack>
			<Spacer />
			<Flex>
				<Box display={!username != "" ? "block" : "none"}>
					<NextLink href="/login">
						<Button
							variant="outline"
							_hover={{ bg: "teal.700", borderColor: "teal.700" }}

						>
                            Sign In
						</Button>
					</NextLink>
					<NextLink href="/signup">
						<Button
							variant="outline"
							_hover={{ bg: "teal.700", borderColor: "teal.700" }}
						>
                            Create account
						</Button>
					</NextLink>

				</Box>
				<Box display={username != "" ? "block" : "none"}>
					<HStack>
						<Box mr="4">
							<Text
								fontSize="24px"
								as="i"
							>
                                Welcome, {username}
							</Text>
						</Box>
						<NextLink href="/userPage" >
							<SettingsIcon _hover={{ cursor: "pointer" }} />
						</NextLink>
						<Button
							variant="outline"
							ml={10}
							_hover={{ bg: "teal.700", borderColor: "teal.700" }}
							onClick={() => { sessionStorage.clear();  location.href = "/"; }}
						>
                            Sign Out
						</Button>
                        
					</HStack>
				</Box>
			</Flex>
		</Flex>
	);
};