import axios from "axios";
import { Box } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/Main.layout";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";
import Repository from "../components/Repository";
import fallbackData from "../data/fallbackData.json";
import { Stack } from "@chakra-ui/layout";

const MainPage = () => {
  const [repos, setRepos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  /**
   * Here we're creating a paginated array
   * which in fact is a two-dimensional holding 10 objects each
   *
   * @param {Array} repos
   */
  const paginateRepos = (repos = []) => {
    const paginatedRepos = [];

    // Looping through all the repos
    for (let i = 0; i < repos.length; i++) {
      // Creating a new repo array to store the paginated repos
      const _repos = [];

      // Looping 10 times and grabbing the first 10 repos in the repo array
      for (let x = 0; x < 10; x++) {
        // Pushing the repo to `_repo` array
        _repos.push(repos[x]);
      }

      // Pushing the array that contains 10 objects to the `paginatedRepos` array
      paginatedRepos.push(_repos);
    }

    return paginatedRepos;
    // The result will be
    /**
     * [
     *    [...], <- contains 10 objects
     *    [...]  <- contains 10 objects
     *    etc.
     * ]
     */
  };

  useEffect(() => {
    const handle = window.addEventListener("scroll", () => {
      if (window.scrollY <= window.innerHeight) {
        const page = currentPage + 1;
        setCurrentPage(page);
      }
    });

    return window.removeEventListener("scroll", handle);
  }, [currentPage]);

  useEffect(() => {
    const fetchRepos = async () => {
      const { data, status } = await axios.get(
        "https://api.github.com/repositories"
      );

      setFetching(false);
      switch (status) {
        case 403: {
          return setRepos(paginateRepos(fallbackData));
        }
        default: {
          return setRepos(paginateRepos(data));
        }
      }
    };
    fetchRepos();
    return () => {};
  }, []);

  console.log(repos);

  return (
    <MainLayout>
      <Box my={5}>
        {fetching ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Stack px={[5, 50, 100, 150, 250, 300]} spacing={5}>
            {repos[currentPage].map((repo) => {
              return <Repository key={repo.id} data={repo} />;
            })}
          </Stack>
        )}
      </Box>
    </MainLayout>
  );
};

export default MainPage;
