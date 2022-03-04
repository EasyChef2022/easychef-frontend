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
import { SignupComponent } from '../components/SignupComponent'

const Signup = () => {

    
    return (
        <>
        <Header />
        <Flex
        flexDirection="column"
        bg="green.50"
        height="90vh"
        pt="20vh"
        >
            
            <SignupComponent />

        </Flex>
        </>)
}

export default Signup