import React from "react";
import { useEmployee } from "../../hooks/useEmployee";
import EmployeeHeader from "../components/employees/EmployeeHeader";
import EmployeeStats from "../components/employees/EmployeeStats";
import SearchFilterBar from "../components/employees/SearchFilterBar";
import EmployeeTable from "../components/employees/EmployeeTable";
import Pagination from "../components/employees/Pagination";

const EmployeePage = () => {
  let { data, isPending ,handlePageChange} = useEmployee();

  if (isPending)
    return (
      <p className="text-sm text-[var(--text-secondary)]">loading employees</p>
    );


    console.log(data);
    
  return (
    <div className="space-y-6">
      <EmployeeHeader />

      <EmployeeStats employees={data?.employees} />

      <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
        <SearchFilterBar />

        <EmployeeTable employees={data?.employees} />

         <Pagination
            pagination={data?.pagination}
            onPageChange={handlePageChange}
          />
      </div>
    </div>
  );
};

export default EmployeePage;