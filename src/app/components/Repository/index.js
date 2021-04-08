import { Avatar } from "@chakra-ui/avatar";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";

const Repository = ({ data }) => {
  return (
    <Box
      border={"2px"}
      borderColor={useColorModeValue("gray.100", "gray.600")}
      borderRadius={"lg"}
      p={5}
      _hover={{
        boxShadow: "lg",
      }}
      transition={"ease-in-out 150ms"}
      bgColor={useColorModeValue("gray.50", "")}
    >
      <Box>
        <Box>
          <Stack spacing={4} direction={"row"}>
            <Box>
              <Center>
                <Avatar
                  size={"md"}
                  borderRadius={"full"}
                  src={data?.owner.avatar_url}
                />
              </Center>
            </Box>

            <Box>
              <Stack spacing={1}>
                <Box>
                  <chakra.a color={"blue.400"} href={data?.html_url}>
                    <Text fontSize={"xl"} fontWeight={"bold"}>
                      {data?.name}
                    </Text>
                  </chakra.a>
                  <Text
                    color={"gray.500"}
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                  >
                    {data?.full_name}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={"sm"} fontWeight={"semibold"}>
                    {data?.description}
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Repository;
