import Label from '@/shared/components/label/Label';
import styles from './jobCard.module.css'
import { Job } from '@/shared/types/job'
import { useEffect, useState } from 'react';
import landingService from '../../services/useLandingService';
import { Company } from '@/shared/types/company';


const JobCard:React.FC<Job> = ({ jobTitle, location, jobType, experienceLevel, description, companyId }) => {
    const [company, setCompany] = useState<Company>({} as Company)
    useEffect((() => {
        (async ()=> {
            const {getCompanyById } = await landingService()
            const data = await getCompanyById(companyId);
            setCompany(data);
        })()
        
    }), [])
    return (
        <>

            <div className={styles['job-card']}>
                    <div className={styles['job-card-header']}>
                        <img src={company?.logo} alt="" />
                        <p>{jobType}</p>
                    </div>
                    <h2>{jobTitle}</h2>
                    <div className={styles['company-name']}>
                        <p>{company?.name}</p>
                        <span>.</span>
                        <p>{location}</p>
                    </div>
                    <p>{description}</p>
                    {/* <div className={styles['skill-names']}>
                        {
                            skillNames.map((skill, index) => (
                                <Label key={index} text={skill} />
                            ))
                        }
                        
                    </div> */}
            </div>

        </>
    )
}

export default JobCard;