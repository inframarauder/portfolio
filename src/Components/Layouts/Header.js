import React, { useState } from "react";

const Header = () => {
  const [iconClass, setIconClass] = useState("fa fa-bars");
  const [menuVisibility, setMenuVisibility] = useState("hide");

  const toggleMenu = () => {
    setIconClass((iconClass) =>
      iconClass === "fa fa-bars" ? "fa fa-times" : "fa fa-bars"
    );

    toggleVisibility();
  };

  const toggleVisibility = () => {
    setMenuVisibility((menuVisibility) =>
      menuVisibility === "hide" ? "show" : "hide"
    );
  };

  return (
    <nav>
      <span>
        <a href="/">
          <img src="/images/navlogo.jpg" alt="navlogo" id="navlogo" />
        </a>
      </span>
      <i className={`${iconClass} icon`} onClick={toggleMenu}></i>
      <ul className={`${menuVisibility}`}>
        <li>
          <a href="/#about" onClick={toggleMenu}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="/#skills" onClick={toggleMenu}>
            SKILLS
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={toggleMenu}>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="/contact" onClick={toggleMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
