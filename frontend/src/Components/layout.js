import React from "react";
import style from "./style/layout.module.css";

const Navbar = ({ children }) => {
  return (
    <header>
      <nav className={style.navbar}>{children}</nav>
    </header>
  );
};

const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

const Layout = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export { Navbar, Section, Layout };
