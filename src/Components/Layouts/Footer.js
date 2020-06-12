import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
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
      <ul>
        <li>
          <a href="/contact" className="text-white">
            Contact Me
          </a>
        </li>
      </ul>
      <p className="text-center">Developed by Subhasis Das &copy; 2020</p>
    </footer>
  );
};

export default Footer;
