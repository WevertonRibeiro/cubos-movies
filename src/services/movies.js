import api from "@/services/api";

export const getMovies = async ({ page = 1, search, genres }) => {
  if (!search) {
    const res = await api.get("/discover/movie", {
      params: { page, ["with_genres"]: genres },
    });
    if (!res) return;
    return res;
  }

  const res = await api.get("/search/movie", {
    params: { page, query: search },
  });
  if (!res) return;
  return res;
};

export const getMovieGenres = async () => {
  const res = await api.get("/genre/movie/list");
  if (!res) return;
  return res;
};
