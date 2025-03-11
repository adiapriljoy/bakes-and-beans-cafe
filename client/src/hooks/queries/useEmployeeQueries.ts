import { useQuery } from "@tanstack/react-query";
import { IEmployee, ISelectOption } from "../../models/interface";
import { fetchEmployee, fetchEmpSelectOptions } from "../../services/employee";

export const useFetchEmployees = () => {
  return useQuery<IEmployee[]>({
    queryKey: ["employees"],
    queryFn: () => fetchEmployee(),
  });
};

export const useFetchEmpSelectOptions = (selectType: string) => {
  return useQuery<ISelectOption[]>({
    queryKey: ["empSelectOptions", selectType],
    queryFn: () => fetchEmpSelectOptions(selectType),
  });
};
