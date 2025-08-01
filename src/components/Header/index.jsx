import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSearch } from "@/hooks/useSearch";
import { useTheme } from "@/context/ThemeContext";

import InputSearch from "../InputSearch";

import logo from "@/assets/images/cubos-logo.png";
import sunIcon from "@/assets/icons/sun.svg";
import moonIcon from "@/assets/icons/moon.svg";
import filterIcon from "@/assets/icons/filter.svg";

import "./styles.scss";

export default function Header() {
  const [inputSearch, setInputSearch] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { search, setSearch } = useSearch();

  const navigate = useNavigate();

  const handleSearch = () => {
    setSearch(inputSearch);
  };

  useEffect(() => {
    setInputSearch(search || "");
  }, [search]);

  return (
    <header className="cubos-header">
      <div className="cubos-container">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <img src={logo} onClick={() => navigate("/")} />
          </div>
          <div className="search-wrapper">
            <InputSearch
              value={inputSearch}
              handleChange={(text) => setInputSearch(text)}
              handleSearch={() => handleSearch()}
            />
          </div>
          <div className="btns-wrapper">
            <button className="btn btn-filters">
              <img src={filterIcon} />
            </button>
            <button className="btn btn-toggle-theme" onClick={toggleTheme}>
              {theme === "light" ? (
                <img src={moonIcon} />
              ) : (
                <img src={sunIcon} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
