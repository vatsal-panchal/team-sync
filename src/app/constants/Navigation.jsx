import {
  ChartArea,
  LayoutDashboard,
  List,
  Presentation,
  Settings,
  UserRound,
  Users,
  Building2,
  ClipboardList,
  FileText,
} from "lucide-react";

// Pages that an employee can open.
export let employeeNavigation = [
  { path: "/home", title: "Dashboard", Icon: LayoutDashboard },
  { path: "/home/myTask", title: "MyTask", Icon: List },
  { path: "/home/chat", title: "Chats", Icon: ChartArea },
  { path: "/home/attendance", title: "Attendance", Icon: Presentation },
  { path: "/home/profile", title: "Profile", Icon: UserRound },
  { path: "/home/setting", title: "Settings", Icon: Settings },
];

// Pages that an admin can open.
export let adminNavigation = [
  { path: "/home", title: "Dashboard", Icon: LayoutDashboard },
  { path: "/home/employee", title: "Employees", Icon: Users },
  { path: "/home/department", title: "Departments", Icon: Building2 },
  { path: "/home/task", title: "Tasks", Icon: ClipboardList },
  { path: "/home/document", title: "Documents", Icon: FileText },
  { path: "/home/chat", title: "Chats", Icon: ChartArea },
  { path: "/home/setting", title: "Settings", Icon: Settings },
];
