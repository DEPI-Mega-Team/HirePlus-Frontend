import Login from "@/feature/auth/pages/login/Login";
import Signup from "@/feature/auth/pages/signup/Signup";
import LoginAction from "@/feature/auth/services/LoginAction";
import { createBrowserRouter, Navigate, useLoaderData } from "react-router";
import LandingLayout from "@/feature/landing/layout/LandingLayout";
import Landing from "@/feature/landing/pages/Landing";
import SignupAction from "@/feature/auth/services/signupAction";
import SearchJobs from "@/feature/search/pages/serachJobs/SearchJobs";
import SearchCompanies from "@/feature/search/pages/searchCompanies/SearchCompanies";
import BrowseCompanies from "@/feature/browseCompanies/pages/BrowseCompanies";
import NotFound from "@/feature/notFound/pages/NotFound";
import JobDescription from "@/feature/jobDescription/pages/JobDescription";
import CompanyProfile from "@/feature/companyProfile/pages/CompanyProfile";
import loginLoader from "@/feature/auth/services/loginLoader";
import signupLoader from "@/feature/auth/services/signupLoader";
import DashboardLayout from "@/feature/dashboard/layout/DashboardLayout";
import Dashboard from "@/feature/dashboard/pages/Dashboard";
import DashboardInterviewChatbot from "@/feature/dashboard/pages/DashboardInterviewChatbot";

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
        children:
        [
          {
            index:true,
            Component: BrowseCompanies
          },
          {
            path: ':id',
            Component: CompanyProfile
          }
        ]
      },
      {
        path: 'job',
        children:[
          {
            index:true,
            element: <Navigate to="/" replace/>
          },
          {
            path: ':id',
            Component: JobDescription
          }
        ]
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
          loader: loginLoader,
          action: LoginAction
        },
        {
          path: 'signup',
          Component: Signup,
          loader: signupLoader,
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
  },
  {
    path: 'dashboard',
    Component: DashboardLayout,
    children:
    [
      {
        index:true,
        element: <Navigate to="/dashboard/home" replace/>
      },
      {
        path: 'home',
        Component: Dashboard
      },
      {
        path: 'messages',
        Component: null
      },
      {
        path: 'interview-chatbot',
        Component: DashboardInterviewChatbot
      },
      {
        path: 'my-applications',
        Component: null
      },
      {
        path: 'find-jobs',
        Component: null
      },
      {
        path: 'browse-companies',
        Component: null
      },
      {
        path: 'my-public-profile',
        Component: null
      }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }

])

export default router;