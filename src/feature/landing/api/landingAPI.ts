
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


const fetchFeaturedJobs = async () => {
    const response = await fetch(`${API_BASE_URL}/api/job`)
    return response
}
const fetchJobsByCategory = async () => {
    const response = await fetch(`${API_BASE_URL}/api/job`)
    return response
}
const fetchLatestJobs = async () => {
    const response = await fetch(`${API_BASE_URL}/api/job`)
    return response
}

export {fetchFeaturedJobs, fetchJobsByCategory, fetchLatestJobs};