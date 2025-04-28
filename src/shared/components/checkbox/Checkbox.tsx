import Check1 from '@/assets/icons/Check1.svg';
import Check2 from '@/assets/icons/Check2.svg';
import styles from './checkbox.module.css';
import { useState } from 'react';


interface checkboxProps {
    id: string;
    name: string;
   
}
const Checkbox: React.FC<checkboxProps> = ({id, name}) => {
    const [checked, setChecked] = useState(false);
    return (
        <>
        <input className={styles['hidden']} type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}} name={name} id={id} />
        <img className={styles['checkbox']} onClick={() => setChecked(!checked)} src={checked?Check1:Check2} alt="" />
        </>
    )

}

export default Checkbox;