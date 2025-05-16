const url = import.meta.env.VITE_API_BASE_URL

const searchCompaniesAPI = () => {
    const fetchCompanies = async (industry: string, rating: number) => {

        const res = await fetch(`${url}/api/company/search`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                industry, rating
            })
        }  )
    return res;
    }
    return {fetchCompanies}
}

export default searchCompaniesAPI;