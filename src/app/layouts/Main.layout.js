import { Box } from "@chakra-ui/layout";
import { Navbar } from "../components/Navbar";

const MainLayout = ({ ...rest }) => {
  return (
    <Box>
      {/* Sticky navbar */}
      <Navbar />
      {/* Nested stuff */}
      <Box mt={10}>{rest.children}</Box>
    </Box>
  );
};

export default MainLayout;
