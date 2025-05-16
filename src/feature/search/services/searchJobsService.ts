import searchJobsAPI from "../api/searchJobsAPI";

const searchJobsService = () => {
    const {fetchJobs} = searchJobsAPI();
    
    const getJobs = async (keyword: string, location: string) => {
        const res = await fetchJobs(keyword, location);
        if(res.ok)
        {
            const data = await res.json();
            return data;
        }
    }

    return {getJobs}

}

export default searchJobsService;