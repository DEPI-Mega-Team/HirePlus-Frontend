const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const useCompany = () => {


    
    const getCompany = async (companyId: string) => {
        const response = await fetch(`${API_BASE_URL}/api/company/${companyId}`)
        return response.json()
    }

    return { getCompany }
}


export default useCompany;