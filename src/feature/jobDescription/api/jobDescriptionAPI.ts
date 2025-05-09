const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const jobDescriptionAPI = () =>  {
    const getJobDescription = async (jobId: string) => {
        const response = await fetch(`${API_BASE_URL}/api/job/${jobId}`);
        return response;
    }
    return {
        getJobDescription
    }
}


export default jobDescriptionAPI;