import { NavLink, Outlet } from "react-router-dom";
import styles from "./dashboardLayout.module.css";
import Logo from "@/shared/components/logo/Logo";
import HomeIcon from "@/assets/icons/Home.svg";
import MessagesIcon from "@/assets/icons/Messages.svg";
import InterviewChatbotIcon from "@/assets/icons/Interview.svg";
import MyApplicationsIcon from "@/assets/icons/File.svg";
import FindJobsIcon from "@/assets/icons/Search.svg";
import MyPublicProfileIcon from "@/assets/icons/User.svg";
import BrowseCompaniesIcon from "@/assets/icons/Company.svg";
const DashboardLayout = () => {
    return (
        <div className={styles['dashboard-layout']}>
            <div className={styles['dashboard-layout-sidebar']}>
                <div className={styles['dashboard-layout-button-list-container']}>
                    <Logo position="relative" />
                    <div className={styles['dashboard-layout-button-container']}>
                        
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/home">
                            <img src={HomeIcon} alt="Home" />
                            Dashboard
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                            <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/messages">
                                <img src={MessagesIcon} alt="Messages" />
                            Messages
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/interview-chatbot">
                            <img src={InterviewChatbotIcon} alt="Interview Chatbot" />
                            Interview Chatbot
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/my-applications">
                            <img src={MyApplicationsIcon} alt="My Applications" />
                            My Applications
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/find-jobs">
                            <img src={FindJobsIcon} alt="Find Jobs" />
                            Find Jobs
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/browse-companies">
                            <img src={BrowseCompaniesIcon} alt="Browse Companies" />
                            Browse Companies
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/my-public-profile">
                            <img src={MyPublicProfileIcon} alt="My Public Profile" />
                            My Public Profile
                        </NavLink>
                    </div>
                </div>
                <div>
                    <button>Settings</button>
                    <button>Help Center</button>
                </div>
                <div>
                    <button>Profile</button>
                </div>
            </div>
            <div className={styles['dashboard-layout-content']}>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout;