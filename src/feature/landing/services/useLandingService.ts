const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
import { Job } from "@/shared/types/job";
import useLanding from "./useLandingAPI"
import mockJobs from '@/shared/mockData/jobs'

const landingService = () => {

    let featuredJobs: Job[] = []
    let latestJobs: Job[] = []
    let jobsByCategory: Job[] = []
    if(API_BASE_URL) 
    {
        featuredJobs = useLanding().featuredJobs;
        latestJobs = useLanding().latestJobs;
        jobsByCategory = useLanding().jobsByCategory;
        return {
            featuredJobs,
            latestJobs,
            jobsByCategory
        }
    }
    else 
    {
        return {
            featuredJobs: mockJobs,
            latestJobs: mockJobs,
            jobsByCategory: mockJobs
        }
    }
    
}
export default landingService;

