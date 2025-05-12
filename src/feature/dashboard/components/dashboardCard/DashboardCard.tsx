import styles from './dashboardCard.module.css';


interface DashboardCardProps {
    title: string;
    value: string;
    children: React.ReactNode;
}

const DashboardCard = ({title,value, children}: DashboardCardProps) => {
    return (
        <div className={styles['dashboard-card']}>
            <h2>{title}</h2>
            <h2>{value}</h2>
            {children}
        </div>
    )
}

export default DashboardCard;