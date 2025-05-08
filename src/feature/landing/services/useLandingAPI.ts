import { Job } from "@/shared/types/job"
import { useEffect, useState } from "react"
import { fetchFeaturedJobs, fetchLatestJobs, fetchJobsByCategory } from "../api/landingAPI"

const useLanding = () => {
    const [featuredJobs, setFeaturedJobs] = useState<Job[]>([])
    const [latestJobs, setLatestJobs] = useState<Job[]>([])
    const [jobsByCategory, setJobsByCategory] = useState<Job[]>([])

    const getFeaturedJobs = async () => {
        const data = await fetchFeaturedJobs()
        
        setFeaturedJobs(data)
    }
    const getLatestJobs = async () => {
        const data = await fetchLatestJobs()
        setLatestJobs(data)
    }
    const getJobsByCategory = async () => {
        const data = await fetchJobsByCategory()
        setJobsByCategory(data)
    }
    useEffect(() => {
        getFeaturedJobs()
        getLatestJobs()
        getJobsByCategory()
    }, [])
    return { featuredJobs, latestJobs, jobsByCategory }
}
export default useLanding;
