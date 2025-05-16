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
import Dashboard from "@/feature/dashboard/pages/Dashboard/Dashboard";
import DashboardInterviewChatbot from "@/feature/dashboard/pages/InterviewChatbot/DashboardInterviewChatbot";
import MyApplications from "@/feature/dashboard/pages/MyApplications/MyApplications";
import FindJobs from "@/feature/dashboard/pages/FindJobs/FindJobs";
import DashboardJobDescription from "@/feature/dashboard/pages/FindJobs/JobDescription/DashboardJobDescription";
import DashboardBrowseCompanies from "@/feature/dashboard/pages/BrowseCompanies/DashboardBrowseCompanies";
import Profile from "@/feature/dashboard/pages/Profile/Profile";
import landingLoader from "@/feature/landing/services/landingLoader";
import dashboardLoader from "@/feature/dashboard/servieces/dashboardLoader";
import Settings from "@/feature/dashboard/pages/Settings/Settings";
import MyProfile from "@/feature/dashboard/pages/Settings/components/my-profile/MyProfile";
import LoginDetails from "@/feature/dashboard/pages/Settings/components/login-detials/LoginDetails";
import Messages from "@/feature/dashboard/pages/Messages/Messages";
import MessagesChat from "@/feature/dashboard/pages/Messages/MessagesChat/MessagesChat";
import logoutLoader from "@/feature/dashboard/servieces/logoutLoader";
import Admin from "@/feature/admin/Admin";
import CompanyDashboard from "@/feature/companyDashboard/pages/CompanyDashboard";
import CompanyDashboardJobPost from "@/feature/companyDashboard/pages/CompanyDashboardJobPost";

const router = createBrowserRouter([
  {
    path:'/',
    Component:LandingLayout,
    loader:landingLoader ,
    children:
    [
      {
        index:true,
        Component: Landing
      },
      {
        path: 'admin',
        Component: Admin
      },
      {
        path: 'logout',
        loader: logoutLoader

      },
      {
        path: 'company',
        children: [
          {
            index: true,
            element: <Navigate to='/company/dashboard/'/>
          },
          {
            path:'dashboard',
            Component: CompanyDashboard,
            children: [ 
              {
                index: true, 
                Component: null
              },
              {

                path: 'job-post',
                Component: CompanyDashboardJobPost
              }
            ]
          }
        ]

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
          }, 
          {
            path: 'jobs',
            Component: SearchJobs
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
    loader: dashboardLoader,
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
        Component: Messages,
        children: [
          {
            path:':id',
            Component: MessagesChat
          }
        ]
      },
      {
        path: 'interview-chatbot',
        Component: DashboardInterviewChatbot
      },
      {
        path: 'my-applications',
        Component: MyApplications
      },
      {
        path: 'find-jobs',
        children: [
          {
            index: true,
            Component: FindJobs
          },
          {
            path: ':id',
            Component: DashboardJobDescription
          }
        ]
      },
      {
        path: 'settings',
        Component: Settings,
        children: [
          {
            index: true, 
            element: <Navigate to='/dashboard/settings/my-profile' />
          },
          {
            path: 'my-profile',
            Component: MyProfile
          },
          {
            path: 'login-details',
            Component: LoginDetails
          }
        ]

      },
      {
        path: 'browse-companies',
        Component: DashboardBrowseCompanies
      },
      {
        path: 'profile',
        Component: Profile
      }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }

])

export default router;