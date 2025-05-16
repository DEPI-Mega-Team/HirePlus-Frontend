import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import styles from "./dashboardInterviewChatbot.module.css";
import { ChangeEvent, useEffect, useState } from "react";
import CreatableSelect from 'react-select/creatable';
import ChatView from "./components/ChatView/ChatView";
interface Skill {
    value: string;
    label: string;
}

const DashboardInterviewChatbot = () => {
    const [interviewType, setInterviewType] = useState<string>('technical');
    const [name, setName] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>('');
    const [skills, setSkills] = useState<Skill[]>([]);
    const [questionsCount, setQuestionsCount] = useState<number>(5);
    const [file, setFile] = useState<File>()

 

    // const handleSubmit = () => {

    // }
    // setMessages(mockMessages);
    return (
        <div className={styles['dashboard-interview-chatbot']}>
            <DashboardHeader title="Interview Chatbot" />
            <div className={styles['dashboard-interview-chatbot-container']}>
                <div className={styles['left-side']}>
                    <div className={styles['form-group']}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label htmlFor="job-title">Job Title</label>
                        <input
                            type="text"
                            id="job-title"
                            placeholder="Job Title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                    </div>

                    <div className={styles['form-group']}>
                        <label htmlFor="interview-type">Interview Type</label>
                        <select
                            name="Interview Type"
                            id="interview-type"
                            value={interviewType}
                            onChange={(e) => setInterviewType(e.target.value)}
                        >
                            <option value="technical">Technical</option>
                            <option value="behavioral">Behavioral</option>
                        </select>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="skills">Skills</label>
                        <CreatableSelect
                            isMulti
                            value={skills}
                            onChange={(newValue) => setSkills(newValue as Skill[])}
                            options={[
                                { value: "c++", label: "C++" },
                                { value: "javascript", label: "JavaScript" },
                                { value: "React", label: "React JS" },
                                { value: "html", label: "HTML" },
                                { value: "css", label: "CSS" },

                            ]}
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="questions-count">Number of Questions</label>
                        <input
                            type="number"
                            id="questions-count"
                            min="1"
                            max="20"
                            value={questionsCount}
                            onChange={(e) => setQuestionsCount(Number(e.target.value))}
                            placeholder="Number of questions"
                        />
                    </div>

                    {/* <form method="POST" onSubmit={handleSubmit}>
                        <input type="file" name="" id="" onChange={(e: ChangeEvent<HTMLInputElement>) => {setFile(e.target.files?.[0])}} />
                    </form> */}


                </div>
                <div className={styles['vertical-line']}></div>
                <ChatView jobTitle={jobTitle} name={name} questionsCount={questionsCount} skills={skills} interviewType={interviewType} />
            </div>
            <div>

            </div>
        </div>
    )
}

export default DashboardInterviewChatbot;