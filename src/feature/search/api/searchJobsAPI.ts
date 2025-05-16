const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const searchJobsAPI = () => {
    const fetchJobs = async (keyword: string, location: string) => {
        const response = await fetch(`${API_BASE_URL}/api/job/search?jobTitle=${keyword}&location=${location}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            return response;
        } else {
            throw new Error('Failed to fetch search results');
        }
    }

    return { fetchJobs };
}

export default searchJobsAPI;