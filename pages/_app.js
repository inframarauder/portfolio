import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Subhasis Das | Portfolio</title>
				<meta
					name="description"
					content="My portfolio website built using Next.js"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
