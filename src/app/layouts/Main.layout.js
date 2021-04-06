import { Box } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react"
import { Navbar, SearchBox } from "../components/Navbar";

const MainLayout = ({ ...rest }) => {
  return (
    <Box >
      {/* Sticky navbar */}
      <Navbar />
      <Divider mb={2}/>
      <SearchBox />
      {/* Nested stuff */}
      <Box mt={10}>{rest.children}</Box>
    </Box>
  );
};

export default MainLayout;
