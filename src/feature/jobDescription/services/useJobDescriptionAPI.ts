import { Job } from "@/shared/types/job";
import jobDescriptionAPI from "../api/jobDescriptionAPI";

const useJobDescriptionAPI = async (jobId: string) => {

    const { getJobDescription } = jobDescriptionAPI();
    const data = await getJobDescription(jobId);
    return data;
}

export default useJobDescriptionAPI;