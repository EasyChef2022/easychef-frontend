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


const PantryCategory = (props) => {

    const [collapsed, setCollapsed] = useState(true);
    const [ingredients, setIngredients] = useState([]);



    const toggleCollapse = () => {
        setCollapsed(!collapsed);

        
    }

    const populateSessionStorage = (user) => {

        for (const [key, value] of Object.entries(user)) {
            if(typeof value === "string"){
                sessionStorage.setItem(key, value);
            } else {
                sessionStorage.setItem(key, JSON.stringify(value));
            }
            
           
          }

    }

    useEffect(() => {
       // alert(typeof JSON.parse(sessionStorage.getItem(props.dbname)));
        const result = JSON.parse(sessionStorage.getItem(props.dbname));
        if(result!=null){
            if(result.length!==0){
                setIngredients(JSON.parse(sessionStorage.getItem(props.dbname)));
            }
        }
            
    }, [])



    const handleSubmit = async function(event, ingredient) {
        event.preventDefault();

        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": sessionStorage.getItem('username'),
                "token": sessionStorage.getItem('token'),
                "item": ingredient,
                "type": props.dbname
            })

        };

        const requestUser = {
            method: 'GET'
        };

        


        fetch('http://127.0.0.1:8000/user/remove_pantry', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success != 0) {

                    fetch('http://127.0.0.1:8000/user/get_user?username='+sessionStorage.getItem('username'), requestUser)
                    .then(response2 => response2.json())
                    .then(data2 => {
                        if (data2.success != 0) {
                            
                            populateSessionStorage(data2.user);
                            this.setState({});
                        }
        
                    })
                    .catch((error) =>
                        console.log(error));
                } else {
                    alert(JSON.stringify(data));
                }

            })
            .catch((error) =>
                console.log(error));
    }


    return (
        <>
            <HStack>
                <ListItem onClick={toggleCollapse} sx={{ cursor: 'pointer', userSelect: "none" }}>
                    <ListIcon as={collapsed ? ArrowForwardIcon : ArrowDownIcon} color='green.500' />
                    {props.catname} ({ingredients?.length})
                </ListItem>



            </HStack>
            {ingredients?.map((ingredient) => (

                <>
                <form>
                    <Box sx={{ display: collapsed ? "none" : "block" }}>
                        <ListItem pl="4vw" fontSize={20}>
                            <HStack width="100%" minWidth="150" maxWidth="250">
                                <ListIcon as={ChevronRightIcon} color='green.500' />
                                <Text>{ingredient }</Text>
                                <Spacer />
                                <ListIcon as={SmallCloseIcon} color='green.500' sx={{ cursor: 'pointer' }} onClick={(event)=>handleSubmit(event, ingredient)}/>
                            </HStack>
                        </ListItem>
                    </Box>
                    </form>
                </>
            ))}
        </>
    );

}


PantryCategory.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        ingredient: PropTypes.string,
        amount: PropTypes.number,
        measurement: PropTypes.string
    }))
}


export default PantryCategory