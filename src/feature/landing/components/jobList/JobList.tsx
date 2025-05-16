import Label from '@/shared/components/label/Label';
import { Job } from '@/shared/types/job';
import styles from './jobList.module.css';
import { useEffect, useState } from 'react';
import { Company } from '@/shared/types/company';
import useCompany from '../../services/useCompany';
import landingService from '../../services/useLandingService';



const JobList:React.FC<Job> = ({jobTitle, companyId, jobType,location, address, description, experienceLevel, expiredDate}) => {
    const [company, setCompany] = useState<Company | null>(null)
    useEffect(() => {
        const fetchCompany = async () => {
            const { getCompanyById } = await landingService()
            const company = await getCompanyById(companyId)
            console.log(company);
            
            setCompany(company)
        }
        fetchCompany()
    }, [])

    return (
        <div className={styles['job-list']}>
            <img src={company?.logo} alt={company?.name} />
            <h1>{jobTitle}</h1>
            <div className={styles['job-list-top']}>
                <p>{company?.name}</p>
                <span>.</span>
                <p>{location}</p>
            </div>
            <div className={styles['job-list-bottom']}>
                <p>{jobType}</p>
                {/* <div className={styles['skill-names']}>
                    {
                        ?.map((skill) => (
                            <Label key={skill.skillId} text={skill.skillName}/>
                        ))
                    }
                </div> */}
            </div>
        </div>
    )
}

export default JobList;