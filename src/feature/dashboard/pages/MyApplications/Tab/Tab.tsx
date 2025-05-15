import { useState } from 'react'
import styles from './tab.module.css'


interface TabProps {
    children: React.ReactNode,
    active?: boolean
}
const Tab = ({children, active = false}: TabProps) => {
    return (
        <div className={`${styles['tab']} `}>
            {children}
            <span className={`${styles['underline']} ${active ? styles['active'] : ''}`}></span>
        </div>
    )
}

export default Tab;

