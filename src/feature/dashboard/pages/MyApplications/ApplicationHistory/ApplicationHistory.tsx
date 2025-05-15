import { FC } from 'react';
import styles from './applicationHistory.module.css';

interface Application {
    id: number;
    companyLogo: string;
    companyName: string;
    role: string;
    dateApplied: string;
    status: 'In Review' | 'Shortlisted' | 'Offered' | 'Interviewing' | 'Unsuitable' | 'Assessment' | 'Hired';
}

interface ApplicationHistoryProps {
    applications: Application[];
}

const ApplicationHistory: FC<ApplicationHistoryProps> = ({ applications }) => {
    console.log('applications', applications);
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Applications History</h2>
                <div className={styles.actions}>
                    <button className={styles.searchButton}>
                        <img src="/src/assets/icons/Search.svg" alt="search" />
                        Search
                    </button>
                    <button className={styles.filterButton}>
                        <img src="/src/assets/icons/Filter.svg" alt="filter" />
                        Filter
                    </button>
                </div>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company Name</th>
                        <th>Roles</th>
                        <th>Date Applied</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application, idx) => (
                        <tr key={application.id} className={`${idx%2 === 0 ? styles.evenRow : styles.oddRow}`}>
                            <td>{application.id}</td>
                            <td>
                                <div className={styles.company}>
                                    <img 
                                        src={application.companyLogo} 
                                        alt={application.companyName} 
                                        className={styles.companyLogo}
                                    />
                                    {application.companyName}
                                </div>
                            </td>
                            <td>{application.role}</td>
                            <td>{application.dateApplied}</td>
                            <td>
                                <span className={`${styles.status} ${styles[application.status.toLowerCase().replace(' ', '')]}`}>
                                    {application.status}
                                </span>
                            </td>
                            <td>
                                <button className={styles.moreButton}>
                                    <img src="/src/assets/icons/More.svg" alt="more" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationHistory;