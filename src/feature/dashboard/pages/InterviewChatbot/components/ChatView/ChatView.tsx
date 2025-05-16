import styles from './chatView.module.css';
import { Form } from 'react-router';
import { FormEvent, useEffect, useRef, useState } from 'react';
import chatbotService from '../../services/chatbotService';



interface chatViewProps {
    name: string;
    jobTitle: string;
    skills: { value: string, label: string }[];
    questionsCount: number;
    interviewType: string;
}


const ChatView: React.FC<chatViewProps> = ({ name, jobTitle, skills, questionsCount, interviewType }) => {
    const [messages, setMessages] = useState([] as string[]);
    const chatContainer = useRef<HTMLDivElement | null>(null)
    const [inputMessage, setInputMessage] = useState('');
    const [is_chatting, setIs_Chatting] = useState(false)
    const mockBotProfile =
    {
        title: "Jana Maher",
        description: "AI Interview Coach",

    }
    const startSession = async () => {
        setIs_Chatting(true)
        const { getInterview } = chatbotService();
        const data = await getInterview(jobTitle, name, interviewType, questionsCount, skills, messages);
        setMessages(prev => [...prev, data.response])

    }
    useEffect((() => {
        const div = chatContainer.current as HTMLDivElement
        div.scrollIntoView({ behavior: 'smooth' });
    }), [messages])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log("SEND BUTTON HAS BEEN PRESSED");
        const newMessages = [...messages, inputMessage]
        setMessages((prev) => [...prev, inputMessage])
        setInputMessage('')
        const { getChat } = chatbotService();
        const data = await getChat(1, inputMessage, jobTitle, name, interviewType, questionsCount, skills, newMessages)
        console.log(data);
        setMessages((prev) => [...prev, data.response])
    }
    return (
        <div className={styles['chat-view']}>
            <div className={styles['chat-bot-header']}>
                <h2>{mockBotProfile.title}</h2>
                <p>{mockBotProfile.description}</p>
            </div>
            <div className={styles['horizontal-line']}></div>
            <div className={styles['chat-message-form-container']}>
                <div className={styles['chat-messages-container']}>
                    {messages.map((message, idx) => (
                        <div key={idx} className={`${styles['chat-message']} ${idx % 2 === 1 ? styles['this-message'] : ''}`}>
                            {message}
                        </div>
                    ))}
                    <div ref={chatContainer} />
                </div>
                <Form method="POST" onSubmit={handleSubmit} className={styles['chat-input-form']}>
                    <div className={styles['chat-input-container']}>
                        {
                            !is_chatting ?
                                (
                                    <button className={styles['chat-input-container-start-button']} type='button' onClick={startSession}>Start Session</button>) :
                                (
                                    <>
                                        <input type="text" value={inputMessage} onChange={(e) => { setInputMessage(e.target.value) }} placeholder="Type your message..." />
                                        <button type="submit">Send</button>
                                    </>
                                )
                        }
                    </div>
                </Form>
            </div>

        </div>
    );
}


export default ChatView;