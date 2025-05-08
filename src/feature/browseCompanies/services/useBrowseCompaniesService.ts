import companies from "@/shared/mockData/companies";
import { Company } from "@/shared/types/company";
import { useEffect, useState } from "react";
import browseCompaniesAPI from "../api/browseCompaniesAPI";
import useBrowseCompaniesAPI from "./useBrowseCompaniesAPI";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useBrowseCompaniesServices = async () => {
  let recommendedCompanies:Company[] = [];  
  let categorizedCompanies: Company[] = [];
  let categories: string[] = [];

  if(API_BASE_URL) {
     recommendedCompanies = (await useBrowseCompaniesAPI()).recommendedCompanies
     categorizedCompanies = (await useBrowseCompaniesAPI()).categorizedCompanies
    categories = (await useBrowseCompaniesAPI()).categories
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
