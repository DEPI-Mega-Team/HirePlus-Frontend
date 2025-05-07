import CheckboxList from "@/shared/components/checkboxList/CheckboxList";
import Pagination from "@/shared/components/pagination/Pagination";
import { useState } from "react";
import styles from "./searchJobs.module.css";
import mockJobs from "@/shared/mockData/jobs";
import { Job } from "@/shared/types/job";
import SearchJobList from "../../components/SearchJobList";
import SecondHero from "@/shared/components/secondHero/SecondHero";
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
            <SecondHero />

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