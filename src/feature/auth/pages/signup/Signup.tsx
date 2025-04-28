import BaseImage from "../../components/baseImage/BaseImage";
import SignupForm from "../../components/signupForm/SignupForm";
import styles from './signup.module.css'
import Man1 from '@/assets/imgs/Man1.png'
import Man2 from '@/assets/imgs/Man2.png'

const Signup = () => {
    return (
        <>
            <div className={styles['signup-container']}>
                <BaseImage person1={Man1} person2={Man2} />
                <div className={styles['signup-container__formContainer']}>
                    <SignupForm />
                </div>
            </div>
        </>
    )
}

export default Signup;