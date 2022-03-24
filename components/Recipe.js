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



export const Recipe = (props) => {

    return (

        <Flex
            flexDirection="column"
            width="70%"
            ml={10} mt={4}
        
        >
            <Heading size="3xl">Recipe Of The Day</Heading>
            {/* <Flex 
           mt={20}
           ml={5} 
           flexDirection="row" 
           justifyContent="space-between" 
           >
           <Text width="70%"></Text>
               <Spacer/>
               <Flex 
               flexDirection="column"
               
               >
               <Image width={350} pl={4} src="https://via.placeholder.com/350"></Image>
               <Text fontSize="xl" mt={10}>Missing Ingredients: </Text>
               <List spacing={4}>
                   <ListItem>
                       <Text>Water</Text>
                   </ListItem>
               </List>
               </Flex>
           </Flex> */}

           {props.data!=null ? (
               <HStack >
               <VStack pt={10} justifyContent="left" width="70%" height="100%">
                   <Heading size="2xl" alignSelf="flex-start" pl={20}>{props.data.title}</Heading>
                   <HStack alignSelf="flex-start" width="100%">
                       <Box pl={20} pt={10} width="40%" alignSelf="flex-start">
                           <Box  justifySelf="right" fontWeight="bold" >Ingredients</Box>
                           <UnorderedList spacing={3} pt={5}>
                               {/* <ListItem>1 cup butter, softened</ListItem>
                               <ListItem>1 cup white sugar</ListItem>
                               <ListItem>1 cup packed brown sugar</ListItem>
                               <ListItem>2 eggs</ListItem>
                               <ListItem>2 teaspoons vanilla extract</ListItem>
                               <ListItem>1 teaspoon baking soda</ListItem>
                               <ListItem>2 teaspoons hot water</ListItem>
                               <ListItem>½ teaspoon salt</ListItem>
                               <ListItem>3 cups all-purpose flour</ListItem>
                               <ListItem>2 cups semisweet chocolate chips</ListItem>
                               <ListItem>1 cup chopped walnuts</ListItem> */}

                               {props.data.ingredients.map((ingredient)=>
                               <ListItem>{ingredient}</ListItem>
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
                               {props.data.instructions.map((instruction)=>
                               <ListItem>{instruction}</ListItem>
                               )}
                           </OrderedList>
                       </Box>
                   </HStack>

               </VStack>
               <VStack height="100%" width="30%">
                   <Image width={350} pl={4} src={props.data.photo_url}></Image>
                   <Text fontSize="xl" mt={10}>Missing Ingredients: </Text>
                   <List spacing={4}>
                       <ListItem>
                           <Text>Water</Text>
                       </ListItem>
                   </List>
               </VStack>
           </HStack>
           ) : (<Text>Loading...</Text>)}
            
        </Flex>
    );
}