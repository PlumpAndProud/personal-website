import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion, spring } from "framer-motion";
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
          size={22}
          toggle={setOpen}
          color="#dddddd"
          label="Show menu"
          rounded
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={style.Project_list}
            >
              <ul>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.2,
                  }}
                >
                  SIema
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: 0.4,
                  }}
                >
                  Siema
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={style.Project_navigation}>Project Navigation</div>
      </div>
    </>
    //
  );
}
