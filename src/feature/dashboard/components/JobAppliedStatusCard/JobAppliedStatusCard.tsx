import styles from './jobAppliedStatusCard.module.css'
import { PieChart, Pie, Cell } from 'recharts';

interface JobAppliedStatusCardProps {
    totalJobs?: number;
    totalAppliedJobs?: number;
    totalRejectedJobs?: number;

}


const JobAppliedStatusCard = (props : JobAppliedStatusCardProps | undefined) => {
    const data = [{ name: 'Applied', value: 20 }, { name: 'Rejected', value: 10 }]
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    return (
        <div className={styles['job-applied-status-card']}>
            <h1 className={styles['job-applied-status-card-title']}>Job Applied Status</h1>
            <div className={styles['pie-chart-container']}>
                <div className={styles['pie-chart']}>
                    <PieChart width={200} height={200}>
                        <Pie
                            data={data}
                            innerRadius={70}
                            outerRadius={90}
                            startAngle={90}
                            endAngle={450}
                            paddingAngle={2}
                            nameKey="name"
                            dataKey="value"
                        >

                            <Cell fill={"#EAEBED"} />
                            <Cell fill={"#293A48"} />


                        </Pie>
                    </PieChart>
                </div>
                <div className={styles['pie-chart-label-one']}>
                    <p>{(data[0].value * 100 / total).toFixed(0)}%</p>
                    <p>Rejected</p>

                </div>
                <div className={styles['pie-chart-label-two']}>
                    <p>{(data[1].value * 100 / total).toFixed(0)}%</p>
                    <p>Applied</p>
                </div>
            </div>
        </div>
    )
}   

export default JobAppliedStatusCard;