import { InputLeftElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { Center } from "@chakra-ui/layout";
import { RiGithubFill } from "react-icons/ri";

const Search = () => {
  return (
    <Center>
      <InputGroup>
        <InputLeftElement children={<RiGithubFill />} />
        <Input placeholder={"Search..."} w={"full"} variant={"filled"} />
      </InputGroup>
    </Center>
  );
};

export { Search };
