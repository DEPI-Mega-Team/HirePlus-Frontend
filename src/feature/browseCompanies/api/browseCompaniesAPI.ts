const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const browseCompaniesAPI = async () => {
    const response = await fetch(`${API_BASE_URL}/company`)
    const data = await response.json()
    return data
}

export default browseCompaniesAPI;