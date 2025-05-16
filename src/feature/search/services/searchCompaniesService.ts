import searchCompaniesAPI from "../api/searchCompaniesAPI";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  logo: string;
  tags: string[];
  jobsCount: number;
  categories: string[];
  sales?: string;
}
const useSearchCompaniesService = () => {
  const getCompanies = async (industry: string, rating: number) => {
    const {fetchCompanies} = searchCompaniesAPI();
    const res = await  fetchCompanies(industry, rating);
    if(res.ok)
    {
      const data = res.json();
      return data;
    }
  }

  return {getCompanies}
}


export default useSearchCompaniesService;
