import { Box } from "@chakra-ui/layout";
import { Navbar } from "../components/Navbar";

const MainLayout = ({ ...rest }) => {
  return (
    <Box>
      {/* Sticky navbar */}
      <Navbar />
      {/* Nested stuff */}
      <Box px={[5, 50, 100, 150, 250, 300]} my={10}>
        {rest.children}
      </Box>
    </Box>
  );
};

export default MainLayout;
