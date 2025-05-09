import { Job } from "@/shared/types/job";
import useJobDescriptionAPI from "./useJobDescriptionAPI";
import mockJobs from "@/shared/mockData/jobs";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useJobDescriptionService = async (jobId: string) => {

    let jobDescription: Job  = {} as Job;

    if(API_BASE_URL) {
        const response = await useJobDescriptionAPI(jobId);
        if(response.ok) {
            if(response.headers.get('Content-Type')?.includes('json')) {
                jobDescription = await response.json() as Job;
            }
            else {
                jobDescription = JSON.parse(await response.text()) as Job;
            }
        }
    }
    else {
        jobDescription = mockJobs[0];
    }
    return jobDescription;
}


export default useJobDescriptionService;