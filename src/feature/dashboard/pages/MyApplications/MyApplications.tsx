import styles from './myApplications.module.css'
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader'
import { User } from '@/shared/types/auth'
import { useEffect, useState } from 'react'
import Tab from './Tab/Tab'
import Pagination from '@/shared/components/pagination/Pagination'
import ApplicationHistory from './ApplicationHistory/ApplicationHistory'

const mock:User = {
    email:"email@go.com",
    fullName: "Eslam",
    id:"3",
    role: "User"
}

interface Application {
    id: number;
    companyLogo: string;
    companyName: string;
    role: string;
    dateApplied: string;
    status: 'In Review' | 'Shortlisted' | 'Offered' | 'Interviewing' | 'Unsuitable' | 'Assessment' | 'Hired';
}
type ActiveTabs = 'all' | 'inReview' | 'interviewing' | 'assessment' | 'offered' | 'hired'


const allApplications: Application[] = [
    {
        id: 1,
        companyLogo: 'https://via.placeholder.com/50',
        companyName: 'Company A',
        role: 'Software Engineer',
        dateApplied: '2023-07-19',
        status: 'In Review'
    },
    {
        id: 2,
        companyLogo: 'https://via.placeholder.com/50',
        companyName: 'Company B',
        role: 'Data Scientist',
        dateApplied: '2023-07-20',
        status: 'Shortlisted'
    },
    {
        id: 3,
        companyLogo: 'https://via.placeholder.com/50',
        companyName: 'Company C',
        role: 'Product Manager',
        dateApplied: '2023-07-21',
        status: 'Offered'
    },
    {
        id: 4,
        companyLogo: 'https://via.placeholder.com/50',
        companyName: 'Company D',
        role: 'UX Designer',
        dateApplied: '2023-07-22',
        status: 'Interviewing'
    },
    {
        id: 5,
        companyLogo: 'https://via.placeholder.com/50',
        companyName: 'Company E',
        role: 'DevOps Engineer',
        dateApplied: '2023-07-23',
        status: 'Unsuitable'
    }
]
const MyApplications = () => {
    
    const [activeTab, setActiveTab] = useState<ActiveTabs>('all')
    const [currentUser, setCurrentUser] = useState<User>(mock)
    const [applications, setApplications] = useState<Application[]>(allApplications)

    

    return (
        <div className={styles['my-applications']}>
            <DashboardHeader title='My Applications'/>
            <div>
                <h3>Keep It Up {currentUser.fullName}</h3>
                <p>Here is job applications status from July 19 - July 25.</p>
            </div>
            <div className={styles['tabs']}>
                <button onClick={() => {setActiveTab('all'); setApplications(allApplications)}} >
                    <Tab active={activeTab === 'all'}>
                        All
                    </Tab>
                </button>
                <button onClick={() => {setActiveTab('inReview'); setApplications(allApplications.filter((app) =>  app.status === 'In Review'))} }>
                    <Tab active={activeTab === 'inReview'}>
                        In Review
                    </Tab>
                </button>
                <button onClick={() => { setActiveTab('interviewing'); setApplications(allApplications.filter((app) => app.status === 'Interviewing'))}}>
                    <Tab active={activeTab === 'interviewing'}>
                        Interviewing
                    </Tab>
                </button>
                <button onClick={() => {setActiveTab('assessment'); setApplications(allApplications.filter((app) => app.status === 'Assessment'))}}>
                <Tab active ={activeTab === 'assessment'}>
                    Assessment
                </Tab>
                </button>
                <button onClick={() => {setActiveTab('offered'); setApplications(allApplications.filter((app) => app.status === 'Offered'))}}>
                    <Tab active={activeTab === 'offered'}>
                        Offered
                    </Tab>
                </button>
                <button onClick={() =>{ setActiveTab('hired'); setApplications(allApplications.filter((app) => app.status === 'Hired'))}}>  
                    <Tab active={activeTab === 'hired'}>
                        Hired
                    </Tab>
                </button>

            </div>
            <div>
                <h2>Application History</h2>

            </div>
            <div className={styles['application-history']}>
                <ApplicationHistory applications={applications}/>
                <Pagination currentPage={1} totalPages={10}onPageChange={()=>{}}/>
            </div>
        </div>
    )
}

export default MyApplications;