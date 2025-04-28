import Logo from "@/shared/components/logo/Logo";
import styles from './baseImage.module.css'
import Fig1Image from "@/assets/imgs/fig1.png";
import Fig2Image from "@/assets/imgs/fig2.png";


interface baseImageProps {
    person1: string,
    person2?: string
}
const BaseImage:React.FC<baseImageProps> = ({person1, person2}) => {
    return (
        <>
            <div className={`${styles['login-container__baseImage']} d-none`}>
                <div className={styles['login-container__baseImage--logoContainer']}>
                    <Logo />
                </div>
                <div className={styles['login-container__baseImage--imgContainer']}>
                    <img className={`${styles['login-container__baseImage--img']} ${styles['img1']}`} src={person1} alt="" />

                    <img className={`${styles['login-container__baseImage--img']} ${styles['img2']}`} src={person2} alt="" />

                    <img className={`${styles['login-container__baseImage--img']} ${styles['img3']}`} src={Fig1Image} alt="" />

                    <img className={`${styles['login-container__baseImage--img']} ${styles['img4']}`} src={Fig2Image} alt="" />
                </div>

            </div>
        
        </>
    )
}

export default BaseImage ;