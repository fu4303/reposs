import { InputLeftElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Center } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { RiGithubFill } from "react-icons/ri";

const Search = () => {
  return (
    <Center>
      <Tooltip label={"We are working on it"}>
        <InputGroup>
          <InputLeftElement children={<RiGithubFill />} />
          <Input
            isDisabled={true}
            placeholder={"Search..."}
            w={"full"}
            variant={"filled"}
          />
        </InputGroup>
      </Tooltip>
    </Center>
  );
};

export { Search };
