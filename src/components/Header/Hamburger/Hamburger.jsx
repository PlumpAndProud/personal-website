import Hamburger from "hamburger-react";
import { useState } from "react";
import { useRef } from "react";
import { useClickAway } from "react-use";
import style from "./Hamburger.module.scss";

export default function HamburgerSection() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <>
      <div className={style.Project_navigation_wrapper} ref={ref}>
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
