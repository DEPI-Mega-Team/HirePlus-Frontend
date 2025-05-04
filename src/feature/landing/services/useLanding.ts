import { Job } from "@/shared/types/common"
import { useEffect, useState } from "react"
import { fetchFeaturedJobs, fetchLatestJobs, fetchJobsByCategory } from "../api/landingAPI"

const useLanding = () => {
    const [featuredJobs, setFeaturedJobs] = useState<Job[]>([])
    const [latestJobs, setLatestJobs] = useState<Job[]>([])
    const [jobsByCategory, setJobsByCategory] = useState<Job[]>([])

    const getFeaturedJobs = async () => {
        const response = await fetchFeaturedJobs()
        setFeaturedJobs(response)
    }
    const getLatestJobs = async () => {
        const response = await fetchLatestJobs()
        setLatestJobs(response)
    }
    const getJobsByCategory = async () => {
        const response = await fetchJobsByCategory()
        setJobsByCategory(response)
    }
    useEffect(() => {
        getFeaturedJobs()
        getLatestJobs()
        getJobsByCategory()
    }, [])
    return { featuredJobs, latestJobs, jobsByCategory }
}
export default useLanding;
