import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const getNavLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={getNavLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/movies"} className={getNavLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
