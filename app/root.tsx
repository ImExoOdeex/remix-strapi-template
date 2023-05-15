import {
	ChakraBaseProvider,
	cookieStorageManager,
	cookieStorageManagerSSR,
	useConst
} from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Layout from "./components/UI/layout/Layout";
import { Document } from "./components/utils/remixChakra/Document";
import theme from "./components/utils/remixChakra/theme";

export async function loader({ request }: LoaderArgs) {
	const cookies = request.headers.get("Cookie") ?? "";

	return json({ cookies });
}

export default function App() {
	const { cookies } = useLoaderData<typeof loader>();
	const cookieManager = useConst(cookieStorageManagerSSR(cookies));

	return (
		<Document>
			<ChakraBaseProvider
				resetCSS
				theme={theme}
				colorModeManager={
					typeof cookies === "string"
						? cookieManager
						: cookieStorageManager
				}
			>
				<Layout>
					<Outlet />
				</Layout>
			</ChakraBaseProvider>
		</Document>
	);
}

export function meta() {
	return [
		{
			charset: "utf-8"
		},
		{
			title: "imexoodeex"
		},
		{
			name: "viewport",
			content: "width=device-width,initial-scale=1"
		}
	];
}

export function links() {
	return [
		{ rel: "preconnect", href: "https://fonts.googleapis.com" },
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOriginIsolated: true
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
		}
	];
}
