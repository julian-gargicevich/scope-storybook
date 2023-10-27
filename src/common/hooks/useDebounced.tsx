import { useEffect, useState } from "react";

const useDebounced = (search: string, delay: number) => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [search, delay]);

  return debouncedSearch;
};

export default useDebounced;
