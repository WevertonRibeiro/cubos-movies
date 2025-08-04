import { useSearchParams } from "react-router-dom";

export const usePagination = (deafultPage = 1) => {
  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get("page")) || deafultPage;

  const allParams = Object.fromEntries(params.entries());

  const setPage = (page) => {
    setParams({ ...allParams, page: encodeURIComponent(page) });
  };

  return { page, setPage };
};
