import { Flex, Image, useColorMode } from "@chakra-ui/react";

export default function BackgroundBanner({
	banner
}: {
	banner: string | null;
}) {
	const { colorMode } = useColorMode();

	return (
		<Flex
			pos={"absolute"}
			zIndex={-1}
			maxH={"100vh"}
			w="100%"
			h="100%"
			top={0}
			right={0}
			left={0}
			bottom={0}
		>
			{banner && (
				<Image
					w="100%"
					h="100%"
					objectFit={"cover"}
					objectPosition={"center"}
					sx={{
						WebkitMaskImage:
							"linear-gradient(to top, transparent 2%, black 95%)"
					}}
					src={banner}
					opacity={colorMode === "light" ? 0.25 : 0.15}
					transition={"opacity 0.2s ease"}
				/>
			)}
		</Flex>
	);
}
