import { Download, UserPlus } from "lucide-react";
import Button from "../Button";

const EmployeeHeader = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
          Employee Directory
        </h1>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Manage your organization's workforce and roles.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" icon={<Download size={16} />}>
          Export
        </Button>

        <Button icon={<UserPlus size={16} />}>Add Employee</Button>
      </div>
    </div>
  );
};

export default EmployeeHeader;