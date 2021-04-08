import { Box } from "@chakra-ui/layout";
// import { Divider } from "@chakra-ui/react"
import {
  Navbar,
  // SearchBox
} from "../components/Navbar";

const MainLayout = ({ ...rest }) => {
  return (
    <Box>
      {/* Sticky navbar */}
      <Navbar />
      {/* <Divider mb={2}/>
      <SearchBox /> */}
      {/* Nested stuff */}
      <Box px={[5, 50, 100, 150, 250, 300]} my={10}>
        {rest.children}
      </Box>
    </Box>
  );
};

export default MainLayout;
