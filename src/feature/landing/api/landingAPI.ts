import { Job } from "@/shared/types/job"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


const fetchFeaturedJobs = async () : Promise<Job[]> => {
    const response = await fetch(`${API_BASE_URL}/api/featured-jobs`) as Response
    return response.json()
}
const fetchJobsByCategory = async () : Promise<Job[]> => {
    const response = await fetch(`${API_BASE_URL}/api/jobs-by-category`) as Response
    return response.json()
}
const fetchLatestJobs = async () : Promise<Job[]> => {
    const response = await fetch(`${API_BASE_URL}/api/latest-jobs`) as Response
    return response.json()
}

export { fetchJobsByCategory, fetchFeaturedJobs, fetchLatestJobs };