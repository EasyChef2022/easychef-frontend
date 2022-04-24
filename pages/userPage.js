import {
    Link as ChakraLink,
    Flex
} from '@chakra-ui/react'
import Header from '../components/Header'
import UserComponent from '../components/UserComponent'
const UserPage = () => {

    //Page to display some user settings. Currently only contains deletion
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