import { inputFieldProps } from "../../types/inputField"
import styles from './inputField.module.css'

const InputField:React.FC<inputFieldProps> = ({placeholder, name, type, value, label, id}) => {
    return (
        <>
            <div className={styles['inputFieldContainer']}>
                {label && <label htmlFor={name} className={styles['label']}>{label}</label>}
                <input className={styles['inputField']} type={type} id={id}name={name} value={value} placeholder={placeholder}/>
            </div>
        </>
    )
}

export default InputField