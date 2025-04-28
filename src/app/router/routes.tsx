import Login from "@/feature/auth/pages/login/Login";
import Signup from "@/feature/auth/pages/signup/Signup";
import LoginAction from "@/feature/auth/services/LoginAction";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path:'/',
    Component:null,
    children:
    [
      {
        index:true,
        Component:null
      },
      {
        path:'auth',
        children:
        [
          {
            path:'login',
            Component:Login,
            action:LoginAction
          },
          {
            path:'Signup',
            Component:Signup
          }
        ]
      },
      {
        path:'signup'
      }
    ]
  },
  

])

export default router;