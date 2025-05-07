import companies from "@/shared/mockData/companies";
import { Company } from "@/shared/types/company";
import { useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useBrowseCompaniesServices = () => {

    let recommendedCompanies: Company[] = [];
    let categories: string[] = [];
    let categorizedCompanies: Company[] = [];

  if(API_BASE_URL) {
    // fetch companies from the API
    // return companies;
  }
  else {
    recommendedCompanies = companies;
    categorizedCompanies = companies;
    categories = companies.map((company) => company.industry);
  }

    return {
        recommendedCompanies,
        categories,
        categorizedCompanies
    };
};

export default useBrowseCompaniesServices;
