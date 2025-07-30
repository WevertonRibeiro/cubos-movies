import logo from "@/assets/images/cubos-logo.png";
import { useTheme } from "@/context/ThemeContext";

import sunIcon from "@/assets/icons/sun.svg";
import moonIcon from "@/assets/icons/moon.svg";

import "./styles.scss";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="headerWrapper">
      <div className="logoWrapper">
        <img src={logo} />
        <h2>Movies</h2>
      </div>
      <button className="btnToggleTheme" onClick={toggleTheme}>
        {theme === "light" ? <img src={moonIcon} /> : <img src={sunIcon} />}
      </button>
    </header>
  );
}
