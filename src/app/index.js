import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes";
import theme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
