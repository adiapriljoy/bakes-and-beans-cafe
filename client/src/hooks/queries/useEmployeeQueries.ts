import { useQuery } from "@tanstack/react-query";
import { IEmployee } from "../../models/interface";
import { fetchEmployee } from "../../services/employee";

export const useFetchEmployees = () => {
  return useQuery<IEmployee[]>({
    queryKey: ["employees"],
    queryFn: () => fetchEmployee(),
  });
};
