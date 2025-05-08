import Logo from "@/shared/components/logo/Logo";
import Tab from "../../../feature/landing/components/tab/Tab";
import styles from './header.module.css';
import Button from "@/shared/components/button/Button";
import { useNavigate, useLocation } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  const url = useLocation();
  return (
    <nav className={styles['header-nav']}>
       <div className={styles['header-nav__container']}>
          <div className={styles['header-nav__logo']}>
            <Logo position="relative" />
            <ul className={`${styles['header-tabs']} d-none`}>
              <li><Tab title="Find Jobs" isActive={url.pathname.startsWith('/') && !url.pathname.startsWith('/companies')} to="/" /></li>
              <li><Tab title="Browse Companies" isActive={url.pathname.startsWith('/companies')} to="/companies" /></li>
            </ul>
          </div>
          <div className={styles['header-nav__buttons']}>
            <Button onClick={() => navigate('/auth/login')} filled={false} >Login</Button>
            <Button onClick={() => navigate('/auth/signup')} filled={true} >Signup</Button>
          </div>

       </div>
    </nav>

  )
};

export default Header;
