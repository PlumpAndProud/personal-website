import Hamburger from "hamburger-react";
import { useState } from "react";
import style from "./Hamburger.module.scss";
import React from "react";

export default function HamburgerSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={style.Project_navigation_wrapper}>
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          color="#dddddd"
        />
        {isOpen && (
          <div className={style.Project_list}>
            <ul>
              <li>SIema</li>
              <li>Siema</li>
            </ul>
          </div>
        )}
        <div className={style.Project_navigation}>Project Navigation</div>
      </div>
    </>
    //
  );
}
