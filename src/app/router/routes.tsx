import Login from "@/feature/auth/pages/login/Login";
import Signup from "@/feature/auth/pages/signup/Signup";
import LoginAction from "@/feature/auth/services/LoginAction";
import { createBrowserRouter } from "react-router";
import LandingLayout from "@/feature/landing/layout/LandingLayout";
import Landing from "@/feature/landing/pages/Landing";
import SignupAction from "@/feature/auth/services/SignupAction";
const router = createBrowserRouter([
  {
    path:'/',
    Component:LandingLayout,
    children:
    [
      {
        index:true,
        Component: Landing
      },
      {
        path: 'companies',
        Component: null
      }
    ]
  },
  {
    path: '/auth',
    children:
      [
        {
          path: 'login',
          Component: Login,
          action: LoginAction
        },
        {
          path: 'signup',
          Component: Signup,
          action: SignupAction
        }
      ]
  }
  ,
  {
    path: '*',
    element: <div>Not Found</div>
  }

])

export default router;