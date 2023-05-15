import Header from "./Header/Header";

export const handle = {
	i18n: "common"
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
