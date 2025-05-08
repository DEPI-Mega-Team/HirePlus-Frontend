import { useState } from "react";
import browseCompaniesAPI from "../api/browseCompaniesAPI";
import { Company } from "@/shared/types/company";

const useBrowseCompaniesAPI = async () => {
    const data = await browseCompaniesAPI()
    const recommendedCompanies:Company[] = data
    const categorizedCompanies:Company[] = data
    const categories:string[] = data.map((company: Company) => company.industry)

    
    return {recommendedCompanies, categorizedCompanies, categories}
}

export default useBrowseCompaniesAPI;