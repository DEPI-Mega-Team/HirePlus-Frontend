import Login from "@/feature/auth/pages/login/Login";
import Signup from "@/feature/auth/pages/signup/Signup";
import LoginAction from "@/feature/auth/services/LoginAction";
import { createBrowserRouter, Navigate } from "react-router";
import LandingLayout from "@/feature/landing/layout/LandingLayout";
import Landing from "@/feature/landing/pages/Landing";
import SignupAction from "@/feature/auth/services/SignupAction";
import SearchJobs from "@/feature/search/pages/serachJobs/SearchJobs";
import SearchCompanies from "@/feature/search/pages/searchCompanies/SearchCompanies";
import BrowseCompanies from "@/feature/browseCompanies/pages/BrowseCompanies";
import NotFound from "@/feature/notFound/pages/NotFound";

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
        Component: BrowseCompanies
      },
      {
        path: 'search',
        children:
        [
          {
            index:true,
            Component: SearchJobs
          },
          {
            path: 'companies',
            Component: SearchCompanies
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
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
          action: SignupAction,
        }
        , 
        {
          path: '*',
          element: <Navigate to="/auth/login" replace/>
        }
        , 
        {
          index: true,
          element: <Navigate to="/auth/login" replace/>
        }
        
      ]
  }
  ,
  {
    path: '*',
    Component: NotFound
  }

])

export default router;