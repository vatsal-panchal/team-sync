import ChatPage from "../../features/chats/ui/pages/ChatPage";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import SettingPage from "../../features/settings/ui/pages/SettingPage";


export let commonRoutes  = [
    {
        path:"",
        element:<HomePage/>
    },{
        path:"chat",
        element:<ChatPage/>
    },
    {
        path:"setting",
        element:<SettingPage/>
    }
]