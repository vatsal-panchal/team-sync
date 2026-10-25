import ChatPage from "../../features/chats/ui/pages/ChatPage";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import SettingPage from "../../features/settings/ui/pages/SettingPage";

// These pages are shared by both admin and employee.
// Both can open these pages after logging in.
export let commonRoutes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "chat",
    element: <ChatPage />,
  },
  {
    path: "setting",
    element: <SettingPage />,
  },
];
