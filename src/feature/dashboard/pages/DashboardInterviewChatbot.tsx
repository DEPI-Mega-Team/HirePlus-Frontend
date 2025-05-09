import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import styles from "./dashboardInterviewChatbot.module.css";
import { useState } from "react";

const DashboardInterviewChatbot = () => {
    const [messages, setMessages] = useState<string[]>([]); 
    const [isTyping, setIsTyping] = useState<boolean>(false);

    return (
        <div className={styles['dashboard-interview-chatbot']}>
            <DashboardHeader title="Interview Chatbot" />
            <div className={styles['dashboard-interview-chatbot-content']}>
                {
                    messages.map((message, index) => (
                        <div key={index} className={styles['dashboard-interview-chatbot-message']}>
                            {message}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DashboardInterviewChatbot;