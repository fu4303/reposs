import { IconButton } from "@chakra-ui/button";
// import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Stack } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useEffect, useState } from "react";
import {
  // RiMoonFill,
  RiGithubFill,
  // RiSunFill,
  RiDiscordFill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Title = () => {
  return (
    <Center as={NavLink} to={"/"}>
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        reposs
      </Text>
    </Center>
  );
};

// const Toggle = () => {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <Center>
//       <Tooltip label={"Toggle theme"}>
//         <IconButton
//           icon={colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
//           onClick={toggleColorMode}
//           size={"md"}
//           isRound
//         />
//       </Tooltip>
//     </Center>
//   );
// };

const GitHubButton = () => {
  return (
    <Center>
      <Tooltip label={"GitHub"}>
        <Link
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={"https://github.com/MichaelGrigoryan25/reposs"}
        >
          <IconButton icon={<RiGithubFill />} isRound size={"md"} />
        </Link>
      </Tooltip>
    </Center>
  );
};

const DiscordButton = () => {
  return (
    <Center>
      <Tooltip label={"Discord Server"}>
        <Link
          target={"_blank"}
          rel={"noopener noreferrer"}
          href={"https://discord.gg/tdSZpqgBbg"}
        >
          <IconButton icon={<RiDiscordFill />} isRound size={"md"} />
        </Link>
      </Tooltip>
    </Center>
  );
};

const Buttons = () => {
  return (
    <Box>
      <Stack direction={"row"}>
        <DiscordButton />
        <GitHubButton />
        {/* <Toggle /> */}
      </Stack>
    </Box>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    });

    return window.removeEventListener("scroll", handle);
  }, []);

  return (
    <Box
      top={0}
      py={[2, 3]}
      pos={"sticky"}
      zIndex={"sticky"}
      borderBottom={"2px"}
      transition={"ease-in-out 200ms"}
      px={[3, 50, 100, 150, 250, 300]}
      boxShadow={scrolled ? "lg" : null}
      bgColor={"gray.50"}
      borderColor={"gray.100"}
      // bgColor={useColorModeValue("gray.50", "gray.700")}
      // borderColor={useColorModeValue("gray.100", "gray.800")}
    >
      <Box transition={"ease-in-out 150ms"} p={scrolled ? 1 : null}>
        <Flex>
          <Title />
          <Spacer />
          <Buttons />
        </Flex>
      </Box>
    </Box>
  );
};

export { Navbar };
