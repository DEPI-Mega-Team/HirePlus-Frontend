import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import styles from "./dashboard.module.css";
const Dashboard = () => {
    return (
        <div className={styles['dashboard']}>
            <DashboardHeader title="Dashboard" />
        </div>
    )
}

export default Dashboard;