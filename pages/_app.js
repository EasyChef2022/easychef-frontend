import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import PropTypes from "prop-types"; 
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}
MyApp.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object
};

export default MyApp;