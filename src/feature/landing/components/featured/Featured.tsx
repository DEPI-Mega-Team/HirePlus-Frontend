import styles from './featured.module.css'
import JobCard from '@/feature/landing/components/jobCard/JobCard'
import landingService from '../../services/useLandingService'

const Featured = () => {
    const { featuredJobs } = landingService();
    return (
        <>
        <div className={styles['featured']}>
            <div className={styles['featured-container']}>
                <h1 className={styles['featured-title']}>Featured Jobs</h1>
                <div className={styles['job-card-container']}>
                        {
                            featuredJobs.map((job) => (
                                <JobCard key={job.id} {...job} />
                            ))
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Featured;