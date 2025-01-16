import { useState, useCallback, useMemo } from "react";

function useTableSort<T>(data: T[], columnMap: { [key: string]: string }) {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const sortData = useCallback(
    (data: T[], column: string, direction: "asc" | "desc") => {
      const sortedData = [...data].sort((a, b) => {
        const valueA = (a as any)[column];
        const valueB = (b as any)[column];

        if (column === "fullName") {
          const fullNameA = `${(a as any).firstName} ${(a as any).lastName}`;
          const fullNameB = `${(b as any).firstName} ${(b as any).lastName}`;
          return direction === "asc"
            ? fullNameA.localeCompare(fullNameB)
            : fullNameB.localeCompare(fullNameA);
        }

        if (valueA === undefined || valueA === null)
          return direction === "asc" ? 1 : -1;
        if (valueB === undefined || valueB === null)
          return direction === "asc" ? -1 : 1;

        if (valueA < valueB) return direction === "asc" ? -1 : 1;
        if (valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;
      });
      return sortedData;
    },
    []
  );

  const sortedData = useMemo(
    () => (sortColumn ? sortData(data, sortColumn, sortDirection) : data),
    [data, sortColumn, sortDirection, sortData]
  );

  const handleSort = useCallback(
    (header: string) => {
      const columnKey = columnMap[header];
      if (sortColumn === columnKey) {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      } else {
        setSortColumn(columnKey);
        setSortDirection("asc");
      }
    },
    [sortColumn, sortDirection, columnMap]
  );

  return { sortedData, handleSort, sortColumn, sortDirection };
}

export default useTableSort;
