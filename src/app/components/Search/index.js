import { Button } from "@chakra-ui/button";
import { InputRightElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import axios from "axios";
// import { Tooltip } from "@chakra-ui/tooltip";
import { RiFilter3Line, RiSearch2Line } from "react-icons/ri";
import { generateApiUrl } from "../../utils/generateApiUrl";
import { paginate } from "../../utils/paginate";
import { shuffle } from "lodash";
import { useParams } from "react-router";

const Search = ({
  setRepos,
  repos,
  setFilteredRepos,
  // filteredRepos,
  // fetching,
  setFetching,
  currentPage,
}) => {
  /**
   *
   * @param {String} query
   */
  const searchRepos = async (query) => {
    // If query is empty
    if (query.length === 0) {
      // Setting current page to 0
      currentPage -= currentPage;
      // Shuffling the updated repo array
      setFilteredRepos(shuffle(shuffle(repos))[currentPage]);
    } else {
      // Filtered repo array
      const filtered = [];

      // Looping through paginated array
      for (let i = 0; i < repos?.length; i++) {
        // Looping through each array
        for (let j = 0; j < repos[i]?.length; j++) {
          // If repo name contains parts from query
          if (
            repos[i][j]?.name?.toLowerCase().includes(query.toLocaleLowerCase())
          )
            // Push the item to the filtered array
            filtered.push(repos[i][j]);
        }
      }

      // If there are no matching results
      if (filtered.length === 0) {
        // Update fetching status
        setFetching(true);
        // Send an http request to github api
        const { data } = await axios.get(
          generateApiUrl(query, 1000, "desc", 20)
        );
        // Update fetching status
        setFetching(false);

        // Pushing the items to the filtered array
        filtered.push(...data?.items);
        // Caching fetched repos
        setRepos([...repos, ...paginate(data?.items)]);
      }

      // Setting filtered repos to the filtered array
      setFilteredRepos(filtered);
    }
  };

  return (
    <Center>
      <Stack direction={"row"}>
        <InputGroup>
          <Input
            placeholder={"Search..."}
            w={"full"}
            variant={"filled"}
            onChange={async (event) => await searchRepos(event.target.value)}
          />
          <InputRightElement children={<RiSearch2Line />} />
        </InputGroup>

        <Button rightIcon={<RiFilter3Line />}>Filters</Button>
      </Stack>
    </Center>
  );
};

export { Search };
