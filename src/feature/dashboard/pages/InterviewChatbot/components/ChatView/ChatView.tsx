import styles from './chatView.module.css';
import { Form } from 'react-router';
import { FormEvent, useState } from 'react';
const ChatView = ({}) => {
    const [messages, setMessages] = useState([
        "Hello! How can I assist you today?",
        "I am here to help you with your interview preparation.",
        "What specific topics would you like to discuss?",
        "I can provide tips on resume writing, interview questions, and more.",
        "Feel free to ask me anything related to job interviews."
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const mockBotProfile = 
    {
        title: "Jana Maher",
        description: "AI Interview Coach",

    }
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setMessages((prev) => [...prev,inputMessage])
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
                        <div key={idx} className={`${styles['chat-message']} ${idx%2 === 0?styles['this-message']:''}`}>
                            {message}
                        </div>
                    ))}
                </div>
            <Form method="get" onSubmit={handleSubmit} className={styles['chat-input-form']}>
                <div className={styles['chat-input-container']}>
                    <input type="text" value={inputMessage} onChange={(e) => {setInputMessage(e.target.value)}} placeholder="Type your message..." />
                    <button type="submit">Send</button>
                </div>
            </Form>
            </div>
            
        </div>
    );
}


export default ChatView;