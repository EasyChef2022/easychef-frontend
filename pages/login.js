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
import { LoginComponent } from '../components/LoginComponent'

const Login = () => {

    
    return (
        <>
        <Header />
        <Flex
        flexDirection="column"
        bg="green.50"
        height="90vh"
        pt="20vh"
        >
            
            <LoginComponent />

        </Flex>
        </>)
}

export default Login