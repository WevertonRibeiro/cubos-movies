import { useSearchParams } from "react-router-dom";

export const useGenreFilter = () => {
  const [params, setParams] = useSearchParams();

  const genreFilter = params.get("with_genres") || "";

  const setGenreFilter = (genres) => {
    setParams({ ["with_genres"]: encodeURIComponent(genres) });
  };

  return { genreFilter, setGenreFilter };
};
