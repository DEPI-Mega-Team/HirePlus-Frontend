import { Outlet } from "react-router";
import Header from "../../../shared/components/header/Header";
import Footer from "../../../shared/components/footer/Footer";
import styles from './landingLayout.module.css';
const LandingLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
};

export default LandingLayout;
