import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="sorts"
      >
        Сортировка
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="rating"
      >
        Рейтинг
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "header__link header__link--active" : "header__link"
        }
        to="settings"
      >
        Настройки{" "}
      </NavLink>
    </div>
  );
};

export default Header;
