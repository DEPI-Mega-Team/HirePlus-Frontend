import Check1 from '@/assets/icons/Check1.svg';
import Check2 from '@/assets/icons/Check2.svg';
import styles from './checkbox.module.css';
import { useState } from 'react';


interface checkboxProps {
    id: string;
    name: string;
    value: boolean;
    setValue: (value: boolean) => void;
   
}
const Checkbox: React.FC<checkboxProps> = ({id, name, value, setValue}) => {
    return (
        <>
        <input className={styles['hidden']} type="checkbox" checked={value} onChange={() => {setValue(!value)}} name={name} id={id} />
        <img className={styles['checkbox']} onClick={() => setValue(!value)} src={value?Check1:Check2} alt="" />
        </>
    )

}

export default Checkbox;