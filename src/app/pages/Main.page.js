import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/Main.layout";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";
import Repository from "../components/Repository";
import fallbackData from "../data/fallbackData.json";
import { Stack } from "@chakra-ui/layout";
import { paginateRepos } from "../utils/utils";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

const MainPage = () => {
  const [repos, setRepos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetching random repos from GitHub's API
        const { data, status } = await axios.get(
          "https://api.github.com/repositories"
        );

        // Setting fetching status to false
        setFetching(false);

        // Checking if response status is OK (200)
        switch (status) {
          // If it's FORBIDDEN (403)
          case 403: {
            // Paginating the array
            const paginatedRepos = paginateRepos(fallbackData);
            // Setting filtered repos to fallback data
            setFilteredRepos(paginatedRepos[currentPage]);
            // Setting repos to fallback data
            return setRepos(paginatedRepos);
          }
          // If it's OK (200)
          default: {
            // Paginating the array
            const paginatedRepos = paginateRepos(data);
            // Setting filtered repos to fallback data
            setFilteredRepos(paginatedRepos[currentPage]);
            // Setting repos as fresh data
            return setRepos(paginateRepos(data));
          }
        }
      } catch (error) {
        // Setting fetching status to false
        setFetching(false);
        // Paginating the array
        const paginatedRepos = paginateRepos(fallbackData);
        // Setting filtered repos to fallback data
        setFilteredRepos(paginatedRepos[currentPage]);
        // Setting repos to fallback data
        return setRepos(paginatedRepos);
      }
    };

    // Fetching the repos
    fetchRepos();
    // Component cleanup
    return () => {};
  }, [currentPage]);

  useBottomScrollListener(() => {
    console.log({ filteredRepos, repos });
  });

  return (
    <MainLayout>
      <Box>
        {fetching ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Stack spacing={5}>
            {filteredRepos?.map((repo) => {
              return <Repository key={repo?.id} data={repo} />;
            })}
          </Stack>
        )}
      </Box>
    </MainLayout>
  );
};

export default MainPage;
