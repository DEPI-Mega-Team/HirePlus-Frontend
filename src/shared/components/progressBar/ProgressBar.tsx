import styles from './progressBar.module.css';

const ProgressBar = ({progress}: {progress: number}) => {
    return (
        <div className={styles['progress-bar-container']}>
            <div className={styles['progress-bar-fill']} style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar;