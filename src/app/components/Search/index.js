// import { Button } from "@chakra-ui/button";
import { InputRightElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import axios from "axios";
import {
  // RiFilter3Line,
  RiSearch2Line,
} from "react-icons/ri";
import { linkBuilder } from "../../utils/linkBuilder";
import { paginate } from "../../utils/paginate";
import { shuffle } from "lodash";

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
      setRepos(
        // Shuffling the pages
        shuffle(
          // Shuffling subrepos
          repos.map((sub) => {
            return shuffle(sub);
          })
        )
      );
      // Setting the updated and shuffled repo array
      setFilteredRepos(repos[currentPage]);
      return;
    } else {
      // Filtered repo array
      const filtered = [];

      // Looping through each page of the paginated array
      repos?.forEach((page) => {
        // Looping through each repo
        page?.forEach((repo) => {
          // If the repo contains a substring of a query
          if (
            repo?.name?.toLocaleLowerCase().includes(query?.toLocaleLowerCase())
          ) {
            // Push to the filtered array
            filtered.push(repo);
          }
        });
      });

      // If there are no matching results
      if (filtered.length === 0) {
        // Update fetching status
        setFetching(true);
        // Send an http request to github api
        const { data } = await axios.get(linkBuilder(query, 1000, "desc", 20));
        // Update fetching status
        setFetching(false);
        // Pushing the items to the filtered array
        filtered.push(...data?.items);
        // Caching fetched repos
        setRepos(
          repos
          // ...paginate(data?.items)
        );
      }

      // Setting filtered repos to the filtered array
      setFilteredRepos(filtered);
      return;
    }
  };

  return (
    <Center>
      <Stack direction={"row"}>
        <InputGroup>
          <Input
            placeholder={"Search..."}
            variant={"filled"}
            onChange={(event) =>
              (async () => searchRepos(event.target.value))()
            }
          />
          <InputRightElement children={<RiSearch2Line />} />
        </InputGroup>

        {/* <Button rightIcon={<RiFilter3Line />}>Filters</Button> */}
      </Stack>
    </Center>
  );
};

export { Search };
