import JobList from "../jobList/JobList";
import landingService from "../../services/useLandingService";
import styles from './latest.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { Job } from "@/shared/types/job";
import { useNavigate } from "react-router-dom";


const Latest = () => {
    const [latestJobs, setLatestJobs] = useState<Job[]>([])
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const { getLatestJobs } = await landingService();
            const latestJobs = await getLatestJobs();
            setLatestJobs(latestJobs)
            console.log('latestJobs',latestJobs);
        })()
    }, [])


    return (
        <div className={styles['latest']}>
            <div className={styles['latest-container']}>


                <h1 className={styles['latest-title']}>Latest Jobs</h1>
                <div className={styles['latest-jobs-container']}>
                {
                    latestJobs.map((job) => (
                        <JobList key={job.jobId} {...job} />
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Latest;