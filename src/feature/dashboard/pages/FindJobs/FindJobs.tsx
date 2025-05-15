import CheckboxList from '@/shared/components/checkboxList/CheckboxList';
import styles from './findJobs.module.css'
import Pagination from '@/shared/components/pagination/Pagination';
import Jobs from '@/shared/mockData/jobs';
import { use, useState } from 'react';
import SearchJobList from '@/feature/search/components/SearchJobList';
import mockJobs from '@/shared/mockData/jobs';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import SearchBar from '@/shared/components/searchBar/SearchBar';
import { useNavigate } from 'react-router';
const FindJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [numberOfResults, setNumberOfResults] = useState(100);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }
    const navigate = useNavigate();
    return (
        <>
            <DashboardHeader title='Find Jobs'/>
            <div className={styles['search-container-jobs-container']}>
                <div className={styles['searchbar-container']}>
                    <SearchBar />
                </div>
                <div className={styles['search-container']}>
                    <div>
                        <CheckboxList title="Type of Employment" options={["Full-time", "Part-time", "Remote", "Internship", "Contract"]} />
                        <CheckboxList title="Categories " options={["Design", "Sales", "Marketing", "Business", "Technology", "Finance", "Engineering"]} />
                        <CheckboxList title="Job Level" options={["Entry", "Mid", "Senior", "Manager"]} />
                        <CheckboxList title="Salary Range" options={["$0 - $10,000", "$10,000 - $20,000", "$20,000 - $30,000", "$30,000 - $40,000", "$40,000 - $50,000", "$50,000 - $60,000", "$60,000 - $70,000", "$70,000 - $80,000", "$80,000 - $90,000", "$90,000 - $100,000"]} />
                    </div>
                </div>
                <div className={styles['job-list-container']}>
                    <h2 className={styles['job-list-container-title']}>All Jobs</h2>
                    <p className={styles['job-list-container-text']}>Showing {numberOfResults} results</p>
                    <div className={styles['search-container-jobs-list-container']}>
                        {
                            mockJobs.map((job, idx) => (
                                idx <= 7 && <SearchJobList key={idx} {...job} onClick={() => { navigate('/dashboard/find-jobs/2') }} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

        </>
    )
}


export default FindJobs;