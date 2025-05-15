import styles from './calendar.module.css'

interface CalendarProps {
    appointments: {
        date: Date;
        title: string;
    }[];
}

const Calendar = ({appointments}: CalendarProps) => {
    
    const hours = (() => {
        const timeSlots = [];
        for (let i = 0; i < 24; i++) {
            const hour = i < 10 ? `0${i}` : i;
            timeSlots.push(`${hour}:00`);
            timeSlots.push(`${hour}:30`);
        }
        return timeSlots;
    })()

    return (
        <div className={styles.calendar}>
           <div className={styles['calendar-header']}>
            <h1>Upcoming Interviews</h1>
            <p>
            {new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
            })} </p>

            </div>
            <div className={styles['calendar-grid']}>
                {hours.map((hour, index) => {
                    return (
                    <div key={index} className={styles['calendar-hour']}>
                        {hour}
                        
                        <div className={styles['horizontal-line']}></div>
                            {
                                appointments.filter(appointment => appointment.date.getHours() === Number.parseInt(hour.split(':')[0]) && ((hour.split(':')[1] === "00" && appointment.date.getMinutes() <= 30) || (hour.split(':')[1] === "30" && appointment.date.getMinutes() <= 59 && appointment.date.getMinutes() >= 30)) ).map((appointment, index) => {
                                    return (
                                        <div key={index} className={styles['appointment']}>
                                            <div>
                                                {appointment.title}
                                            </div>
                                            <div>
                                                {appointment.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>

                                    )})
                            }
                    </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Calendar;