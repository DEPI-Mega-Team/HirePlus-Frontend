import React from "react";
import styles from "./login.module.css";
import Man2Image from "@/assets/imgs/Man2.png";
import Woman2Image from "@/assets/imgs/Woman2.png";
import LoginForm from "@/feature/auth/components/loginForm/LoginForm";
import BaseImage from "../../components/baseImage/BaseImage";
import { Link } from "react-router-dom";

const Login: React.FC  = () => {

    return (
        <>
        <div className={styles['login-container']}>
            <BaseImage person1={Man2Image} person2={Woman2Image}/>
            <div className={styles['login-container__formContainer']}>
            <LoginForm />
            </div>
            
        </div>
        </>
    )
}
export default Login;