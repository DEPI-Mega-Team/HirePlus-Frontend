import { Link } from "react-router-dom";
import styles from "./dashboardHeader.module.css";

const DashboardHeader = ({title}: {title: string}) => {

    return (
        <div className={styles['dashboard-header']}>
            <h1>{title}</h1>
            <div className={styles['dashboard-header-actions']}>
                <button className={styles['dashboard-header-actions-button']}>
                   <Link to="/logout">Logout</Link>
                </button>
            </div>
        </div>
    )
}


export default DashboardHeader;