import { useQuery } from "@tanstack/react-query";
import { getALLEmployee } from "../api/employeeApis";

export const useEmployee = () => {
  const { data, isPending } = useQuery({
    queryKey: ["employees"],
    queryFn: getALLEmployee,
    staleTime: 10000,
  });

  return {
    data,
    isPending,
  };
};
