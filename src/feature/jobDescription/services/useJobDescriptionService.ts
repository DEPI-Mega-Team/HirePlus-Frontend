import { Job } from "@/shared/types/job";
import useJobDescriptionAPI from "./useJobDescriptionAPI";
import mockJobs from "@/shared/mockData/jobs";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useJobDescriptionService = async (jobId: string) => {

    let jobDescription: Job;

    if(API_BASE_URL) {
        jobDescription = await useJobDescriptionAPI(jobId);
    }
    else {
        jobDescription = mockJobs[0];
    }
    return jobDescription;
}


export default useJobDescriptionService;