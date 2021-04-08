import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "@chakra-ui/spinner";
import { paginate } from "../utils/paginate";
import { Search } from "../components/Search";
import MainLayout from "../layouts/Main.layout";
import Repository from "../components/Repository";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { chakra } from "@chakra-ui/system";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { Tooltip } from "@chakra-ui/tooltip";
import { generateApiUrl } from "../utils/generateApiUrl";

/**
 * This variable is created for keeping track of current page
 *
 * Note:
 * It's put here on purpose
 */
let currentPage = 0;

const MainPage = () => {
  const toast = useToast();
  const fetchRepos = useRef(() => {});
  const [repos, setRepos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [filteredRepos, setFilteredRepos] = useState([]);

  fetchRepos.current = async () => {
    try {
      // Request to GitHub API
      const { data } = await axios.get(generateApiUrl());
      // Paginating the response
      const paginated = paginate(data?.items);
      // Setting the repos
      setRepos(paginated);
      // Updating fetch status
      setFetching(false);
      // Setting filtered repos
      setFilteredRepos(paginated[currentPage]);
    } catch (error) {
      // Logging the error
      console.error(error);
      // Setting the repos
      setRepos([]);
      // Setting filtered repos
      setFilteredRepos([]);
      // Updating fetch status
      setFetching(false);
      // Notifying the user about the error
      toast({
        title: "There was an error",
        duration: 5000,
        isClosable: false,
        status: "error",
      });
    }
  };

  useEffect(() => {
    // Fetching the repos
    fetchRepos.current();
    // Cleanup
    return () => {};
  }, []);

  // When the user has reached the end of the page
  useBottomScrollListener(() => {
    if (currentPage + 1 < repos.length) {
      // Incrementing current page number
      currentPage += 1;
      // Setting filtered repos
      setFilteredRepos(filteredRepos.concat(repos[currentPage]));
    }

    // Cleanup
    return () => {};
  });

  return (
    <MainLayout>
      <Box>
        <Stack spacing={5}>
          <Center>
            <Tooltip label={"Guess you like the logo 🤩"}>
              <Image src={"/logo512.png"} w={20} h={20} borderRadius={"full"} />
            </Tooltip>
          </Center>

          <Center>
            <Text fontSize={["lg", "xl", "2xl"]} fontWeight={"semibold"}>
              Discover repositories with{" "}
              <chakra.a
                as={Link}
                to={"/"}
                fontWeight={"bold"}
                textDecor={"underline"}
              >
                reposs
              </chakra.a>
            </Text>
          </Center>

          <Stack spacing={10}>
            <Box>
              <Center>
                <Box w={"lg"}>
                  <Stack spacing={5}>
                    <Search filteredRepos={filteredRepos} setFilteredRepos />
                  </Stack>
                </Box>
              </Center>
            </Box>

            <Box>
              {fetching ? (
                <Center>
                  <Spinner />
                </Center>
              ) : filteredRepos?.length === 0 || repos?.length === 0 ? (
                <Center>
                  <Text fontWeight={"semibold"} fontSize={"lg"}>
                    Nope, nothing here 🤔
                  </Text>
                </Center>
              ) : (
                <Stack spacing={5}>
                  {filteredRepos?.map((repo) => {
                    return <Repository key={repo?.id} data={repo} />;
                  })}
                </Stack>
              )}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </MainLayout>
  );
};

export default MainPage;
