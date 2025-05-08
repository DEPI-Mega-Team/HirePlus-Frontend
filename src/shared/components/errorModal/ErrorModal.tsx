import styles from './errorModal.module.css'



const ErrorModal = ({error, task}: {error?: string, task: string}) => {
    return (
        <div className={styles['error-modal']}>
            <div className={styles['error-modal-container']}>
                <h1>Error occurred in {task}</h1>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default ErrorModal;