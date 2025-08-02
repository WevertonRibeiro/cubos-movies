import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [params, setParams] = useSearchParams();

  const search = params.get("search");

  const setSearch = (search) => {
    setParams({ search: encodeURIComponent(search) });
  };

  return { search, setSearch };
};
