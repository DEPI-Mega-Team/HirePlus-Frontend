import {MouseEvent, useRef, useState } from "react";
import styles from "./toggleButton.module.css";


interface ToggleButtonProps {   
    text1: string;
    text2: string;
    onClick: () => void;
}


const ToggleButton:React.FC<ToggleButtonProps> = ({text1, text2, onClick}) => {
    const [toggledButton, setToggledButton] = useState<'button1'|'button2'>('button1');
    const button1 = useRef<HTMLButtonElement | null>(null)
    const button2 = useRef<HTMLButtonElement | null>(null)
    const onToggle = (e:MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault()
        if(e.currentTarget.id === 'b1' && toggledButton !== 'button1') {
            setToggledButton('button1');
            button1.current!.classList.add(`${styles['toEnabled']}`)
            button2.current!.classList.add(`${styles['toDisabled']}`)

            button2.current!.classList.remove(`${styles['toEnabled']}`)
            button1.current!.classList.remove(`${styles['toDisabled']}`)
            onClick();
        }
        else if(e.currentTarget.id === 'b2' && toggledButton !== 'button2') {
            setToggledButton('button2');
            button2.current!.classList.add(`${styles['toEnabled']}`)
            button1.current!.classList.add(`${styles['toDisabled']}`)

            button1.current!.classList.remove(`${styles['toEnabled']}`)
            button2.current!.classList.remove(`${styles['toDisabled']}`)

            onClick();
        }
    }
    return (
        <div className={styles['toggle-button']}>
            <button ref={button1} type="button" className={`${styles['button']} ${styles['toggle-button__text1']}`} id='b1' onClick={onToggle}>
                {text1}
            </button>
            <button ref={button2} type="button" className={`${styles['button']} ${styles['toggle-button__text2']}`} id='b2' onClick={onToggle}>
                {text2}
            </button>
        </div>
        
    );
}
export default ToggleButton;