import Hamburger from "hamburger-react";
import { useState } from "react";
import style from "./Hamburger.module.scss";

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
        <div className={style.Project_navigation}>Project Navigation</div>
      </div>
    </>
    //
  );
}
