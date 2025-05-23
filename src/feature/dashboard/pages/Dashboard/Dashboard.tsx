import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import styles from "./dashboard.module.css";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import JobAppliedStatusCard from "../../components/JobAppliedStatusCard/JobAppliedStatusCard";
import Calendar from "../../components/Calendar/Calendar";

const Dashboard = () => {
    const AppliedJobs = [
        { id: 1, title: "Software Engineer", status: "Applied", Date: "2023-03-15" },
        { id: 2, title: "Data Scientist", status: "Rejected", Date: "2023-03-16" },
        { id: 3, title: "Product Manager", status: "Interview", Date: "2023-03-17" },
        { id: 4, title: "UX Designer", status: "Applied", Date: "2023-03-18" },
        { id: 5, title: "DevOps Engineer", status: "Rejected", Date: "2023-03-19" },
        { id: 3, title: "Product Manager", status: "Interview", Date: "2023-03-17" },
        { id: 4, title: "UX Designer", status: "Applied", Date: "2023-03-18" },
        { id: 5, title: "DevOps Engineer", status: "Rejected", Date: "2023-03-19" },
    ];
    return (
        <div className={styles['dashboard']}>
            <DashboardHeader title="Dashboard" />
            <div className={styles['dashboard-cards']}>
                <div className={styles['dashboard-cards-col']}>
                    <DashboardCard title="Total Applications" value="40">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19L18 9.41421L12.5859 4.00011L7 4ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H12.586C13.1163 2.00011 13.6251 2.21086 14.0001 2.58589M14.0001 2.58589L19.414 7.99979C19.414 7.99975 19.414 7.99982 19.414 7.99979C19.789 8.37476 19.9999 8.88345 20 9.41379V19C20 19.7957 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7957 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM8 16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16Z" fill="#25324B" />
                            <rect x="8" y="11" width="8" height="2" rx="1" fill="#25324B" />
                            <rect x="8" y="15" width="8" height="2" rx="1" fill="#25324B" />
                        </svg>
                    </DashboardCard>
                    <DashboardCard title="Total Applications" value="40">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C6.73478 4 6.48043 4.10536 6.29289 4.29289C6.10536 4.48043 6 4.73478 6 5V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19L18 9.41421L12.5859 4.00011L7 4ZM4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H12.586C13.1163 2.00011 13.6251 2.21086 14.0001 2.58589M14.0001 2.58589L19.414 7.99979C19.414 7.99975 19.414 7.99982 19.414 7.99979C19.789 8.37476 19.9999 8.88345 20 9.41379V19C20 19.7957 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7957 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7957 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868M8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM8 16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16Z" fill="#25324B" />
                            <rect x="8" y="11" width="8" height="2" rx="1" fill="#25324B" />
                            <rect x="8" y="15" width="8" height="2" rx="1" fill="#25324B" />
                        </svg>
                    </DashboardCard>
                </div>
                <div className={styles['dashboard-cards-col2']}>
                    <JobAppliedStatusCard />
                </div>
                <div className={styles['dashboard-cards-col3']}>
                    <Calendar appointments={[
                        { date: new Date('2023-03-15T10:50:00'), title: 'Meeting'},
                        { date: new Date('2023-03-16T12:23:00'), title: 'Lunch'},
                        { date: new Date('2023-03-17T09:00:00'), title: 'Conference'},
                        { date: new Date('2023-03-17T09:59:00'), title: 'Match'},
                        ]} />
                </div>

            </div>

            <div className={styles['applied-jobs-container']}>
                <h1>Recent Applications History</h1>
                <div className={styles['horizontal-line']}></div>
                <div className={styles['applied-jobs']}>
                    {
                        AppliedJobs.map((job, idx) => {
                            return (
                                <div className={`${styles['applied-job']} ${idx%2 === 0 ? styles['dark-mode'] :''}`} key={job.id}>
                                    <h2>{job.title}</h2>
                                    <p>Status: {job.status}</p>
                                    <p>Date: {job.Date}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;