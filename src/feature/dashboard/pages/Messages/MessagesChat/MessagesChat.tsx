import { useParams } from 'react-router';
import styles from './messagesChat.module.css'
import { useEffect, useState } from 'react';

const mockChat = [
    {
        message:'message1',
        sender: 'mohamed',
        date:'2025/05/09'
    },
    {
        message:'message1',
        sender: 'mohamed',
        date:'2025/05/09'
    },
    {
        message:'message1',
        sender: 'mohamed',
        date:'2025/05/09'
    },
    {
        message:'message1',
        sender: 'mohamed',
        date:'2025/05/09'
    }
]
const MessagesChat = () => {
    const {id} = useParams();
    const [chatMessages, setChatMessages] = useState(mockChat)
    useEffect(() => {
        // fetch chat

    },[])
    return (
        <div>
            {
                chatMessages.map((message) => {
                    return (
                        <div>
                            <h1>From {message.sender}</h1>
                            <p>{message.message}</p>
                            <small>{message.date}</small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessagesChat;