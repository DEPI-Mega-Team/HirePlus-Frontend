import { useEffect, useState } from 'react';
import styles from './admin.module.css'
import { Company } from '@/shared/types/company';
import { Job, Skill } from '@/shared/types/job';
import Tab from '../landing/components/tab/Tab';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


type ActiveTabs = 'COMPANY' | 'JOBS'
const Admin = () => {    const [companies, setCompanies] = useState<Company[]>([])
    const [Jobs, setJobs] = useState<Job[]>([])
    const [activeTab, setActiveTab] = useState<ActiveTabs>('COMPANY')
    const [jobTitle, setJobTitle] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [postDate, setPostDate] = useState('')
    const [expiredDate, setExpiredDate] = useState('')
    const [experienceLevel, setExperienceLevel] = useState('')
    const [jobType, setJobType] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [region, setRegion] = useState('')
    const [street, setStreet] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [skillIds, setSkillIds] = useState<number[]>([])
    const [skillId, setSkillId] = useState<number>()

    const [token, setToken] = useState<string>('')
    const url = import.meta.env.VITE_API_BASE_URL


    const deleteJob = async (id: number) => {
        const res = await fetch(`${url}/api/job/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    useEffect(() => {

        (async () => {
            const res = await fetch(`${url}/api/profile/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email: 'ahmed@example.com',
                    password: 'asdASD123!@#'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res);

            if (res.ok) {
                const data = await res.json()
                console.log(data);
                setToken(data.token);

            }

        })();

    }, [])


    useEffect(() => {


        (async () => {
            const res = await fetch(`${url}/api/profile/user`,
                {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(res);
            
            if(res.ok)
            {
                const data = await res.json();
                console.log(data);
                
            }


        })();


    },[token])


    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_BASE_URL}/api/company`)
            if (res.ok) {
                try {
                    const data = await res.json()
                    setCompanies(data)
                }
                catch (e) {
                    console.log(e);
                    
                }
               
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_BASE_URL}/api/job`)
            if (res.ok) {
                try {
                    const data = await res.json()
                    setJobs(data)
                }
                catch (e) {
                    console.log(e);
                    
                }
               
            }
        })()
    }, [])


    const deleteCompany = async (id: any) => {
        const res = await fetch(`${API_BASE_URL}/api/company/${id}`, {
            method:'DELETE'
        })
        if (res.ok)
        {
            try{
                const data = await res.text()
                console.log("Company Deleted Successfuly");
                setCompanies((prev) => {
                    return prev.filter(company => company.companyId != id)
                })
            }
            catch (e)
            {
                console.log("ERROR WHILE CONVERTING TO TEXT", e);
                
            }
        }
    }
    const insertJob = async (e: React.FormEvent) => {
        e.preventDefault();        const job = {
            jobTitle,
            description,
            location,
            postDate,
            expiredDate,
            experienceLevel,
            jobType,
            address: {
                city,
                country,
                region,
                street
            },
            companyId,
            skillIds
        };

        const res = await fetch(`${API_BASE_URL}/api/job`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });

        if (res.ok) {
            const newJob = await res.json();
            setJobs(prev => [...prev, newJob]);
            // Reset form
            setJobTitle('');
            setDescription('');
            setLocation('');
            setPostDate('');
            setExpiredDate('');
            setExperienceLevel('');
            setCity('');
            setCountry('');
            setRegion('');
            setStreet('');
            setCompanyId('');
            setSkillIds([]);
            console.log(res);
            
        }
        else
        {
            console.log(res);
            
        }
        
    }
    return (
        <div>

        <div>
            <button onClick={() => setActiveTab('JOBS')}>Jobs</button>
            <button onClick={() => setActiveTab('COMPANY')}>Companies  </button>
        </div>

            <div className={styles['container']}>
                {activeTab === 'COMPANY' && 
                
                    <div>
                        <h1>Companies</h1>
                        <div className={styles['all-companies']}>
                            {
                                companies?.map((company) => {
                                    return (
                                        <div>
                                            <div className={styles['company']}>
                                                <img src={company.logo} alt="" />
                                                <p>{company.companyId}</p>
                                                <p>{company.name}</p>
                                                <p>{company.website}</p>
                                                <p>{company.industry}</p>
                                                <p>{company.rating}</p>
                                                <p>{company.size}</p>
                                                <button onClick={() => deleteCompany(company.companyId)}>Delete</button>
                                                <button>Edit</button>
                                            </div>
                                            <div>
                                                <p>{company.description}</p>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {
                    activeTab === 'JOBS' && 

                    <div>
                        <div>
                            <h1>Insert Jobs </h1>
                                <form method='POST' className={styles['admin-form']}  onSubmit={insertJob}>
                                <div>
                                    <label htmlFor="">Job Title</label>
                                    <input 
                                        type="text" 
                                        name="jobTitle" 
                                        id="jobTitle" 
                                        placeholder='Job Title'
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Description</label>
                                    <input 
                                        type="text" 
                                        name="description" 
                                        id="description" 
                                        placeholder='Description'
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Location</label>
                                    <input 
                                        type="text" 
                                        name="location" 
                                        id="location" 
                                        placeholder='Location'
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Post Date</label>
                                    <input 
                                        type="date" 
                                        name="postDate" 
                                        id="postDate" 
                                        placeholder='Post Date'
                                        onChange={(e) => setPostDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Expired Date</label>
                                    <input 
                                        type="date" 
                                        name="expiredDate" 
                                        id="expiredDate" 
                                        placeholder='Expired Date'
                                        onChange={(e) => setExpiredDate(e.target.value)}
                                    />
                                </div>                                <div>
                                    <label htmlFor="">Experience Level</label>
                                    <input 
                                        type="text" 
                                        name="experienceLevel" 
                                        id="experienceLevel" 
                                        placeholder='Experience Level'
                                        onChange={(e) => setExperienceLevel(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Job Type</label>
                                    <input 
                                        type="text" 
                                        name="jobType" 
                                        id="jobType" 
                                        placeholder='Job Type'
                                        onChange={(e) => setJobType(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Address</label>
                                    <input 
                                        type="text"  
                                        name="city" 
                                        id="city" 
                                        placeholder='City'
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <input 
                                        type="text"  
                                        name="country" 
                                        id="country" 
                                        placeholder='Country'
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                    <input 
                                        type="text"  
                                        name="region" 
                                        id="region" 
                                        placeholder='Region'
                                        onChange={(e) => setRegion(e.target.value)}
                                    />
                                    <input 
                                        type="text"  
                                        name="street" 
                                        id="street" 
                                        placeholder='Street'
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="">Company Id</label>
                                    <input 
                                        type="text" 
                                        name="companyId" 
                                        id="companyId" 
                                        placeholder='Company Id'
                                        onChange={(e) => setCompanyId(e.target.value)}
                                    />
                                </div>
                                <div>
                                    
                                    <label htmlFor="">Skills IDs</label>
                                    <input 
                                        type="text"
                                        onChange={(e) => setSkillId(parseInt(e.target.value))}
                                    />
                                    <button type="button" onClick={(e) => setSkillIds(prev => [...prev, skillId as number])}>add skill id</button>
                                        {
                                            skillIds?.map((skill) => {
                                                return (
                                                    <button>
                                                        {skill}
                                                    </button>
                                                )
                                            })
                                        }
                                </div>
                                <button type="submit">Insert Job</button>
                            </form>

                        </div>
                            <div>
                                <h1>Jobs</h1>
                                <div className={styles['all-jobs']}>
                                    {
                                        Jobs?.map((job) => {
                                            return (
                                                <div>
                                                    <div className={styles['job']}>
                                                        <p>{job.jobId}</p>
                                                        <p>{job.jobTitle}</p>
                                                        <p>{job.description}</p>
                                                        <p>{job.location}</p>
                                                        <p>{job.postDate}</p>
                                                        <p>{job.expiredDate}</p>
                                                        <p>{job.experienceLevel}</p>
                                                        <p>{job.companyId}</p>
                                                        <button onClick={() => deleteJob(job.jobId)}>Delete</button>
                                                        <button>Edit</button>
                                                    </div>
                                                    <div>
                                                        {job.skillIds?.map(skill => (
                                                            <span key={skill}>{skill}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Admin;