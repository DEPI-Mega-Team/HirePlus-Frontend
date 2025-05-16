import SecondHero from "@/shared/components/secondHero/SecondHero";
import useBrowseCompaniesService from "../services/useBrowseCompaniesService";
import styles from "./browseCompanies.module.css";
import { Company } from "@/shared/types/company";
import CompanyBigCard from "../components/CompanyBigCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const BrowseCompanies = () => {
   const [recommendedCompanies, setRecommendedCompanies] = useState<Company[]>([]);
   const [categories, setCategories] = useState<string[]>([]);
   const [categorizedCompanies, setCategorizedCompanies] = useState<Company[]>([]);
    useEffect(() => {
        (async () => {
            const {recommendedCompanies, categories, categorizedCompanies} = await useBrowseCompaniesService()
            setRecommendedCompanies(recommendedCompanies)
            setCategories(categories)
            setCategorizedCompanies(categorizedCompanies)
            console.log(recommendedCompanies);
            console.log(categories);
            console.log(categorizedCompanies);
        })()

        
        
    }, []);

    const navigate = useNavigate();
  return (
    <div>
        <SecondHero title1='Industry' title2='Rating' onSearch={(searchParams) => {navigate(`/search/companies?${new URLSearchParams({industry:searchParams.key1, rating:searchParams.key2}).toString()}`)}} />
        <div className={styles['recommended-companies-container']}>
              <div className={styles['recommended-companies-header']}>
                  <h1>Recommended Companies</h1>
                  <p>Based on your profile, company preferences, and recent activity</p>
                  <div className={styles['recommended-companies-list']}>
                      {
                          recommendedCompanies.map((company) => (
                              <button className={styles['company-button']} onClick={() => {navigate(`/companies/${company.companyId}`)}}>
                                <CompanyBigCard key={company.name} {...company} />
                              </button>
                          ))
                      }
                  </div>
              </div>

        </div>

        <div className={styles['category']}>

              <div className={styles['category-list-container']}>
                  <h1>Companies By Category</h1>
                  <div className={styles['category-list']}>
                      {
                          categories.map((category) => (
                              <div className={styles['category-item']} key={category}>
                                  <h2>{category}</h2>
                              </div>
                          ))
                      }
                  </div>
                  <p>All Results</p>
                  <div className={styles['category-result-list']}>
                      {
                          categorizedCompanies.map((company) => (
                              <div className={styles['category-result-item']} key={company.name}>
                                  <img className={styles['category-result-item-image']} src={company.logo} alt={company.name} />
                                  <h2>{company.name}</h2>
                              </div>
                          ))
                      }
                  </div>
              </div>
        </div>
        
    </div>
  )
};

export default BrowseCompanies;
