import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import styles from "./dashboardBrowseCompanies.module.css";
import CompanyBigCard from "@/feature/browseCompanies/components/CompanyBigCard";
import { useState } from "react";
import CheckboxList from "@/shared/components/checkboxList/CheckboxList";
import Pagination from "@/shared/components/pagination/Pagination";
import companies from "@/shared/mockData/companies";

import { useEffect } from "react";
import SearchBar from "@/shared/components/searchBar/SearchBar";
const DashboardBrowseCompanies = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [numberOfResults, setNumberOfResults] = useState(100);

    return (
        <div>
            <DashboardHeader title="Browse Companies"/>
            <div className={styles['search-companies-container']}>
                <div className={styles['search-companies-container-searchbar']}>
                    <SearchBar />
                </div>
                <div className={styles['search-companies-container__filters']}>
                    <CheckboxList title="Industry" options={["Technology", "Finance", "Healthcare", "Education", "Retail", "Manufacturing", "Construction", "Hospitality", "Other"]} />
                    <CheckboxList title="Company Size" options={["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5001-10000", "10001+"]} />
                </div>
                <div className={styles['search-companies-container__companies']}>
                    <h2>All Companies</h2>
                    {companies.map((company) => (
                        <CompanyBigCard key={company.name} {...company} />
                    ))}
                </div>
                <div className={styles['search-companies-container__pagination']}>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            </div>

        </div>
    )
}

export default DashboardBrowseCompanies;