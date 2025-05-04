import styles from './label.module.css'


interface LabelProps {
    text: string;

}


const Label:React.FC<LabelProps> = ({ text }) => {
    return (
        <div className={styles['label']}>
            <p>{text}</p>
        </div>
    )
}

export default Label;