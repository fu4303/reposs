import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Button: {
      baseStyle: {
        _focus: null,
      },
    },
  },
});
