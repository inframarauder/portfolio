import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className="text-center">
        Wanna get in touch? Contact me here <a href="/contact">➡️</a>{" "}
      </p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/subhasis-das-6a00aa172/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/linkedin.png" alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/geram_er_chhele"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter.png" alt="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/subhasis020299"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="github" />
          </a>
        </li>
      </ul>
      <p className="text-center">Subhasis Das ©️ 2021</p>
    </footer>
  );
};

export default Footer;
