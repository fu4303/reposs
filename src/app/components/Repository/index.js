import { useColorModeValue } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

const Repository = ({ data }) => {
  return (
    <Box p={5} bgColor={useColorModeValue("gray.50", "")}>
      <Box>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {data.name}
        </Text>
        <Text>{data.description}</Text>
      </Box>

      <Box>{/* OTHER DATA */}</Box>
    </Box>
  );
};

export default Repository;
