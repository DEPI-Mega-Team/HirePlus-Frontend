import Button from "@/shared/components/button/Button";
import InputField from "@/shared/components/inputField/InputField";
import ToggleButton from "@/shared/components/toggleButton/ToggleButton";
import { Form } from "react-router";
import { UserContextType, useUser } from "@/feature/auth/context/UserContext";
import styles from "./signupForm.module.css";
import LineSeparator from "@/shared/components/lineSeparator/LineSeparator";
import googleIcon from "@/assets/icons/Google.svg";
import { Link,useSubmit, useActionData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const LoginForm = ({setError}: {setError: (error: {error: string, task: string}) => void}) => {
    const navigate = useNavigate();
    const submit = useSubmit();
    const actionData = useActionData()
    const { setAccountType, accountType } = useUser() as UserContextType;

    const handleToggle = () => {
        setAccountType((prev) => prev === 'jobseeker' ? 'company' : 'jobseeker');
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('role', accountType);
        submit(formData, { method: 'post' });
    };
    useEffect(() => {
        if(actionData?.error){
            setError({error: actionData.error, task: 'Signup'})
        }
    }, [actionData])
    return (
        <>
            <div className={styles['form__container']}>

                <ToggleButton onClick={handleToggle} text1="Job Seeker" text2="Company" />
                <p className={styles['form__greeting']}>Get More Opportunities</p>
                <Button icon={googleIcon} iconPosition="left">Sign Up With Google</Button>
                <LineSeparator text="Or Sign Up With Email" />
                <Form method="post" onSubmit={handleSubmit} className={styles['form']}>
                    {accountType === 'jobseeker' && <InputField id='fullname' label='Full Name' name="fullname" type="text" placeholder="Enter Full Name" />}
                    {accountType === 'company' && <InputField id='companyName' label='Company Name' name="companyName" type="text" placeholder="Enter Company Name" />}
                    {accountType === 'company' && <InputField id='address' label='Address' name="address" type="text" placeholder="Enter Company Address" />}
                    <InputField id='email' label='Email Address' name="email" type="email" placeholder="Enter Email Address" />
                    <InputField id='password' label='Password' name="password" type="password" placeholder="Enter Password" />
                    <Button type="submit" filled={true}>Sign Up</Button>

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