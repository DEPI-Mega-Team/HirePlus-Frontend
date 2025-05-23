import Button from "@/shared/components/button/Button";
import Label from "@/shared/components/label/Label";
import ProgressBar from "@/shared/components/progressBar/ProgressBar";
import { Job } from "@/shared/types/job";
import styles from "./searchJobList.module.css";

const SearchJobList = ({id, jobTitle, company, location, jobType, categoryNames, numberOfApplicants, capacity, onClick}: Job) => {
    return (
        <div className={styles['search-job-list-container']}>
            <div>
                {/* <img src={company.logo} alt="" /> */}
            </div>
            <div className={styles['search-job-list-content-container']}>
                <h3>{jobTitle}</h3>
                <p>{company.name}</p>
                <p>{location}</p>
                <div className={styles['lower-container']}>
                    <p>{jobType}</p>
                   <span className={styles['vertical-line']}></span>
                    <div className={styles['search-job-list-skill-container']}>
                    {
                        categoryNames.map((item) => (
                            <Label text={item} key={item}/>
                        ))
                    }
                    </div>
                </div>
            </div>
            <div className={styles['search-job-list-button-container']}>
                    <Button filled={true} onClick={onClick}>Apply</Button>
                    <ProgressBar progress={(numberOfApplicants / capacity) * 100} />
            </div>

        </div>
    )
}

export default SearchJobList;