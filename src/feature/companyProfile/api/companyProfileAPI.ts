const url = import.meta.env.VITE_API_BASE_URL;


const useCompanyProfileAPI = async (id: string) => {
    const res = await fetch(`${url}/api/company/${id}`);
    return res;
}

export default useCompanyProfileAPI;