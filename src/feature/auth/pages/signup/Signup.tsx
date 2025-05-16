import ErrorModal from "@/shared/components/errorModal/ErrorModal";
import BaseImage from "../../components/baseImage/BaseImage";
import SignupForm from "../../components/signupForm/SignupForm";
import styles from './signup.module.css'
import Man1 from '@/assets/imgs/Man1.png'
import Man2 from '@/assets/imgs/Man2.png'
import { useState } from "react";

const Signup = () => {
    const [error, setError] = useState<{ error: string, task: string }>({ error: '', task: '' })
    return (
        <>
            {error.error &&
                <div onClick={() => setError({ error: '', task: '' })}>
                    <ErrorModal error={error.error} task={error.task} />
                </div>
            }
            <div className={styles['signup-container']}>
                <BaseImage person1={Man1} person2={Man2} />
                <div className={styles['signup-container__formContainer']}>
                    <SignupForm setError={setError} />
                </div>
            </div>
        </>
    )
}

export default Signup;