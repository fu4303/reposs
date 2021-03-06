import { Avatar } from "@chakra-ui/avatar";
// import { useColorModeValue } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { Badge } from "@chakra-ui/react";
// import { GoRepoForked, GoIssueOpened, GoStar } from "react-icons/go";

const LinkBox = ({ href: url, children }) => {
  return (
    <chakra.a
      p={[1, 1.5]}
      target={"_blank"}
      rel={"noopener noreferrer"}
      // bgColor={useColorModeValue("gray.100", "gray.600")}
      bgColor={"gray.100"}
      border={"1px"}
      _hover={{
        // bgColor: useColorModeValue("gray.300", "gray.700"),
        bgColor: "gray.300",
      }}
      borderRadius={"md"}
      // borderColor={useColorModeValue("gray.300", "gray.700")}
      borderColor={"gray.300"}
      fontSize={["x-small", "xs"]}
      w={"fit-content"}
      href={url}
    >
      <Text fontWeight={"semibold"}>{children}</Text>
    </chakra.a>
  );
};

const Repository = ({ data }) => {
  return (
    <Box
      border={"2px"}
      // borderColor={useColorModeValue("gray.100", "gray.600")}
      borderColor={"gray.100"}
      borderRadius={"lg"}
      p={5}
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-10px)",
      }}
      transition={"ease-in-out 150ms"}
      // bgColor={useColorModeValue("gray.50", "gray.900")}
      bgColor={"gray.50"}
    >
      <Box>
        <Box>
          <Stack spacing={4} direction={"row"}>
            {/* Owner Information Container */}
            <Box>
              <Center>
                <Tooltip label={`Visit ${data?.owner?.login}'s profile`}>
                  <chakra.a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    href={data?.owner.html_url}
                  >
                    <Avatar
                      size={"md"}
                      _hover={{
                        opacity: 0.6,
                        transform: "scale(1.3)",
                        transition: "all .2s ease-in-out",
                      }}
                      transition={"all .2s ease-in-out"}
                      borderRadius={"full"}
                      src={data?.owner?.avatar_url}
                    />
                  </chakra.a>
                </Tooltip>
              </Center>
            </Box>

            {/* Repository Information Container */}
            <Box>
              <Stack spacing={1.5}>
                <Box>
                  <chakra.a
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    color={"blue.400"}
                    href={data?.html_url}
                  >
                    <Text fontSize={["sm", "lg", "xl"]} fontWeight={"bold"}>
                      {data?.name}
                    </Text>
                  </chakra.a>

                  {data?.owner?.type === "Organization" && (
                    <Badge
                      colorScheme={"blue"}
                      color={"black.200"}
                      rounded={"md"}
                      mb={-0.5}
                      mt={-2}
                    >
                      {data?.owner?.type}
                    </Badge>
                  )}

                  <Text
                    color={"gray.500"}
                    fontSize={["x-small", "xs"]}
                    fontWeight={"semibold"}
                  >
                    {data?.full_name}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={["xs", "sm"]} fontWeight={"semibold"}>
                    {data?.description}
                  </Text>
                </Box>

                <Box>
                  <Stack direction={["column", "row"]}>
                    {/* Issues Container */}
                    <LinkBox href={`${data?.html_url}/issues`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.open_issues_count}
                      </chakra.span>{" "}
                      open issues ????
                    </LinkBox>

                    {/* Stargazers Container */}
                    <LinkBox href={`${data?.html_url}/stargazers`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.stargazers_count}
                      </chakra.span>{" "}
                      stars ???
                    </LinkBox>

                    {/* Forks Container */}
                    <LinkBox href={`${data?.html_url}/network/members`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.forks_count}
                      </chakra.span>{" "}
                      forks
                    </LinkBox>
                    <LinkBox href={`${data?.html_url}/watchers`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.watchers}
                      </chakra.span>{" "}
                      watchers ????
                    </LinkBox>
                  </Stack>
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
