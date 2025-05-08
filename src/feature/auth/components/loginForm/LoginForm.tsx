import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/inputField/InputField";
import ToggleButton from "@/shared/components/toggleButton/ToggleButton";
import { Form } from "react-router";
import {UserContextType, useUser} from "@/feature/auth/context/UserContext";
import styles from "./loginForm.module.css";
import LineSeparator from "@/shared/components/lineSeparator/LineSeparator";
import googleIcon from "@/assets/icons/Google.svg";
import Checkbox from "@/shared/components/checkbox/Checkbox";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSubmit, useActionData } from "react-router-dom";
const LoginForm = ({setError}: {setError: (error: {error: string, task: string}) => void}) => {

    const {setAccountType} = useUser() as UserContextType;
    const submit = useSubmit()
    const handleToggle = () => {
        setAccountType((prev) => prev === 'jobseeker' ? 'company' : 'jobseeker');
    };

    const actionData = useActionData()

    useEffect(() => {
        if(actionData?.error){
            setError({error: actionData.error, task: 'Login'})
        }
    }, [actionData])
    return (
        <>
        <div className={styles['form__container']}>

            <ToggleButton onClick={handleToggle} text1="Job Seeker" text2="Company" />
            <p className={styles['form__greeting']}>Welcome Back</p>
            <Button icon={googleIcon} iconPosition="left" label="Login With Google"/>
            <LineSeparator text="Or Login With Email"/>
            <Form method="post" className={styles['form']}>
                <InputField id='name' label='Email Address' name="email" type="email" placeholder="Enter Email Address" />
                <InputField id='email' label='Password' name="password" type="password" placeholder="Enter Password" />
                <div className={styles['form__checkbox']}>
                        <Checkbox name="rememberme" id="rem" />
                        <label className={styles['checkbox__label']} htmlFor="rem">Remember me</label>
                </div>
                <Button type="submit"  filled={true} label="Login" />

            </Form>
            <div className={styles['form__login__link']}>
                <p className={styles['form__small__para']}>Don't have an account?</p>
                <Link to='/auth/signup'>Sign Up</Link>
            </div>
        </div>
        </>
    )
}

export default LoginForm;