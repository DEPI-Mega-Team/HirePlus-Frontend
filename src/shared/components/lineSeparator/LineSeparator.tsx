import styles from './lineSeparator.module.css';

interface LineSeparatorProps {
    text?: string;
}
const LineSeparator:React.FC<LineSeparatorProps> = ({text}) => {
    return (
        <div className={styles['line-separator']}>
            <div className={styles['line']}></div>
            <div className={styles['text']}>{text}</div>
        </div>
    )
}
export default LineSeparator;