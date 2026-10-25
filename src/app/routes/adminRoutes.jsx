import DepartmentPage from "../../features/admin-module/departments/ui/pages/DepartmentPage";
import Department from "../../features/admin-module/departments/ui/pages/DepartmentPage";
import DocumentPage from "../../features/admin-module/documents/ui/pages/DocumentPage";
import EmployeePage from "../../features/admin-module/employees/ui/pages/EmployeePage";
import TaskPage from "../../features/admin-module/tasks/ui/pages/TaskPage";

export let adminRoutes = [
    {
        path:"/home/employee",
        element:<EmployeePage/>
    },
      {
        path:"/home/department",
        element:<DepartmentPage/>
    },
      {
        path:"/home/task",
        element:<TaskPage/>
    },
      {
        path:"/home/document",
        element:<DocumentPage/>
    },
    
]