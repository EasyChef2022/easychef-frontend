import {
    Flex,
    Text,
    Grid,
    GridItem,
    Heading,
    Image,
    Box,
    Spacer,
    List,
    UnorderedList,
    ListItem,
    VStack,
    HStack,
    OrderedList,
    Divider
} from "@chakra-ui/react";
import { useEffect, useState } from "react";



export const Recipe = (props) => {

    const [missingIng, setMissingIng] = useState([]);
    const [availIng, setAvailIng] = useState([]);



    const getMissingIngredients = () => {
        let missingIngArray = [];
        let foundArray = [];
        let ingredients = [];
        const herbs = JSON.parse(sessionStorage.getItem('herbs'));
        const spices = JSON.parse(sessionStorage.getItem('spices'));
        const proteins = JSON.parse(sessionStorage.getItem('proteins'));
        const vegetables = JSON.parse(sessionStorage.getItem('vegetables'));

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
            let found = false;
            props.data?.ingredients?.map((ingredient, index) => {
                ingredients.flat().map((ingredientInPantry) => {
                    //console.log("Does " + ingredient + " contain " + ingredientInPantry + "?");
                    if (ingredient.toLowerCase().includes(ingredientInPantry.toLowerCase()) && found == false) {
                        console.log("Match found, " + ingredientInPantry);
                        if(!foundArray.includes(ingredientInPantry)){
                            foundArray.push(ingredientInPantry);
                        }
                        found = true;

                    }

                })
                if (!found) {
                    missingIngArray.push(ingredient);
                }
                found = false;
            })

            console.log("Missing: " + missingIngArray);
        }

        setAvailIng(foundArray);
        setMissingIng(missingIngArray);

    }


    useEffect(() => {
        getMissingIngredients();
    }, [props])

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
                                    {/* <ListItem>
                               Preheat oven to 350 degrees F (175 degrees C).
                               </ListItem>
                               <ListItem>
                               Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.
                               </ListItem>
                               <ListItem>
                               Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.
                               </ListItem> */}
                                    {props.data.instructions.map((instruction, index) =>
                                        <ListItem key={"instruction" + index}>{instruction}</ListItem>
                                    )}
                                </OrderedList>
                            </Box>
                        </HStack>

                    </VStack>
                    <VStack height="100%" width="30%" >
                        <Image width={350} pl={4} src={props.data.photo_url}></Image>
                        <Box  justifySelf="center">
                            <Text fontSize="xl" mt={10}>Missing Ingredients: </Text>
                            <UnorderedList spacing={4} >
                            {missingIng.map((ingredientFound, index) =>
                                    <ListItem key={"avail" + index}>{ingredientFound}</ListItem>
                                )}
                                
                            </UnorderedList>
                            <Text fontSize="xl" mt={3}>Available Ingredients: </Text>
                            <UnorderedList spacing={4} alignSelf="flex-start">
                                {availIng.map((ingredientFound, index) =>
                                    <ListItem key={"avail" + index}>{ingredientFound}</ListItem>
                                )}
                            </UnorderedList>
                        </Box>
                    </VStack>

                </HStack>
            ) : (<Text>Loading...</Text>)}

        </Flex>
    );
}