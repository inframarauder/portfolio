import React from "react";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Subhasis Das|Portfolio</title>
				<meta
					name="description"
					content="The official portfolio website of Subhasis Das"
				/>
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<Header />
			<Container fluid>{children}</Container>
			<Footer />
		</>
	);
};

export default Layout;
