import React from "react";
import HamburgerSection from "./Hamburger/Hamburger.jsx";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={style.Nav_block}>
        <HamburgerSection />
        <ul className={style.Navbar}>
          <li className={style.Projects}>
            <a href="">My works</a>
          </li>
          <li className={style.About}>
            <a href="">About me</a>
          </li>
          <li className={style.Contact}>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
