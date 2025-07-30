import { useEffect, useState } from "react";

import Pagination from "@/components/Pagination";

import api from "@/services/api";
import "./styles.scss";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const loadData = async () => {
    const res = await api.get(`/discover/movie?page=${page}&limit=10`);
    if (!res) return;
    console.log(res);
    setMovies(res.data);
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <>
      <h1>Filmes</h1>
      <ul>
        {movies?.results?.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
      <Pagination
        page={page}
        total_pages={movies.total_pages}
        total_results={movies.total_results}
        onPageChange={setPage}
      />
    </>
  );
}
