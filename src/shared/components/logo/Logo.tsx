import { Link } from "react-router-dom"
import LogoImage from "@/assets/logos/logo1.svg"
import styles from "./logo.module.css"


interface LogoProps {
    position: 'absolute' | 'relative';
}
const Logo: React.FC<LogoProps> = ({position}) => {    
    return  (
        <>
            <div className={`${styles['logo']} ${styles[position]}`}>
                <Link to="/">
                    <img src={LogoImage}  alt="Logo" />
                </Link>
            </div>
        </>
    )
}

export default Logo;
