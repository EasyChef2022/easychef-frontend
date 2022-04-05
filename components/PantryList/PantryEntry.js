
import React, { useEffect, useState, useLayoutEffect } from "react";
import PropTypes, { array, string } from 'prop-types';

import {
    Flex,
    Text,
    Spacer,
    List,
    ListItem,
    ListIcon,
    HStack,
    Box,
    Link as ChakraLink,
    Icon
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowDownIcon, ChevronRightIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { populateSessionStorage } from "../populateSessionStorage";


/**
 * 
 * @param ingredientValue String; The ingredient 
 * @param category String; The database table for the category
 * @param callBack void(); Function called in parent once data is collected
 */
export const PantryEntry = (props) => {



    //Function to remove the current ingredient from the sessionStorage and the user pantry
    const handleSubmit = async function (event, ingredientValue) {
        event.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": sessionStorage.getItem('username'),
                "token": sessionStorage.getItem('token'),
                "item": ingredientValue,
                "type": props.category
            })

        };

        const requestUser = {
            method: 'GET'
        };


        //TODO: Remove unecessary DB call

        fetch('http://easychef.herokuapp.com/user/remove_pantry', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success != 0) {

                    fetch('http://easychef.herokuapp.com/user/get_user?username=' + sessionStorage.getItem('username'), requestUser)
                        .then(response2 => response2.json())
                        .then(data2 => {
                            if (data2.success != 0) {

                                populateSessionStorage(data2.user);
                                props.callBack();
                            }

                        })
                        .catch((error) =>
                            console.log(error));
                } else {
                    console.log(error);
                }

            })
            .catch((error) =>
                console.log(error));
    }

    return (
        
        <Box>
            <form>
                <ListItem pl="4vw" fontSize={20}>
                    <HStack width="100%" minWidth="150" maxWidth="250">
                        <ListIcon as={ChevronRightIcon} color='green.500' />
                        <Text>{props.ingredientValue}</Text>
                        <Spacer />
                        <ListIcon as={SmallCloseIcon} color='green.500' sx={{ cursor: 'pointer' }} onClick={(event) => handleSubmit(event, props.ingredientValue)} />
                    </HStack>
                </ListItem>

            </form>
        </Box>
    );
}