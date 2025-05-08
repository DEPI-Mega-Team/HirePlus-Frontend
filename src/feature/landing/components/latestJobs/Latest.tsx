import JobList from "../jobList/JobList";
import landingService from "../../services/useLandingService";
import styles from './latest.module.css';



const Latest = () => {
    const { latestJobs } = landingService();
    return (
        <div className={styles['latest']}>
            <div className={styles['latest-container']}>

            
                <h1 className={styles['latest-title']}>Latest Jobs</h1>
                <div className={styles['latest-jobs-container']}>
                {
                    latestJobs.map((job) => (
                        <JobList key={job.id} {...job} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Latest;