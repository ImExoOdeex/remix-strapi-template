import {
	extendBaseTheme,
	mergeThemeOverride,
	type BaseThemeTypings,
	type ThemeConfig
} from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { mode, type StyleFunctionProps } from "@chakra-ui/theme-tools";
import type { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
	disableTransitionOnChange: false
};

const styles = {
	global: (props: StyleFunctionProps | Dict<any>) => ({
		body: {
			minH: "100vh",
			bg: mode("bg.100", "bg.900")(props)
		},
		html: {
			"::-webkit-scrollbar": {
				display: "none"
			}
		}
	})
};

const colors = {
	brand: {
		"50": "#FDECF2",
		"100": "#FAD8E5",
		"200": "#F6B1CB",
		"300": "#F28AB1",
		"400": "#F087AF",
		"500": "#E85A8F",
		"600": "#E12A7A",
		"700": "#D80065",
		"800": "#C50050",
		"900": "#B2003B"
	},
	sec: {
		"50": "#F9EBEB",
		"100": "#EFC8C8",
		"200": "#E5A4A4",
		"300": "#DA8181",
		"400": "#D05D5D",
		"500": "#C53A3A",
		"600": "#9E2E2E",
		"700": "#762323",
		"800": "#4F1717",
		"900": "#270C0C"
	},
	bg: {
		100: "#fff",
		900: `#0d0d0d`
	},
	discord: {
		100: "#5865F2",
		900: "#6A5ACD"
	}
};

const { Tooltip, Button, Heading, Link, Menu, Divider } =
	chakraTheme.components;

const theme = extendBaseTheme(
	{
		colors,
		config,
		styles,
		fonts: {
			body: `"Poppins", sans-serif`,
			heading: `"Outfit", sans-serif`
		},
		semanticTokens: {
			colors: {
				brand: {
					default: "brand.900",
					_dark: "brand.100"
				},
				text: {
					default: "blackAlpha.900",
					_dark: "whiteAlpha.900"
				},
				textSec: {
					default: "blackAlpha.800",
					_dark: "whiteAlpha.800"
				},
				inv: {
					default: "white",
					_dark: "black"
				},
				red: {
					default: "red.500",
					_dark: "red.400"
				},
				pink: {
					default: "pink.500",
					_dark: "pink.400"
				},
				green: {
					default: "green.600",
					_dark: "green.400"
				},
				bg: {
					default: "bg.100",
					_dark: "bg.900"
				},
				alpha: {
					default: "blackAlpha.50",
					_dark: "whiteAlpha.50"
				},
				alpha100: {
					default: "blackAlpha.100",
					_dark: "whiteAlpha.100"
				},
				alpha200: {
					default: "blackAlpha.200",
					_dark: "whiteAlpha.200"
				},
				alpha300: {
					default: "blackAlpha.300",
					_dark: "whiteAlpha.300"
				},
				alpha400: {
					default: "blackAlpha.400",
					_dark: "whiteAlpha.400"
				},
				alpha500: {
					default: "blackAlpha.500",
					_dark: "whiteAlpha.500"
				},
				alpha600: {
					default: "blackAlpha.600",
					_dark: "whiteAlpha.600"
				},
				alpha700: {
					default: "blackAlpha.700",

					_dark: "whiteAlpha.700"
				},
				alpha800: {
					default: "blackAlpha.800",
					_dark: "whiteAlpha.800"
				},
				alpha900: {
					default: "blackAlpha.900",
					_dark: "whiteAlpha.900"
				},
				spotify: {
					default: "#107834",
					_dark: "#1DB954"
				},
				linkedin: {
					default: "#0A66C2",
					_dark: "#0b8ee6"
				},
				monkeytype: {
					default: "#bf920a",
					_dark: "#FFC107"
				},
				wakatime: {
					default: "#563B9F",
					_dark: "#8b6be3"
				},
				discord: {
					default: "discord.100"
				}
			}
		},
		components: {
			Tooltip: mergeThemeOverride(Tooltip, {
				baseStyle: {
					bg: "#1d1d22",
					"--tooltip-bg": "#1d1d22",
					color: "white",
					_dark: {
						"--tooltip-bg": "#fff",
						bg: "bg.100",
						color: "black"
					}
				}
			}),
			Button: mergeThemeOverride(Button, {
				baseStyle: {
					rounded: "xl",
					transform: "auto-gpu",
					_hover: {
						bg: "alpha"
					},
					_active: {
						bg: "alpha200",
						scale: 0.9
					}
				}
			}),
			Heading,
			Menu,
			Divider,
			Link
		}
	}
	// withDefaultColorScheme({ colorScheme: "brand" })
) as BaseThemeTypings;

export default theme;
