const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
import { Job } from "@/shared/types/job";
import useLandingAPI from "../api/landingAPI"
import mockJobs from '@/shared/mockData/jobs'

const landingService = async () => {
    
    const {fetchFeaturedJobs, fetchJobsByCategory, fetchLatestJobs, fetchCompanyById } = useLandingAPI();
    
    let featuredJobs: Job[] = []
    let latestJobs: Job[] = []
    let jobsByCategory: Job[] = []

    const getFeaturedJobs = async () => {
        if(API_BASE_URL) {
            const ret = await fetchFeaturedJobs();
            featuredJobs = ret; 
            return featuredJobs;
        }
        else {
            featuredJobs = mockJobs;
            return featuredJobs;
        }
    }
    const getLatestJobs = async () => {
        if(API_BASE_URL) {
            latestJobs = await fetchLatestJobs();
            return latestJobs;
        }
        else {
            latestJobs = mockJobs;
            return latestJobs;
        }
    }
    const getJobsByCategory = async () => {
        if(API_BASE_URL) {
            jobsByCategory = await fetchJobsByCategory();
            return jobsByCategory;
        }
        else {
            jobsByCategory = mockJobs;
            return jobsByCategory;
        }
    }
    const getCompanyById = async (id: number) => {
        const company = await fetchCompanyById(id);
        if(company)
            return company
        else
            throw new Error('returned company is undefiend or null')
    }
    return { getFeaturedJobs, getLatestJobs, getJobsByCategory, getCompanyById }
}
export default landingService;

