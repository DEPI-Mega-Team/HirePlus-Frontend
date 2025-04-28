import { Link } from "react-router-dom"
import LogoImage from "@/assets/logos/logo1.svg"
import styles from "./logo.module.css"


const Logo: React.FC = () => {    
    return  (
        <>
            <div className={styles['logo']}>
                <Link to="/">
                    <img src={LogoImage}  alt="Logo" />
                </Link>
            </div>
        </>
    )
}

export default Logo;
