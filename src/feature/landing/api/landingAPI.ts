import { Job } from "@/shared/types/job"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


const fetchFeaturedJobs = async () => {
    const response = await fetch(`${API_BASE_URL}/api/jobs`)
    return getJson(response)
}
const fetchJobsByCategory = async () => {
    const response = await fetch(`${API_BASE_URL}/api/jobs`)
    return getJson(response)
}
const fetchLatestJobs = async () => {
    const response = await fetch(`${API_BASE_URL}/api/jobs`)
    return getJson(response)
}

const getJson = async (response: Response) => {
    if(response.ok) {
        console.log(response);
        
        return await response.json()
    }
    else {
        throw new Error('Failed to fetch jobs')
    }
}
export {
    fetchFeaturedJobs,
    fetchJobsByCategory,
    fetchLatestJobs
};