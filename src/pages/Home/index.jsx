import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { usePagination } from "@/hooks/usePagination";
import { useSearch } from "@/hooks/useSearch";
import { useGenreFilter } from "@/hooks/useGenreFilter";

import GenresFilter from "@/components/GenresFilter";
import CardList from "@/components/CardList";
import CardItem from "@/components/CardList/CardItem";
import Pagination from "@/components/Pagination";

import { getMovies, getMovieGenres } from "@/services/movies";

import { scrollToTop } from "@/utils/scrollToTop";

import "./styles.scss";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { page, setPage } = usePagination();
  const { search, setSearch } = useSearch();
  const { genreFilter, setGenreFilter } = useGenreFilter();

  const loadMovies = async () => {
    const pageToLoad = page || currentPage;

    const res = await getMovies(pageToLoad, search, genreFilter);

    if (!res) return;
    setMovies(res.data);
  };

  const loadGenres = async () => {
    const genresResponse = await getMovieGenres();

    if (!genresResponse) return;
    setGenres(genresResponse.data.genres);
  };

  const onSelectGenre = (genresIds) => {
    setSearch("");
    setSelectedGenres(genresIds);
    setGenreFilter(genresIds.join(","));
    console.log(genresIds.join(","));
  };

  const onChangePage = (p) => {
    setPage(p);
    scrollToTop();
  };

  useEffect(() => {
    setSelectedGenres(genreFilter.split(",").map(Number));
    setCurrentPage(page);
    loadMovies();
    loadGenres();
  }, [page, search, genreFilter]);

  return (
    <div className="home-page-content">
      <div className="cubos-container">
        <div className="genre-filter-wrapper">
          <GenresFilter
            genres={genres}
            selectedGenres={selectedGenres}
            onSelect={(genresIds) => onSelectGenre(genresIds)}
          />
        </div>

        <CardList>
          {movies?.results?.map((movie) => (
            <CardItem
              key={movie.id}
              linkTo={`/movie/${movie.id}`}
              title={movie.title}
              image={movie.poster_path}
            />
          ))}
        </CardList>
        <Pagination
          page={currentPage}
          total_pages={movies.total_pages}
          total_results={movies.total_results}
          onPageChange={onChangePage}
        />
      </div>
      <Link to="/fidelidade" className="fn-btn">
        Modo Fidelidade
      </Link>
    </div>
  );
}
