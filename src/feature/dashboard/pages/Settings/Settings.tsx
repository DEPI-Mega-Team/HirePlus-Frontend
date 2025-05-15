import styles from './settings.module.css'
import { useState } from 'react';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import { Outlet } from 'react-router';
import Tab from '@/feature/landing/components/tab/Tab';
type TabType = 'MyProfile' | 'LoginDetails'
const Settings = () => {
    const [activeTab, setActiveTab] = useState('MyProfile' as TabType);  
    return (
        <div>
           < DashboardHeader title='Settings'/>
            <div className={styles['tabs']}>
                <button className={styles['button']} onClick={() => setActiveTab('MyProfile')}>
                    <Tab isActive={activeTab === 'MyProfile'} to='/dashboard/settings/my-profile' title='My Profile' />
                </button>
                <button className={styles['button']} onClick={() => setActiveTab('LoginDetails')}>
                    <Tab isActive={activeTab === 'LoginDetails'} to='/dashboard/settings/login-details' title='Login Details' />
                </button>
            </div>
           < Outlet/>
        </div>
    )
}

export default Settings;  