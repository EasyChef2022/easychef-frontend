import {
	Flex
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SignupComponent } from "../components/SignupComponent";

const Signup = () => {

	//Continer for signupComponent
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
		</>);
};

export default Signup;