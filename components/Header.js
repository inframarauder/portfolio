import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Header = () => {
	const { hide, show } = styles;

	const [iconClass, setIconClass] = useState("fa fa-bars");
	const [menuVisibility, setMenuVisibility] = useState(hide);

	const toggleMenu = () => {
		setIconClass((iconClass) =>
			iconClass === "fa fa-bars" ? "fa fa-times" : "fa fa-bars"
		);

		toggleVisibility();
	};

	const toggleVisibility = () => {
		setMenuVisibility((menuVisibility) =>
			menuVisibility === hide ? show : hide
		);
	};

	return (
		<nav className={styles.header}>
			<span className={styles.span}>
				<a href="/">
					<img
						src="/images/navlogo.jpg"
						alt="navlogo"
						className={styles.navlogo}
					/>
				</a>
			</span>
			<i className={`${iconClass} ${styles.icon}`} onClick={toggleMenu}></i>
			<ul className={`${styles.list} ${menuVisibility} `}>
				<li className={styles.listItem}>
					<a href="/#home" onClick={toggleMenu} className={styles.link}>
						HOME
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="/#about" onClick={toggleMenu} className={styles.link}>
						ABOUT
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="/#work" onClick={toggleMenu} className={styles.link}>
						WORK
					</a>
				</li>

				{/* <li className={styles.listItem}>
					<a href="/#projects" onClick={toggleMenu} className={styles.link}>
						PROJECTS
					</a>
				</li> */}
				<li className={styles.listItem}>
					{" "}
					<a
						href="https://medium.com/@subhasisdas125"
						onClick={toggleMenu}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						BLOG
					</a>
				</li>
				<li className={styles.listItem}>
					<a href="/contact" onClick={toggleMenu} className={styles.link}>
						CONTACT
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
