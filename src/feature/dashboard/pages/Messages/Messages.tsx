import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import styles from './messages.module.css'
import MessagesChat from './MessagesChat/MessagesChat'
const Messages = () => {
    const recentChats = [
        {
            image: '',
            senderName: "eslam",
            message: 'hello',
            since: '2 hours'
        },
        {
            image: '',
            senderName: "eslam",
            message: 'hello',
            since: '2 hours'
        },
        {
            image: '',
            senderName: "eslam",
            message: 'hello',
            since: '2 hours'
        },
        {
            image: '',
            senderName: "eslam",
            message: 'hello',
            since: '2 hours'
        },
        {
            image: '',
            senderName: "eslam",
            message: 'hello',
            since: '2 hours'
        },
    ]
    return (
        <div className={styles['messages']}>
           <div className={styles['dashboard-header']}>
                <DashboardHeader title='Messages' />
           </div>
            <div className={styles['chats']}>
                <div>
                    <input type="text" placeholder='Search Messages' />
                </div>
                {recentChats.map((chat) => {
                    return (
                        <button className={styles['chat-button']}>
                            <img src={chat.image} alt="" />
                            <h1>{chat.senderName}</h1>
                            <p>{chat.message}</p>
                            <small>{chat.since}</small>
                        </button>
                    )

                })}
            </div>
            <div className={styles['messages-chat']}>

             < MessagesChat/>
            </div>
        </div>
    )
}

export default Messages;