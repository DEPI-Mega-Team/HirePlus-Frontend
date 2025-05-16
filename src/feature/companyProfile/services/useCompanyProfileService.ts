import { Company } from "@/shared/types/company";
import companyProfileAPI from "../api/companyProfileAPI";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useCompanyProfileService = async (id: string) => {

    if(API_BASE_URL)
    {
        const res = await companyProfileAPI(id);
        if(res.ok)
        {
            const data = res.json();
            return data
        }
    }
    return null;
}

export default useCompanyProfileService;