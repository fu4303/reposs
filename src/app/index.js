import theme from "./theme";
import Routes from "./routes";
import splitbee from "@splitbee/web";
import { ChakraProvider } from "@chakra-ui/react";

// Enabling Splitbee Analytics for non-development environments
process.env.NODE_ENV !== "development" &&
  splitbee.init({
    token: process.env.REACT_APP_SPLITBEE_TOKEN,
  });

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
