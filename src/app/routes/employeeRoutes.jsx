import AttendancePage from "../../features/employee-module/attendance/ui/pages/AttendancePage";
import MyTaskPage from "../../features/employee-module/mytask/ui/pages/MyTaskPage";
import ProfilePage from "../../features/employee-module/profile/ui/pages/ProfilePage";

export let employeeRoutes = [
     {
        path:"/home/myTask",
        element:<MyTaskPage/>
    },
     {
        path:"/home/attendance",
        element:<AttendancePage/>
    },

     {
        path:"/home/profile",
        element:<ProfilePage/>
    },
    
]