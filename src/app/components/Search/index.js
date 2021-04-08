import { Button } from "@chakra-ui/button";
import { InputLeftElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { RiFilter3Line, RiGithubFill } from "react-icons/ri";

const Search = () => {
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
