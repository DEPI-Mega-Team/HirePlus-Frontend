import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/inputField/InputField";
import ToggleButton from "@/shared/components/toggleButton/ToggleButton";
import { Form } from "react-router";
import { UserContextType, useUser } from "@/feature/auth/context/UserContext";
import styles from "./signupForm.module.css";
import LineSeparator from "@/shared/components/lineSeparator/LineSeparator";
import googleIcon from "@/assets/icons/Google.svg";
import { Link } from "react-router-dom";
const LoginForm = () => {

    const { setAccountType } = useUser() as UserContextType;

    const handleToggle = () => {
        setAccountType((prev) => prev === 'jobseeker' ? 'company' : 'jobseeker');
    };
    return (
        <>
            <div className={styles['form__container']}>

                <ToggleButton onClick={handleToggle} text1="Job Seeker" text2="Company" />
                <p className={styles['form__greeting']}>Get More Opportunities</p>
                <Button icon={googleIcon} iconPosition="left" label="Sign Up With Google" />
                <LineSeparator text="Or Sign Up With Email" />
                <Form method="post" className={styles['form']}>
                    <InputField id='fullname' label='Full Name' name="fullname" type="text" placeholder="Enter Full Name" />
                    <InputField id='name' label='Email Address' name="email" type="email" placeholder="Enter Email Address" />
                    <InputField id='email' label='Password' name="password" type="password" placeholder="Enter Password" />
                    <Button type="submit" filled={true} label="Sign Up" />

                </Form>
                <div className={styles['form__signup__link']}>
                    <p className={styles['form__small__para']}>Already have an account?</p>
                    <Link to='/auth/login'>Login</Link>
                </div>
            </div>
        </>
    )
}

export default LoginForm;