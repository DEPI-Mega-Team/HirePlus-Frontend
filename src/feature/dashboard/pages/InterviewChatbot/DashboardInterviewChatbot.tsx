import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import styles from "./dashboardInterviewChatbot.module.css";
import { useState } from "react";
import CreatableSelect from 'react-select/creatable';
import ChatView from "./components/ChatView/ChatView";
const DashboardInterviewChatbot = () => {
    // const [messages, setMessages] = useState<string[]>([]); 
    // const [isTyping, setIsTyping] = useState<boolean>(false);
    const [interviewType, setInterviewType] = useState<string>('technical');
    const mockMessages = [ 
        "Hello! How can I assist you today?",
        "I am here to help you with your interview preparation.",
        "What specific topics would you like to discuss?",
        "I can provide tips on resume writing, interview questions, and more.",
        "Feel free to ask me anything related to job interviews."
    ];
    // setMessages(mockMessages);
    return (
        <div className={styles['dashboard-interview-chatbot']}>
                <DashboardHeader title="Interview Chatbot" />
                <div className={styles['dashboard-interview-chatbot-container']}>
                    <div className={styles['left-side']}>
                        <div className={styles['form-group']}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>

                        <div className={styles['form-group']}>
                            <label htmlFor="job-title">Job Title</label>
                            <input type="text" id="job-title" placeholder="Job Title" />
                        </div>

                        <div className={styles['form-group']}>
                            <label htmlFor="interview-type">Interview Type</label>
                            <select name="Interview Type" id="interview-type" value={interviewType} onChange={(e) => setInterviewType(e.target.value)}>
                                <option value="technical">Technical</option>
                                <option value="behavioral">Behavioral</option>
                            </select>
                        </div>
                        <div className={styles['form-group']}>
                            <label htmlFor="skills">Skills</label>
                            <CreatableSelect isMulti options={[{ value: "c++", label: "C++" }, { value: "javascript", label: "JavaScript" }]} />

                        </div>
                    

                    </div>
                    <div className={styles['vertical-line']}></div>
                    <ChatView/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DashboardInterviewChatbot;