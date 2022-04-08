import {
    Link as ChakraLink,
    Text,
    Flex,
    Code,
    List,
    ListIcon,
    ListItem,
    Spacer,
    Box,
    Divider,
    Stack
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { UserComponent } from '../components/UserComponent'
const UserPage = () => {

    //Login page, container for the logincomponent
    return (
        <>
        <Header />
        <Flex
        flexDirection="column"
        bg="green.50"
        height="90vh"
        pt="10vh"
        >
            
            <UserComponent />

        </Flex>
        </>)
}

export default UserPage