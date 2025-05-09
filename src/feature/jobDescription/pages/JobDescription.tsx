import { useEffect, useState } from "react";
import useJobDescriptionService from "../services/useJobDescriptionService";
import { useParams } from "react-router-dom";
import { Job } from "@/shared/types/job";
import Pattern4 from "@/assets/imgs/Pattern-4.png";
import Pattern5 from "@/assets/imgs/Pattern-5.png";
import Button from "@/shared/components/button/Button";
import shareIcon from "@/assets/icons/Share.svg";
import styles from "./jobDescription.module.css";
import Label from "@/shared/components/label/Label";
import JobApplicationModal from "../components/JobApplicationModal";
import useCompany from "@/feature/landing/services/useCompany";
import { Company } from "@/shared/types/company";
const JobDescription = () => {
    const { id } = useParams() as { id: string };
    const [jobDescription, setJobDescription] = useState<Job>({} as Job);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {
        const fetchJobDescription = async () => {
            const data = await useJobDescriptionService(id);
            setJobDescription(data);
        }
        fetchJobDescription();
    }, [id]);

   
    useEffect(()=>{
        (async () => {
            const {getCompany} = await useCompany();
            if(jobDescription.companyId){
                const data = await getCompany(jobDescription.companyId);
                setCompany(data);
            }
        })()
    },[jobDescription.companyId])

    const handleApply = () => {
        setIsModalOpen(true);
    }

    return (
        <>
        {isModalOpen && <JobApplicationModal jobDescription={jobDescription} onClose={() => setIsModalOpen(false)} />}
        <div className={styles['job-description-container__wrapper']}>
            <div className={styles['job-description-container']}>
                <img className={styles['job-description-container__pattern4']} src={Pattern4} alt="" />
                <img className={styles['job-description-container__pattern5']} src={Pattern5} alt="" />
                <div className={styles['job-description-container__job-info--path']}>Home/Companies/{company?.name}/Jobs/{jobDescription.jobTitle}</div>
                <div className={styles['job-description-container__job-info']}>
                    {/* <img src={company?.logo} alt="" /> */}
                    <div className={styles['job-description-container__job-info--content']}>{jobDescription.jobTitle}</div>
                    <div className={`${styles['job-description-container__job-info--content']} ${styles['job-description-container__job-info--content-company']}`}>
                        <div>{company?.name}</div><span>.</span>
                        <div>{jobDescription.location}</div><span>.</span>
                        <div>{jobDescription.jobType}</div>
                    </div>
                    <div className={styles['job-description-container__job-info__actions']}>
                        <button className={styles['job-description-container__job-info__actions-share']}>
                            <img src={shareIcon} alt="" />
                        </button>
                        <span className={styles['job-description-container__job-info__separator']}></span>
                        <Button filled={true} onClick={handleApply}>Apply</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles['job-description-container__job-info--description']}>
            <div>
                <h2 className={styles['job-description-container__job-info--description-title']}>Job Description</h2>
                <div className={styles['job-description-container__job-info--description-content']}>{jobDescription.description}</div>
            </div>
            <div>
                <div>
                    <h3>About this role</h3>
                    <div>

                    </div>
                </div>
                <div>
                    <h3> Categories  </h3>
                    <div>
                        {
                            company?.industry
                        }
                    </div>

                </div>
                <div>
                    <h3>Required Skills</h3>
                    <div>
                        {
                            jobDescription.skills?.map((skill) => (
                                <Label text={skill.skillName} key={skill.skillId}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default JobDescription;