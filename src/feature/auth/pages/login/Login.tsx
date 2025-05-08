import React, { useState } from "react";
import styles from "./login.module.css";
import Man2Image from "@/assets/imgs/Man2.png";
import Woman2Image from "@/assets/imgs/Woman2.png";
import LoginForm from "@/feature/auth/components/loginForm/LoginForm";
import BaseImage from "../../components/baseImage/BaseImage";
import { Link } from "react-router-dom";
import ErrorModal from "@/shared/components/errorModal/ErrorModal";
const Login: React.FC  = () => {
    const [error, setError] = useState<{error: string, task: string}>({error: '', task: ''})
    return (
        <>
        {error.error && 
        <div onClick={() => setError({error: '', task: ''})}>
        <ErrorModal error={error.error} task={error.task}/>
        </div>
        }
        <div className={styles['login-container']}>
            <BaseImage person1={Man2Image} person2={Woman2Image}/>
            <div className={styles['login-container__formContainer']}>
            <LoginForm setError={setError} />
            </div>
            
        </div>
        </>
    )
}
export default Login;