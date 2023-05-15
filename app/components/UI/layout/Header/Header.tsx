import { Flex, HStack, useColorMode, useEventListener } from "@chakra-ui/react";
import ThemeChangeButton from "./ThemeChangeButton";

export default function Header() {
	const { toggleColorMode } = useColorMode();

	useEventListener("keydown", (event: any) => {
		const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator?.platform);
		const hotkey = isMac ? "metaKey" : "ctrlKey";
		if (event?.key?.toLowerCase() === "i" && event[hotkey]) {
			event.preventDefault();
			toggleColorMode();
		}
	});

	return (
		<Flex h="60px" w="100%">
			<Flex
				mx={"auto"}
				w="100%"
				h={"100%"}
				justifyContent="space-between"
				px={4}
				alignItems="center"
			>
				<HStack spacing={5} alignItems={"center"}></HStack>
				<HStack spacing={4}>
					<ThemeChangeButton />
				</HStack>
			</Flex>
		</Flex>
	);
}
