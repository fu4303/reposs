import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { RiMoonFill, RiSunLine, RiGithubFill } from "react-icons/ri";
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

const Toggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<IconButton
			icon={colorMode === "light" ? <RiSunLine /> : <RiMoonFill />}
			onClick={toggleColorMode}
			size={"md"}
			isRound
		/>
	);
};

const GitHubButton = () => {
	return (
		<Link
			target={"_blank"}
			rel={"noopener noreferrer"}
			href={"https://github.com"}
		>
			<IconButton icon={<RiGithubFill />} isRound size={"md"} />
		</Link>
	);
};

const Buttons = () => {
	return (
		<Box>
			<Stack direction={"row"}>
				<GitHubButton />
				<Toggle />
			</Stack>
		</Box>
	);
};

const SearchBox = () => {
	return (
		<Center>
			<Input placeholder={"Search..."} w={"full"} />
		</Center>
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
			px={[5, 50, 100, 150, 250, 300]}
			boxShadow={scrolled ? "lg" : null}
			bgColor={useColorModeValue("gray.50", "gray.700")}
			borderColor={useColorModeValue("gray.100", "gray.800")}
		>
			<Box transition={"ease-in-out 100ms"} p={scrolled ? 1 : null}>
				<Flex>
					<Title />
					<Spacer />

					<Buttons />
				</Flex>
			</Box>
		</Box>
	);
};

export default {Navbar, GitHubButton, Toggle, Buttons, SearchBox} ;
