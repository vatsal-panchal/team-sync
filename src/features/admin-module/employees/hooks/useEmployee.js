import { useQuery } from "@tanstack/react-query";
import { getALLEmployee } from "../api/employeeApis";

export const useEmployee = () => {
  const { data, isPending } = useQuery({
    queryKey: ["employees"],
    queryFn: getALLEmployee,
    staleTime: 10000,
  });


  const handlePageChange = (newPage) => {
  setPage(newPage);

  // Fetch next page API here
  // getEmployees(newPage)
};


  return {
    data,
    isPending,
    handlePageChange
  };
};
