import Logo from "@/shared/components/logo/Logo";
import Tab from "../../../feature/landing/components/tab/Tab";
import styles from './header.module.css';
import Button from "@/shared/components/button/Button";
import { useNavigate, useLocation } from "react-router"; 
import profileIcon from "@/assets/icons/User.svg";
import useUserData from "@/shared/hooks/useUserData";
import { useState } from "react";
import useLogout from "@/shared/hooks/useLogout";
const Header = () => {
  const navigate = useNavigate();
  const url = useLocation();
  const user = useUserData()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const logout = useLogout();

  const handleDashboardClick = () => {
    navigate('/dashboard')
  }

  const handleJobClick = (jobId: string) => {
    navigate(`/job/${jobId}`)
  }
  
  return (
    <nav className={styles['header-nav']}>
       <div className={styles['header-nav__container']}>
          <div className={styles['header-nav__logo']}>
            <Logo position="relative" />
            <ul className={`${styles['header-tabs']} d-none`}>
              <li><Tab title="Find Jobs" isActive={url.pathname.startsWith('/') && !url.pathname.includes('companies')} to="/" /></li>
              <li><Tab title="Browse Companies" isActive={url.pathname.includes('companies')} to="/companies" /></li>
            </ul>
          </div>
          {
            user ? (
            <>
              <div className={styles['header-nav__user-icon']}>
                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className={`${styles['header-nav__user-icon--button']}`}><img src={profileIcon} alt="profile" /></button>
                <div className={`${styles['header-nav__user']} ${isUserMenuOpen ? styles['header-nav__user--active'] : ''}`} >
                  <p>{user.email}</p>
                  <button className={styles['header-nav__user-button']} onClick={handleDashboardClick}>Dashboard</button>
                  <button className={styles['header-nav__user-button']}>Profile</button>
                  <button className={styles['header-nav__user-button']} onClick={logout}>Logout</button>
              </div>
              </div>
              </>
            ) : (
              <div className={styles['header-nav__buttons']}>
                <Button onClick={() => navigate('/auth/login')} filled={false} >Login</Button>
                <Button onClick={() => navigate('/auth/signup')} filled={true} >Signup</Button>
              </div>
            )
          }

       </div>
    </nav>

  )
};

export default Header;
