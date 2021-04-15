import { Avatar } from "@chakra-ui/avatar";
// import { useColorModeValue } from "@chakra-ui/color-mode";
import { Center } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tooltip } from "@chakra-ui/tooltip";
import { Badge } from "@chakra-ui/react";
import { getRepoLangs, getRepos, getRepoReadme } from "../../api/api";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

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
      w={"fit-content"}
      href={url}
    >
      <Text
        fontSize={["x-small", "x-small", "x-small", "xs"]}
        fontWeight={"semibold"}
      >
        {children}
      </Text>
    </chakra.a>
  );
};

// ! TODO: Continue working on this
const Repository = ({ data }) => {
  const average_grade =
    data?.stargazers_count +
    data?.forks_count +
    data?.watchers +
    data?.open_issues_count / 4;

  const [readme, setReadme] = useState(""); // We're returning the converted string
  const [fetching, setFetching] = useState(true);
  const [languages, setLanguages] = useState([]);

  // For fetching all of the repository data
  const fetchRepositoryData = async () => {
    const [repoLanguages, repoReadme] = await Promise.all([
      getRepoLangs(data?.name, data?.owner.login),
      getRepoReadme(data?.name, data?.owner.login),
    ]);

    return () => {
      setReadme(repoReadme);
      setLanguages(repoLanguages);
      setFetching(false);
    };
  };

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
                    {/* Repository owner image container */}
                    <Avatar
                      size={"md"}
                      _hover={{
                        opacity: 0.6,
                      }}
                      name={data?.owner?.login}
                      transition={"all 0.2s ease-in-out"}
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
                    {/* Repository short name container */}
                    <Text fontSize={["sm", "lg", "xl"]} fontWeight={"bold"}>
                      {/* Name */}
                      {data?.name}
                      {/* If the repo is trending add a fire to the text */}
                      {average_grade >= 400 * 1000 && "🔥"}
                    </Text>
                  </chakra.a>

                  {/* If the repository owner is an organization show a badge */}
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

                  {/* Repository full name container */}
                  <Text
                    color={"gray.500"}
                    fontSize={["x-small", "xs"]}
                    fontWeight={"semibold"}
                  >
                    {data?.full_name}
                  </Text>
                </Box>

                {/* Repository description container */}
                <Box>
                  <Text fontSize={["xs", "sm"]} fontWeight={"semibold"}>
                    {data?.description}
                  </Text>
                </Box>

                <Box>
                  <Stack direction={["column", "row"]}>
                    {/* Issues container */}
                    <LinkBox href={`${data?.html_url}/issues`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.open_issues_count}
                      </chakra.span>{" "}
                      open issues 🚨
                    </LinkBox>

                    {/* Stargazers container */}
                    <LinkBox href={`${data?.html_url}/stargazers`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.stargazers_count}
                      </chakra.span>{" "}
                      stars ⭐
                    </LinkBox>

                    {/* Forks container */}
                    <LinkBox href={`${data?.html_url}/network/members`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.forks_count}
                      </chakra.span>{" "}
                      forks 🍴
                    </LinkBox>

                    {/* Watchers container */}
                    {/* <LinkBox href={`${data?.html_url}/watchers`}>
                      <chakra.span fontWeight={"bold"}>
                        {data?.watchers}
                      </chakra.span>{" "}
                      watchers 👀
                    </LinkBox> */}

                    {/* // ! BUG: Github API v3 does not return the watch count, the watchers value is the same as the stars.
                    // Github API only gives subscribers_count on users, not repos */}

                    {/* Deployments container */}
                    <LinkBox href={`${data?.html_url}/deployments`}>
                      <chakra.span fontWeight={"bold"}>
                        Deployments ☁
                      </chakra.span>
                    </LinkBox>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Other info accordion */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton onClick={fetchRepositoryData}>
                <Box flex="1" textAlign={"left"}>
                  {/* TODO */}
                  {console.log(readme)}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{/* TODO */}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Repository;
