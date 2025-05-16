import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/inputField/InputField";
import { Form } from "react-router";
import styles from "./loginForm.module.css";
import LineSeparator from "@/shared/components/lineSeparator/LineSeparator";
import googleIcon from "@/assets/icons/Google.svg";
import Checkbox from "@/shared/components/checkbox/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
const LoginForm = ({setError}: {setError: (error: {error: string, task: string}) => void}) => {
    const [checkBoxValue, setCheckBoxValue] = useState(false)
    const navigate = useNavigate()
    const actionData = useActionData()

    useEffect(() => {
        if(actionData?.error){
            setError({error: actionData.error, task: 'Login'})
        }
    }, [actionData])


    useEffect(()=> {
        console.log("actionData", actionData);
        if (actionData?.USER) {
            console.log('actionData.USER', actionData.USER);
            if (checkBoxValue) {
                localStorage.setItem('user', JSON.stringify(actionData.USER))
            }
            else {
                sessionStorage.setItem('user', JSON.stringify(actionData.USER))
            }
            navigate('/')
        }
        else if (actionData?.COMPANY) {
            console.log('actionData.COMPANY', actionData.COMPANY);
            if (checkBoxValue) {
                localStorage.setItem('company', JSON.stringify(actionData.COMPANY))
            }
            else {
                sessionStorage.setItem('company', JSON.stringify(actionData.COMPANY))
            }
            navigate('/')
        }
    },[actionData])
    return (
        <>
        <div className={styles['form__container']}>

            <p className={styles['form__greeting']}>Welcome Back</p>
            <Button icon={googleIcon} iconPosition="left">Login With Google</Button>
            <LineSeparator text="Or Login With Email"/>
            <Form method="post" className={styles['form']}>
                <InputField id='name' label='Email Address' name="email" type="email" placeholder="Enter Email Address" />
                <InputField id='email' label='Password' name="password" type="password" placeholder="Enter Password" />
                <div className={styles['form__checkbox']}>
                        <Checkbox name="rememberme" value={checkBoxValue} setValue={setCheckBoxValue} id="rem" />
                        <label className={styles['checkbox__label']} htmlFor="rem">Remember me</label>
                </div>
                <Button type="submit"  filled={true}>Login</Button>

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