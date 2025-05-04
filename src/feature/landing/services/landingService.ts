const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
import { Job } from "@/shared/types/common";
import useLanding from "./useLanding"
import mockJobs from '@/feature/landing/mockData/mockDate'

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

