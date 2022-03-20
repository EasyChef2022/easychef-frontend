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
    ListItem
} from "@chakra-ui/react";



export const Recipe = () => {
    return(
       <Flex
        flexDirection="column"
       width="70%"
       ml={10} mt={4} 
       >
           <Heading size="2xl">Recipe Of The Day</Heading>
           <Flex 
           mt={20}
           ml={5} 
           flexDirection="row" 
           justifyContent="space-between" 
           >
           <Text width="70%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac habitasse platea. Tristique risus nec feugiat in. Diam maecenas sed enim ut sem viverra aliquet eget. Est pellentesque elit ullamcorper dignissim cras tincidunt. Sodales neque sodales ut etiam sit amet nisl. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Eget nunc lobortis mattis aliquam faucibus purus in. Tellus rutrum tellus pellentesque eu. Viverra tellus in hac habitasse platea. Dui sapien eget mi proin. In hac habitasse platea dictumst quisque sagittis purus. Eu facilisis sed odio morbi quis commodo odio aenean.

Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Lorem donec massa sapien faucibus et molestie ac feugiat. Dictum at tempor commodo ullamcorper. Suspendisse interdum consectetur libero id faucibus nisl. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tempor orci eu lobortis elementum. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Convallis tellus id interdum velit laoreet id donec ultrices. Volutpat diam ut venenatis tellus in. Pulvinar elementum integer enim neque.

Neque volutpat ac tincidunt vitae semper quis lectus nulla. Massa tincidunt dui ut ornare. Id eu nisl nunc mi ipsum faucibus. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Maecenas sed enim ut sem viverra aliquet eget sit. Consequat id porta nibh venenatis cras sed felis eget. Sit amet risus nullam eget felis eget nunc. Elementum nisi quis eleifend quam adipiscing. Sit amet commodo nulla facilisi. Dignissim enim sit amet venenatis urna cursus eget nunc.

Blandit massa enim nec dui nunc mattis. Ut aliquam purus sit amet luctus. Magna sit amet purus gravida quis. Tortor aliquam nulla facilisi cras fermentum odio. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Risus quis varius quam quisque id diam vel. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Accumsan lacus vel facilisis volutpat est velit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Eget aliquet nibh praesent tristique magna sit. Sed vulputate mi sit amet mauris. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Nec feugiat in fermentum posuere urna.</Text>
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
           </Flex>
       </Flex>
    );
}