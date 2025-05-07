import Label from '@/shared/components/label/Label';
import { Job } from '@/shared/types/job';
import styles from './jobList.module.css';
const JobList:React.FC<Job> = ({jobTitle, companyName, jobType, skillNames,location, logo}) => {
    return (
        <div className={styles['job-list']}>
            {/* <img src={logo} alt={companyName} /> */}
            <h1>{jobTitle}</h1>
            <div className={styles['job-list-top']}>
                <p>{companyName}</p>
                <span>.</span>
                <p>{location}</p>
            </div>
            <div className={styles['job-list-bottom']}>
                <p>{jobType}</p>
                <div className={styles['skill-names']}>
                    {
                        skillNames.map((skill) => (
                            <Label key={skill} text={skill}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default JobList;