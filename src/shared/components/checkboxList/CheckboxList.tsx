import Checkbox from "../checkbox/Checkbox";
import dropdownArrow from "@/assets/icons/ArrowDown.svg";
import styles from "./checkboxList.module.css";
import { useState, useRef } from "react";
interface CheckboxListProps {
    title: string;
    options: string[];
}

const CheckboxList = ({title, options}: CheckboxListProps) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleArrowClick = () => {
        setIsOpen(!isOpen);
       
    }
    return (
        <>
        <div className={styles['checkboxList-container']}>
            <div onClick={handleArrowClick} className={styles['checkboxList-header']}>
                <h3>{title}</h3>
                <span className={`${styles['checkboxList-header-arrow']} ${isOpen ? styles['toggle-rotate'] : ''}`}><img className={styles['checkboxList-header-arrow-icon']} src={dropdownArrow} alt="dropdown arrow" /></span>
            </div>
                <div className={`${styles['checkboxList-options']} ${isOpen ? '' : styles['toggle-open']}` }>
                {options.map((option, idx) => (
                    <div key={idx} className={styles['checkboxList-option']}>
                        <Checkbox id={`CheckboxList-${option}`} name={option} />
                        <label htmlFor={`CheckboxList-${option}`}>{option}</label>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CheckboxList;