import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const usePaginationParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page") || "1");

  const pageSize = Number(searchParams.get("pageSize") || "50");

  const setPage = useCallback(
    (page: number) => {
      searchParams.set("page", page.toString());
      setSearchParams(searchParams, {
        preventScrollReset: true,
      });
    },
    [searchParams, setSearchParams]
  );

  const setPageSize = useCallback(
    (pageSize: number) => {
      searchParams.set("pageSize", pageSize.toString());
      setSearchParams(searchParams, {
        preventScrollReset: true,
      });
    },
    [searchParams, setSearchParams]
  );

  return {
    page,
    pageSize,
    setPage,
    setPageSize,
  };
};

export default usePaginationParams;
