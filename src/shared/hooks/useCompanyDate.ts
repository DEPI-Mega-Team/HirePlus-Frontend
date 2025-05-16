import { Company } from "@/shared/types/company";

const useCompanyData = () => {
    const company = (localStorage.getItem('company') || sessionStorage.getItem('company') ) 
    console.log('company ', company);
    if (company) {
        return JSON.parse(company) as Company
    }
    return null
}



export default useCompanyData;