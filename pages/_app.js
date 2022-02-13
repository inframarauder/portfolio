import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
