import styles from "./jobApplicationModal.module.css";
import { Form } from "react-router";
import InputField from "@/shared/components/inputField/InputField";
import Button from "@/shared/components/button/Button";
import { Job } from "@/shared/types/job";
import closeIcon from "@/assets/icons/Close.svg";
import { useEffect, useState } from "react";
import useCompany from '@/feature/landing/services/useCompany';
import { Company } from "@/shared/types/company";

const JobApplicationModal = ({jobDescription, onClose}: {jobDescription: Job, onClose: () => void}) => {
    const [company, setCompany] = useState<Company | null>(null);
    useEffect(() => {
        (async () => {
            const {getCompany} = await useCompany();            
            const data = await getCompany(jobDescription.companyId)
            setCompany(data)
        })()
       
    },[jobDescription.companyId])


    return (
        <div className={styles['job-application-modal']}>
            <div className={styles['job-application-modal__container']}>
            <div>
                {/* <img src={company?.logo} alt="" /> */}
                <h1>{jobDescription.jobTitle}</h1>
                <div className={styles['job-application-modal__container__job-info']}>
                    <p>{company?.name}</p> <span>.</span>
                    <p>{jobDescription.location}</p> <span>.</span>
                    <p>{jobDescription.jobType}</p>
                </div>
                <button className={styles['job-application-modal__container__close-button']} onClick={onClose}>
                    <img src={closeIcon} alt="" />
                </button>
            </div>
            <div>
                <h1>Submit Your Application</h1>
                <div>
                    <Form>
                        <InputField id="fullName" label="Full Name" name="fullName" type="text" />
                        <InputField id="email" label="Email" name="email" type="email" />
                        <InputField id="phoneNumber" label="Phone Number" name="phoneNumber" type="tel" />
                        <InputField id="currentJobTitle" label="Current Job Title" name="currentJobTitle" type="text" />
                        <h2>Links</h2>
                        <InputField id="linkedin" label="LinkedIn" name="linkedin" type="text" />
                        <InputField id="github" label="Github" name="github" type="text" />
                        <InputField id="portfolio" label="Portfolio" name="portfolio" type="text" />
                        <h2>Additional Information</h2>
                        <InputField id="additionalInformation" label="Additional Information" name="additionalInformation" type="textarea" />
                        <h2>Upload Resume</h2>
                        <label htmlFor="resume">Attach your resume</label>
                        <InputField id="resume" label="Resume" name="resume" type="file" />
                        <Button filled={true}>Submit Application</Button>
                        <p>By submitting your application, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                    </Form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default JobApplicationModal;