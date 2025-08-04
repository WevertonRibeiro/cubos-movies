import { useEffect, useState } from "react";

import { useTheme } from "@/context/ThemeContext";

import { getMovies, getMovieGenres } from "@/services/movies";

import getImageUrl from "@/utils/getImageUrl";

import logo from "@/assets/images/cubos-logo.png";
import sun from "@/assets/icons/sun.svg";
import chevronleft from "@/assets/icons/chevron-left.svg";
import chevronRight from "@/assets/icons/chevron-right.svg";
import search from "@/assets/icons/search.svg";
import filterIcon from "@/assets/icons/filter.svg";
import background from "@/assets/images/fl-background.png";

import "./styles.scss";

export default function FidelidadePage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const { handleChangeTheme } = useTheme();

  const loadMovies = async () => {
    const res = await getMovies();
    if (!res) return;
    setMovies(res.data.results);
  };

  const loadGenres = async () => {
    const res = await getMovieGenres();
    if (!res) return;
    setGenres(res.data.genres);
  };

  const getGenres = (genreIds = []) => {
    const mappedGenres = genreIds.map(
      (id) => genres.find((g) => g.id == id)?.name
    );
    return mappedGenres.join(", ");
  };

  useEffect(() => {
    document.querySelector(".cubos-header").style.display = "none";
    document.body.style.background = "#121113";
    handleChangeTheme("dark");
    loadGenres();
    loadMovies();
  }, []);

  return (
    <div
      className="fidelidade-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="fl-main">
        <div className="fl-header">
          <div className="fl-container">
            <div className="fl-logo-wrapper">
              <img src={logo} />
              <h2>Movies</h2>
            </div>
            <div className="fl-buttons-header">
              <button className="secundary-button">
                <img src={sun} />
              </button>
            </div>
          </div>
        </div>
        <div className="fl-content">
          <div className="fl-content-wrapper">
            <div className="fl-container">
              <div className="fl-search-wrapper">
                <div className="fl-search">
                  <input type="text" placeholder="Pesquise por filmes" />
                  <button>
                    <img src={search} />
                  </button>
                </div>
                <button className="secundary-button">
                  <img src={filterIcon} />
                </button>
              </div>
              <div className="fl-movies-wrapper">
                {movies?.map((movie) => (
                  <div key={movie?.id} className="fl-movie-wrapper">
                    <div
                      className="fl-movie-image"
                      style={{
                        background: `url(${getImageUrl(movie?.poster_path)})`,
                      }}
                    >
                      <div
                        className="circular"
                        style={{
                          ["--progress"]: Math.round(movie.vote_average * 10),
                          ["--color"]: "#FFE000",
                        }}
                      >
                        <div className="value">
                          {Math.round(movie.vote_average * 10)}
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                    <div className="fl-movie-title">
                      <h4>{movie?.title}</h4>
                      <h3>{getGenres(movie?.genre_ids)}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fl-pagination">
                <ul>
                  <li>
                    <img src={chevronleft} />
                  </li>
                  <li>1</li>
                  <li className="active">2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>
                    <img src={chevronRight} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fl-footer"></div>
      </div>
      <a href="/" className="fn-btn">
        Modo Tema
      </a>
    </div>
  );
}
