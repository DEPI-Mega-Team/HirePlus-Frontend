import { Link } from 'react-router-dom';
import styles from './tab.module.css';

interface TabProps {
  title: string;
  isActive: boolean;
  to: string;
}
const Tab:React.FC<TabProps> = ({title, isActive, to}) => {
  return (
    <Link to={to} className={styles['tab']}>
        <span className={styles['tab-title']}>{title}</span>
        <span className={`${styles['tab-active']} ${isActive ? styles['tab-active__opacity'] : ''}`}></span>
    </Link>
  )
}

export default Tab;