
import { MouseEventHandler } from 'react';
import styles from './button.module.css';

interface buttonProps {
    children: React.ReactNode;
    onClick?: (e?:any) => any;
    disabled?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right';
    type?: 'button' | 'submit' | 'reset';
    filled?: boolean;

}
    const Button:React.FC<buttonProps> = ({children,type, icon, iconPosition = 'left', disabled, filled = false, onClick}) => {
    return (
        <>
        <button disabled={disabled} type={type} className={`${styles['button']} ${filled && styles['filled']}`} onClick={onClick}>
            {icon && iconPosition === 'left' && <img src={icon} alt="" className={styles['icon']}/>}
            {children}
            {icon && iconPosition === 'right' && <img src={icon} alt="" className={styles['icon']} />}
         </button>
        </>
    );
}

export default Button;