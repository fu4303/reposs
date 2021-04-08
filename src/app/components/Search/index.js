import { Button } from "@chakra-ui/button";
import { InputLeftElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { RiFilter3Line, RiGithubFill } from "react-icons/ri";
import { useState } from "react";

const Search = ({ setRepos, repos, setFilteredRepos, filteredRepos }) => {
  const [query, setQuery] = useState("");

  const searchRepos = async (query, fRepos) => {
    

    console.log(fRepos);

    const filtered = fRepos.filter((fRepos) => {
      return fRepos?.toLowerCase().includes(query.toLowerCase());
    });

    if (query === undefined) return fRepos;

    setFilteredRepos([]);
    setFilteredRepos(filtered);
  };

  return (
    <Center>
      <Tooltip label={"We are working on it"}>
        <Stack direction={"row"}>
          <InputGroup>
            <InputLeftElement children={<RiGithubFill />} />
            <Input
              isDisabled={true}
              placeholder={"Search..."}
              w={"full"}
              variant={"filled"}
              onChange={(e) => setQuery(e.target.value)}
              onSubmit={searchRepos(query, filteredRepos)}
            />
          </InputGroup>

          <Button isDisabled={true} rightIcon={<RiFilter3Line />}>
            Filters
          </Button>
        </Stack>
      </Tooltip>
    </Center>
  );
};

export { Search };
