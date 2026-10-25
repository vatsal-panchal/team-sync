import AttendancePage from "../../features/employee-module/attendance/ui/pages/AttendancePage";
import MyTaskPage from "../../features/employee-module/mytask/ui/pages/MyTaskPage";
import ProfilePage from "../../features/employee-module/profile/ui/pages/ProfilePage";

// These are the pages an employee can open.
// Each path opens its matching page.
export let employeeRoutes = [
    {
        // Shows the tasks assigned to the employee.
        path: "/home/myTask",
        element: <MyTaskPage />
    },
    {
        // Shows the employee's attendance details.
        path: "/home/attendance",
        element: <AttendancePage />
    },
    {
        // Shows the employee's profile.
        path: "/home/profile",
        element: <ProfilePage />
    },
];