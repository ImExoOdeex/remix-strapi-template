import { Flex } from "@chakra-ui/react";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import config from "~/components/config/config";

export async function loader({ request }: LoaderArgs) {
	const content = await fetch(
		`http://0.0.0.0:${config.strapiPort}/api/index`,
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
			}
		}
	).then((res) => res.json());

	return json({ content: content.data.attributes });
}

export default function Index() {
	const { content } = useLoaderData<typeof loader>();
	console.log(content);

	return (
		<Flex flexDir={"column"} mx={"auto"} h="100%" w="100%" px={4}>
			{content.title}
		</Flex>
	);
}
