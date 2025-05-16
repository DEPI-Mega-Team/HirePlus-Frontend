import CheckboxList from "@/shared/components/checkboxList/CheckboxList";
import Pagination from "@/shared/components/pagination/Pagination";
import { useEffect, useState } from "react";
import styles from "./searchJobs.module.css";
import mockJobs from "@/shared/mockData/jobs";
import { Job } from "@/shared/types/job";
import SearchJobList from "../../components/SearchJobList";
import SecondHero from "@/shared/components/secondHero/SecondHero";
import { useNavigate } from "react-router";
import searchJobsService from "../../services/searchJobsService";
const Search = () => {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState<Job[]>();
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const titleParam = params.get('jobTitle') || '';
        const locationParam = params.get('location') || '';
        setJobTitle(titleParam);
        setLocation(locationParam);
    }, []);

    useEffect(() => {
        (async () => {
            const { getJobs } = searchJobsService();
            const data = await getJobs(jobTitle, location)
            setJobs(data);
            setIsLoading(false)
        })()
    }, [])
    return (
        <div>
            <SecondHero title1="Job Title" title2="Location" onSearch={(params) => { navigate(`/search/jobs?${new URLSearchParams({ jobTitle: params.key1, location: params.key2 })}`) }} />

            <div className={styles['search-container-jobs-container']}>

                <div className={styles['search-container']}>

                    <div>
                        <CheckboxList title="Type of Employment" options={["Full-time", "Part-time", "Remote", "Internship", "Contract"]} />
                        <CheckboxList title="Categories " options={["Design", "Sales", "Marketing", "Business", "Technology", "Finance", "Engineering"]} />
                        <CheckboxList title="Job Level" options={["Entry", "Mid", "Senior", "Manager"]} />
                        <CheckboxList title="Salary Range" options={["$0 - $10,000", "$10,000 - $20,000", "$20,000 - $30,000", "$30,000 - $40,000", "$40,000 - $50,000", "$50,000 - $60,000", "$60,000 - $70,000", "$70,000 - $80,000", "$80,000 - $90,000", "$90,000 - $100,000"]} />
                    </div>
                </div>
                {
                    isLoading ?
                        (
                            <>
                                <p>Loading...</p>
                            </>
                        )
                        :
                        (
                            <div className={styles['job-list-container']}>
                                <h2 className={styles['job-list-container-title']}>All Jobs</h2>
                                <div className={styles['search-container-jobs-list-container']}>
                                    {
                                        jobs?.map((job, idx) => (
                                            idx <= 7 && <SearchJobList key={idx} {...job} />
                                        ))
                                    }
                                </div>
                            </div>
                        )
                }

            </div>
        </div>
    )
}

export default Search;