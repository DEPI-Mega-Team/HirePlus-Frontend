import Logo from '@/shared/components/logo/Logo';
import styles from './companyDashboard.module.css'
import { Company } from '@/shared/types/company';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';



const CompanyDashboard = () => {
    const [company, setCompany] = useState<Company>();
    return (
        <div>
            <div>
                <div>
                    <Logo position='relative'/>
                </div>
                <div>
                    <div><button><NavLink to='/company/dashboard'>Dashboard</NavLink></button></div>
                    <div><button><NavLink to='/company/dashboard/job-post'>Job Post</NavLink></button></div>
                    <div><button><NavLink to='/company/dashboard/my-jobs'>My Jobs</NavLink></button></div>
                    <div><button><NavLink to='/company/dashboard/profile'>My Profile</NavLink></button></div>
                    <div></div>
                    <div><button><NavLink to='/company/dashboard/settings'>Settings</NavLink></button></div>
                    <div><button><NavLink to='/company/dashboard/help'>Help Center</NavLink></button></div>
                </div>
                <div>
                    <div>
                        <img src={company?.logo} alt="" />
                        <p>{company?.name}</p>
                        <button><NavLink to='/company/dashboard/job-post'>Post a Job</NavLink></button>
                    </div>
                    <div>
                    <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDashboard;