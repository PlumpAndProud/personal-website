import style from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <ul className={style.Navbar}>
        <li className={style.Projects}>My works</li>
        <li className={style.About}>About me</li>
        <li className={style.Contact}>Contact</li>
      </ul>
    </>
  );
}
