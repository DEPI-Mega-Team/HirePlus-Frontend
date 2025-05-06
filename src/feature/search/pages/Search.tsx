import CheckboxList from "@/shared/components/checkboxList/CheckboxList";
import Pagination from "@/shared/components/pagination/Pagination";
import { useState } from "react";
import styles from "./search.module.css";
import pattern2 from "@/assets/imgs/Pattern-2.png";
import pattern3 from "@/assets/imgs/Pattern-3.png";
import businessMan from "@/assets/imgs/black businessman in blue suit looking at phone.png"
import underline2 from "@/assets/imgs/underline-2.png"
import SearchBar from "@/shared/components/searchBar/SearchBar";
import mockJobs from "@/shared/mockData/mockDate";
import { Job } from "@/shared/types/common";
import SearchJobList from "../components/SearchJobList";

const Search = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [numberOfResults, setNumberOfResults] = useState(100);
    const [jobs, setJobs] = useState<Job[]>(mockJobs);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <div className={styles['search-container-hero']}>
                <div className={styles['search-container-hero-content']}>
                    <h1 className={styles['search-container-hero-title']}> Find your <span className={styles['search-container-hero-title-span']}>dream job</span></h1>
                    <p className={styles['search-container-hero-content-text']}>Find your next career at companies like HubSpot, Nike, and Dropbox</p>
                    <span className={styles['search-container-hero-content-searchBar']}>
                        <SearchBar />
                    </span>
                </div>
                <img className={styles['search-container-hero-underline2']} src={underline2} alt="" />
                <img className={styles['search-container-hero-pattern2']} src={pattern2} alt="" />
                <img className={styles['search-container-hero-pattern3']} src={pattern3} alt="" />
                <img className={styles['search-container-hero-businessMan']} src={businessMan} alt="" />
            </div>

            <div className={styles['search-container-jobs-container']}>
               
                <div className={styles['search-container']}>

                    <div>
                        <CheckboxList title="Type of Employment" options={["Full-time", "Part-time", "Remote", "Internship", "Contract"]} />
                        <CheckboxList title="Categories " options={["Design", "Sales", "Marketing", "Business", "Technology", "Finance", "Engineering"]} />
                        <CheckboxList title="Job Level" options={["Entry", "Mid", "Senior", "Manager"]} />
                        <CheckboxList title="Salary Range" options={["$0 - $10,000", "$10,000 - $20,000", "$20,000 - $30,000", "$30,000 - $40,000", "$40,000 - $50,000", "$50,000 - $60,000", "$60,000 - $70,000", "$70,000 - $80,000", "$80,000 - $90,000", "$90,000 - $100,000"]} />
                    </div>

                    <div>

                    </div>
                </div>
                <div className={styles['job-list-container']}>
                    <h2 className={styles['job-list-container-title']}>All Jobs</h2>
                    <p className={styles['job-list-container-text']}>Showing {numberOfResults} results</p>
                    <div className={styles['search-container-jobs-list-container']}>
                        {
                            jobs.map((job, idx) => (
                                idx <= 7 && <SearchJobList key={job.id} {...job} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

        </div>
    )
}

export default Search;