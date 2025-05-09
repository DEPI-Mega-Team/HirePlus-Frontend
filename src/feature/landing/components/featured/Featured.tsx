import styles from './featured.module.css'
import JobCard from '@/feature/landing/components/jobCard/JobCard'
import landingService from '../../services/useLandingService'
import { useEffect, useState } from 'react';
import { Job } from '@/shared/types/job';

const Featured = () => {
    const [featuredJobs, setFeaturedJobs] = useState<Job[]>([])
    useEffect(() => {
        (async () => {
            const { retFeaturedJobs } = await landingService();
            const featuredJobs = await retFeaturedJobs();
            setFeaturedJobs(featuredJobs)
        })()
    }, [])
    return (
        <>
        <div className={styles['featured']}>
            <div className={styles['featured-container']}>
                <h1 className={styles['featured-title']}>Featured Jobs</h1>
                <div className={styles['job-card-container']}>
                        {
                            featuredJobs.map((job) => (
                                <JobCard key={job.jobId} {...job} />
                            ))
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Featured;