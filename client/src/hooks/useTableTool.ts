import { useState, useMemo, useEffect } from "react";

interface useTableToolProps<T> {
  data: T[];
  searchFields: (item: T) => string[];
  initialEntries?: number;
}

function useTableTool<T>({
  data,
  searchFields,
  initialEntries = 5,
}: useTableToolProps<T>) {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(initialEntries);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filteredData = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return data?.filter((item) => {
      return searchFields(item).some((field) =>
        field.toLowerCase().includes(lowerSearch)
      );
    });
  }, [data, search, searchFields]);

  const totalItems = filteredData?.length || 0;
  const totalPages = Math.ceil(totalItems / entries);

  const currentData = useMemo(() => {
    return filteredData?.slice(
      (currentPage - 1) * entries,
      currentPage * entries
    );
  }, [filteredData, currentPage, entries]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return {
    search,
    entries,
    currentPage,
    filteredData,
    totalItems,
    totalPages,
    currentData,
    setSearch,
    setEntries,
    setCurrentPage,
    handleNextPage,
    handlePreviousPage,
  };
}

export default useTableTool;
