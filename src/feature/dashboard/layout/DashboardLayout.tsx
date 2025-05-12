import { NavLink, Outlet } from "react-router-dom";
import styles from "./dashboardLayout.module.css";
import Logo from "@/shared/components/logo/Logo"; 
const DashboardLayout = () => {
    return (
        <div className={styles['dashboard-layout']}>
            <div className={styles['dashboard-layout-sidebar']}>
                <div className={styles['dashboard-layout-button-list-container']}>
                    <Logo position="relative" />
                    <div className={styles['dashboard-layout-button-container']}>
                        
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/home">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_59_5110)">
                                    <path d="M5 12H3L12 3L21 12H19" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_59_5110">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            Dashboard
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                            <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/messages">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_59_5020)">
                                    <path d="M11.9999 21L8.3999 17.4H5.9999C5.04512 17.4 4.12945 17.0207 3.45432 16.3456C2.77919 15.6705 2.3999 14.7548 2.3999 13.8V6.6C2.3999 5.64522 2.77919 4.72955 3.45432 4.05442C4.12945 3.37928 5.04512 3 5.9999 3H17.9999C18.9547 3 19.8704 3.37928 20.5455 4.05442C21.2206 4.72955 21.5999 5.64522 21.5999 6.6V13.8C21.5999 14.7548 21.2206 15.6705 20.5455 16.3456C19.8704 17.0207 18.9547 17.4 17.9999 17.4H15.5999L11.9999 21Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.2002 7.80005H16.8002" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.2002 12.6001H14.4002" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_59_5020">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Messages
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/interview-chatbot">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8567 13.9207L20.5935 12.4645C21.504 11.3255 22 9.91734 22 8.44531C22 4.89137 19.1087 2 15.5547 2C12.0007 2 9.10939 4.89137 9.10939 8.44531C9.10939 8.68285 9.12271 8.9173 9.14786 9.14824C8.91489 9.12289 8.68032 9.10938 8.44532 9.10938C4.89138 9.10938 2.00001 12.0007 2.00001 15.5547C2.00001 17.0267 2.49606 18.4349 3.40653 19.5739L2.14333 21.0301C1.99298 21.2035 1.95763 21.4486 2.0529 21.6573C2.14817 21.8661 2.35649 22 2.58595 22H8.44532C11.9993 22 14.8906 19.1086 14.8906 15.5547C14.8906 15.3197 14.8771 15.0851 14.8518 14.8521C15.0827 14.8773 15.3172 14.8906 15.5547 14.8906H21.4141C21.6435 14.8906 21.8519 14.7567 21.9471 14.548C22.0424 14.3392 22.007 14.0941 21.8567 13.9207ZM8.44532 20.8281H3.86989L4.62478 19.9579C4.82196 19.7306 4.81489 19.3909 4.60841 19.172C3.68208 18.1897 3.17189 16.9051 3.17189 15.5547C3.17189 12.6469 5.53755 10.2812 8.44532 10.2812C8.76696 10.2812 9.08759 10.3105 9.40239 10.3683C10.032 12.3784 11.6216 13.968 13.6317 14.5976C13.6895 14.9124 13.7188 15.233 13.7188 15.5547C13.7188 18.4625 11.3531 20.8281 8.44532 20.8281ZM15.5547 13.7188C12.6469 13.7188 10.2813 11.3531 10.2813 8.44531C10.2813 5.53754 12.6469 3.17188 15.5547 3.17188C18.4625 3.17188 20.8281 5.53754 20.8281 8.44531C20.8281 9.7957 20.3179 11.0804 19.3916 12.0626C19.1851 12.2815 19.1781 12.6213 19.3752 12.8486L20.1301 13.7188H15.5547Z" fill="#25324B" stroke="#25324B" stroke-width="0.5" />
                                <path d="M15.5547 12.4297C15.8783 12.4297 16.1406 12.1674 16.1406 11.8438C16.1406 11.5201 15.8783 11.2578 15.5547 11.2578C15.2311 11.2578 14.9688 11.5201 14.9688 11.8438C14.9688 12.1674 15.2311 12.4297 15.5547 12.4297Z" fill="#25324B" stroke="#25324B" stroke-width="0.5" />
                                <path d="M15.6012 4.42235C14.4641 4.39903 13.4859 5.23118 13.3288 6.35708C13.3144 6.46005 13.3071 6.56524 13.3071 6.66985C13.3071 6.99345 13.5695 7.25579 13.8931 7.25579C14.2167 7.25579 14.479 6.99345 14.479 6.66985C14.479 6.61923 14.4825 6.56845 14.4894 6.51903C14.5635 5.98794 15.0198 5.59376 15.5555 5.59376C15.5629 5.59376 15.5702 5.59384 15.5776 5.59399C16.1385 5.60528 16.6006 6.05235 16.6296 6.61181C16.6451 6.9106 16.5406 7.19419 16.3354 7.41036C16.13 7.62673 15.8528 7.74591 15.5551 7.74591C15.2315 7.74591 14.9691 8.00825 14.9691 8.33185V10.0698C14.9691 10.3934 15.2315 10.6557 15.5551 10.6557C15.8787 10.6557 16.141 10.3934 16.141 10.0698V8.83931C16.536 8.73204 16.8998 8.51794 17.1852 8.21724C17.614 7.76567 17.8323 7.17395 17.7999 6.55106C17.7392 5.38103 16.7734 4.44599 15.6012 4.42235Z" fill="#25324B" stroke="#25324B" stroke-width="0.5" />
                                <path d="M10.3984 13.7969H6.49219C6.16859 13.7969 5.90625 14.0592 5.90625 14.3828C5.90625 14.7064 6.16859 14.9688 6.49219 14.9688H10.3984C10.722 14.9688 10.9844 14.7064 10.9844 14.3828C10.9844 14.0592 10.722 13.7969 10.3984 13.7969Z" fill="#25324B" stroke="#25324B" stroke-width="0.5" />
                                <path d="M10.3984 16.1406H6.49219C6.16859 16.1406 5.90625 16.403 5.90625 16.7266C5.90625 17.0502 6.16859 17.3125 6.49219 17.3125H10.3984C10.722 17.3125 10.9844 17.0502 10.9844 16.7266C10.9844 16.403 10.722 16.1406 10.3984 16.1406Z" fill="#25324B" stroke="#25324B" stroke-width="0.5" />
                            </svg>
                            Interview Chatbot
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/my-applications">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19L18 9.41421L12.5859 4.00011L7 4ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H12.586C13.1163 2.00011 13.6251 2.21086 14.0001 2.58589M14.0001 2.58589L19.414 7.99979C19.414 7.99975 19.414 7.99982 19.414 7.99979C19.789 8.37476 19.9999 8.88345 20 9.41379V19C20 19.7957 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7957 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM8 16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16Z" fill="#25324B" />
                                <rect x="8" y="11" width="8" height="2" rx="1" fill="#25324B" />
                                <rect x="8" y="15" width="8" height="2" rx="1" fill="#25324B" />
                            </svg>
                            My Applications
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/find-jobs">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7664" cy="11.7666" r="8.98856" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.0181 18.4851L21.5421 22" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Find Jobs
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/browse-companies">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_59_5187)">
                                    <path d="M3 21H21" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 21V7L13 3V21" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M19 21V11L13 7" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 9V9.01" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 12V12.01" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 15V15.01" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 18V18.01" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_59_5187">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Browse Companies
                        </NavLink>
                    </div>
                    <div className={styles['dashboard-layout-button-container']}>
                        <NavLink className={({isActive}) => isActive ? `${styles['dashboard-layout-button-active']} ${styles['dashboard-layout-button']}` : styles['dashboard-layout-button']} to="/dashboard/my-public-profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V7ZM12 14C10.1435 14 8.36301 14.7375 7.05025 16.0503C5.7375 17.363 5 19.1435 5 21H19C19 19.1435 18.2625 17.363 16.9497 16.0503C15.637 14.7375 13.8565 14 12 14V14Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            My Public Profile
                        </NavLink>
                    </div>
                </div>
                <div className={styles['horizontal-line']}>
                </div>
                <div className={styles['dashboard-layout-sidebar-bottom']}>
                    <h2>Settings</h2>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12V12Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Settings
                        </button>
                    <button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_59_5115)">
                                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 17V17.01" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 13.4999C11.9816 13.1753 12.0692 12.8535 12.2495 12.5829C12.4299 12.3124 12.6933 12.1078 13 11.9999C13.3759 11.8562 13.7132 11.6272 13.9856 11.3309C14.2579 11.0346 14.4577 10.6791 14.5693 10.2925C14.6809 9.90588 14.7013 9.49861 14.6287 9.10279C14.5562 8.70696 14.3928 8.33337 14.1513 8.01144C13.9099 7.6895 13.597 7.42801 13.2373 7.24754C12.8776 7.06707 12.4809 6.97256 12.0785 6.97145C11.6761 6.97033 11.2789 7.06264 10.9182 7.24111C10.5576 7.41958 10.2432 7.67933 10 7.99992" stroke="#25324B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_59_5115">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        
                        Help Center
                        </button>
                        <div className={styles['dashboard-layout-sidebar-bottom-profile']}>
                            <button>Profile</button>
                        </div>
                </div>
                
            </div>
            <div className={styles['dashboard-layout-content']}>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout;