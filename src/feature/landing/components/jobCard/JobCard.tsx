import Label from '@/shared/components/label/Label';
import styles from './jobCard.module.css'
import { Job } from '@/shared/types/job'


const JobCard:React.FC<Job> = ({ jobTitle, companyName, location, jobType, postedDate, expiryDate, experienceLevel, skillNames, logo, description }) => {
    return (
        <>

            <div className={styles['job-card']}>
                    <div className={styles['job-card-header']}>
                        <img src={logo} alt="" />
                        <p>{jobType}</p>
                    </div>
                    <h2>{jobTitle}</h2>
                    <div className={styles['company-name']}>
                        <p>{companyName}</p>
                        <span>.</span>
                        <p>{location}</p>
                    </div>
                    <p>{description}</p>
                    <div className={styles['skill-names']}>
                        {
                            skillNames.map((skill, index) => (
                                <Label key={index} text={skill} />
                            ))
                        }
                        
                    </div>
            </div>

        </>
    )
}

export default JobCard;