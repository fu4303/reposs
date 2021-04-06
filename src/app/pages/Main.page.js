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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/repositories");
        setRepos(data);
        setFetching(false);
        return;
      } catch (error) {
        setRepos(fallbackData);
        setFetching(false);
        console.error(error);
        return;
      }
    };

    fetchRepos();
    return () => {};
  }, [repos]);

  return (
    <MainLayout>
      <Box>
        {fetching ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Stack spacing={5}>
            {repos.map((repo) => {
              return <Repository data={repo} />;
            })}
          </Stack>
        )}
      </Box>
    </MainLayout>
  );
};

export default MainPage;
