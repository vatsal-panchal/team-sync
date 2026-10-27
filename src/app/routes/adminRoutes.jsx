import DepartmentPage from "../../features/admin-module/departments/ui/pages/DepartmentPage";
import DocumentPage from "../../features/admin-module/documents/ui/pages/DocumentPage";
import AddEmployee from "../../features/admin-module/employees/ui/pages/AddEmployee";
import EmployeePage from "../../features/admin-module/employees/ui/pages/EmployeePage";
import TaskPage from "../../features/admin-module/tasks/ui/pages/TaskPage";

// All pages that an admin can open.
export let adminRoutes = [
    {
        path: "/home/employee",
        element: <EmployeePage />,
        children:[
            {
                path:"add-employee",
                element:<AddEmployee/>
            }
        ]
    },
    {
        path: "/home/department",
        element: <DepartmentPage />
    },
    {
        path: "/home/task",
        element: <TaskPage />
    },
    {
        path: "/home/document",
        element: <DocumentPage />
    },
];