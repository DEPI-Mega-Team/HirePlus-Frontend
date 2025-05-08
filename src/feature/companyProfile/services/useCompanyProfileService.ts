import { Company } from "@/shared/types/company";
import companyProfileAPI from "../api/companyProfileAPI";
import mockCompanies from "@/shared/mockData/companies";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const useCompanyProfileService = async (id: string) => {

    let data: Company;
    if(API_BASE_URL)
    {
        data = await companyProfileAPI(id);
    }
    else
    {
        data = mockCompanies[0];
    }
    return data;
}

export default useCompanyProfileService;