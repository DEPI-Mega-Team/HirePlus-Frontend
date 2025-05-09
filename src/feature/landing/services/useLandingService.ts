const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
import { Job } from "@/shared/types/job";
import useLanding from "./useLandingAPI"
import mockJobs from '@/shared/mockData/jobs'

const landingService = async () => {

    const { getFeaturedJobs, getLatestJobs, getJobsByCategory } = useLanding();
    let featuredJobs: Job[] = []
    let latestJobs: Job[] = []
    let jobsByCategory: Job[] = []

    const retFeaturedJobs = async () => {
        if(API_BASE_URL) {
            const ret = await getFeaturedJobs();
            featuredJobs = ret; 
            return featuredJobs;
        }
        else {
            featuredJobs = mockJobs;
            return featuredJobs;
        }
    }
    const retLatestJobs = async () => {
        if(API_BASE_URL) {
            latestJobs = await getLatestJobs();
            return latestJobs;
        }
        else {
            latestJobs = mockJobs;
            return latestJobs;
        }
    }
    const retJobsByCategory = async () => {
        if(API_BASE_URL) {
            jobsByCategory = await getJobsByCategory();
            return jobsByCategory;
        }
        else {
            jobsByCategory = mockJobs;
            return jobsByCategory;
        }
    }
    return { retFeaturedJobs, retLatestJobs, retJobsByCategory }
}
export default landingService;

