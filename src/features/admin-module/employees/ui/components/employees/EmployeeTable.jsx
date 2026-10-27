import EmployeeRow from "./EmployeeRow";

const th =
  "px-5 py-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]";

const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px]">
        <thead className="bg-[var(--bg-main)]">
          <tr className="text-left">
            <th className={th}>Profile</th>
            <th className={th}>Role</th>
            <th className={th}>Department</th>
            <th className={th}>Status</th>
            <th className={th}>Joined Date</th>
            <th className={th}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <EmployeeRow key={employee._id} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;