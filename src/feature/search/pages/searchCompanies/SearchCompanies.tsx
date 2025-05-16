import SecondHero from "@/shared/components/secondHero/SecondHero";
import CheckboxList from "@/shared/components/checkboxList/CheckboxList";
import CompanyBigCard from "@/feature/browseCompanies/components/CompanyBigCard";
import styles from "./searchCompanies.module.css";
import Pagination from "@/shared/components/pagination/Pagination";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Company } from "@/shared/types/company";
import useBrowseCompaniesServices from "@/feature/browseCompanies/services/useBrowseCompaniesService";
import useSearchCompaniesService from "../../services/searchCompaniesService";
const SearchCompanies = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [results, setResults] = useState<Company[]>([])
    const [searchParams] = useSearchParams();
    const industry = searchParams.get('industry') as string
    const rating = Number(searchParams.get('rating')) as number
    useEffect(() => {
        console.log(industry)
        console.log(rating)
        const { getCompanies } = useSearchCompaniesService();
        (async () => {
            const data = await getCompanies(industry, rating) as Company[];
            setResults(data);
            console.log(data);
            setIsLoading(false);

        })()
    }, [industry, rating])
    return (
        <div>
            <SecondHero title1="Industry" title2="Rating" onSearch={(searchParams) => { navigate(`/search/companies?${new URLSearchParams({ industry: searchParams.key1, rating: searchParams.key2 }).toString()}`) }} />
            <div className={styles['search-companies-container']}>
                <div className={styles['search-companies-container__filters']}>
                    <CheckboxList title="Industry" options={["Technology", "Finance", "Healthcare", "Education", "Retail", "Manufacturing", "Construction", "Hospitality", "Other"]} />
                    <CheckboxList title="Company Size" options={["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10001+"]} />
                </div>
                {
                    isLoading ? (<p>Loading...</p>) :
                        (
                            <>
                                {
                                    results.length? (
                                        <div className={styles['search-companies-container__companies']}>


                                            <h2>All Jobs</h2>
                                            {results?.map((company) => (
                                                <CompanyBigCard key={company.name} {...company} />
                                            ))}
                                        </div>
                                    ):
                                    (
                                        <h1>There are No companies</h1>
                                    )
                                }
                            </>


                        )
                }


            </div>
        </div>
    )
}

export default SearchCompanies;