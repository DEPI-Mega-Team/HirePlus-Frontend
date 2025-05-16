
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
import { Company } from '@/shared/types/company'
import {Job} from '@/shared/types/job'

const useLandingAPI = () => {
    const fetchFeaturedJobs = async () => {
        const response = await fetch(`${API_BASE_URL}/api/job`)
        if (response.ok) {
            if (response.headers.get('Content-Type')?.includes('json')) {
                const json = await response.json() as Job[]
                return json
            }
            else {
                throw new Error('Failed to fetch featured jobs Data is not json')
            }
        }
        else {
            throw new Error('Failed to fetch featured jobs')
        }
    }
    const fetchJobsByCategory = async () => {
        const response = await fetch(`${API_BASE_URL}/api/job`)
        if (response.ok) {
            if (response.headers.get('Content-Type')?.includes('json')) {
                const json = await response.json() as Job[]
                return json
            }
            else {
                throw new Error('Failed to fetch jobs by category Data is not json')
            }
        }
        else {
            throw new Error('Failed to fetch jobs by category')
        }
    }
    const fetchLatestJobs = async () => {
        const response = await fetch(`${API_BASE_URL}/api/job`)
        if (response.ok) {
            if (response.headers.get('Content-Type')?.includes('json')) {
                const json = await response.json() as Job[]
                return json
            }
            else {
                throw new Error('Failed to fetch latest jobs Data is not json')
            }
        }
        else {
            throw new Error('Failed to fetch latest jobs')
        }
    }
    const fetchCompanyById = async (id: number) => {
        const response = await fetch(`${API_BASE_URL}/api/Company/${id}`)
        if(response.ok)
        {
            if (response.headers.get('Content-Type')?.includes('json')) {
                const json = await response.json() as Company
                return json
            }
            else {
                throw new Error('Failed to fetch latest jobs Data is not json')
            }

        }
        else
        {
            throw new Error('Failed to fetch latest jobs')

        }
    }
    return { fetchFeaturedJobs, fetchJobsByCategory, fetchLatestJobs, fetchCompanyById };

}

export default useLandingAPI;