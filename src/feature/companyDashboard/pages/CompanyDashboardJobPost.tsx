import { useState } from "react"
import styles from "./companyDashboardJobPost.module.css"
import CreatableSelect from 'react-select/creatable'

type stepType = 'JobInformation' | 'JobDescription'
const CompanyDashboardJobPost = () => {
    const [step, setStep] = useState<stepType>()
    return (
        <div>
            <div>
                <h2>Job Information</h2>
                <h2>Job Description</h2>
            </div>

            {
                step ? (
                    <div>
                        <div>
                            <h1>Basic Information</h1>
                            <p>This information will be displayed publicly</p>
                        </div>
                        <div>
                            <h1>Job Title</h1>
                            <p>Job titles must be describe one position</p>
                            <input type="text" placeholder="e.g. Software Engineer" />
                        </div>
                        <div>
                            <h1>Type of Employment</h1>
                            <p>You can select only one type of employment</p>
                            <div>
                                <div>
                                    <input type="radio" name="employmentType" id="fullTime" />
                                    <label htmlFor="fullTime">Full Time</label>
                                </div>
                                <div>
                                    <input type="radio" name="employmentType" id="partTime" />
                                    <label htmlFor="partTime">Part Time</label>
                                </div>
                                <div>
                                    <input type="radio" name="employmentType" id="remote" />
                                    <label htmlFor="remote">Remote Time</label>
                                </div>
                                <div>
                                    <input type="radio" name="employmentType" id="internship" />
                                    <label htmlFor="internship">Internship</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Required Skills</h1>
                            <p>Add Required Skills for the Job</p>
                            <CreatableSelect
                                isMulti
                                options={[
                                    { value: 'javascript', label: 'JavaScript' },
                                    { value: 'typescript', label: 'TypeScript' },
                                    { value: 'react', label: 'React' },
                                    { value: 'nodejs', label: 'Node.js' },
                                    { value: 'python', label: 'Python' },
                                    { value: 'java', label: 'Java' },
                                    { value: 'csharp', label: 'C#' },
                                    { value: 'sql', label: 'SQL' },
                                    { value: 'aws', label: 'AWS' },
                                    { value: 'docker', label: 'Docker' }
                                ]}
                                placeholder="Select or create skills..."
                                className={styles.skillSelect}
                                onChange={(newValue) => console.log(newValue)}
                            />
                        </div>
                        <button onClick={() => {setStep('JobDescription')}}>Next Step</button>
                    </div>
                ) : (
                    <div>
                        <div>
                            <h1>Details</h1>
                            <p>Add the description of the job, responsibilities, who you are, and nice-to-haves.</p>
                        </div>
                        <div>
                            <h1>Job Description</h1>
                            <p>Job titles must be describe one position</p>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div>
                            <h1>Responibilties</h1>
                            <p>
                                Outline the core responsibilities of the position
                            </p>
                            <textarea name="" id=""></textarea>

                        </div>
                        <div>
                            <h1>Who You Are</h1>
                            <p>Add your preferred candidates qualifications</p>
                            <textarea name="" id=""></textarea>

                        </div>
                        <div>
                            <h1>Nice To Have</h1>
                            <p>Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply</p>
                            <textarea name="" id=""></textarea>

                        </div>
                        <button onClick={() => setStep('JobInformation')}>Back</button>
                    </div>
                )
            }
        </div>

    )
}
export default CompanyDashboardJobPost