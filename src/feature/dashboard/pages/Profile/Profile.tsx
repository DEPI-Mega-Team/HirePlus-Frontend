import useUserData from '@/shared/hooks/useUserData';
import DashboardHeader from '../../components/dashboardHeader/DashboardHeader';
import styels from './profile.module.css';
import { User } from '@/shared/types/auth';

const Profile = () => {
    const user = useUserData() as User;
    return (
        <div>
            <  DashboardHeader title='My Profile' />
            <div className={styels['profile-container']}>

            
            <div className={`${styels['common-style']} ${styels['profile-header']}`}>
                <img src="" alt="" />
                <div>
                    <h1>{user.fullName}</h1>
                    <h2>{user.jobTitle}</h2>
                    <p>{user.location}</p>
                    {user.openForOpportunities ? (<p>'Open For Oppurtunities'</p>) : ''}

                </div>
                <div>
                    <button>Edit Profile</button>
                </div>
            </div>
            <div className={`${styels['common-style']} ${styels['profile-about']}`}>
                <div>
                    <h1>About Me</h1>
                    <button>Edit</button>
                </div>
                <p>{user.about}</p>
            </div>
            <div className={`${styels['common-style']} ${styels['profile-additional']}`}>
                <div>

                    <h1>Additional Details</h1>
                    <button>Edit</button>
                </div>
                <div>
                    <p>Email</p>
                    <p>{user.email}</p>
                </div>
                <div>
                    <p>Phone</p>
                    <p>{user.phone}</p>
                </div>
                <div>
                    <p>Languages</p>
                    <p>{user.languages?.map((language: any) => (
                        <p key={language}>{language}</p>
                    ))}</p>

                </div>
            </div>
            <div className={`${styels['common-style']} ${styels['profile-social']}`}>
                <div>
                    <h1>Social Media Links</h1>
                    <button>Edit</button>
                </div>
                {user.socialMediaLinks?.map((link: any) => (
                    <div key={link.platform}>
                        <p>{link.platform}</p>
                        <p>{link.url}</p>
                    </div>))}
            </div>

            <div className={`${styels['common-style']} ${styels['profile-experience']}`}>
                <h1>Experiences</h1>
                {
                    user.experience?.map((experience: any) => (
                        <div key={experience.companyName}>
                            <h2>{experience.companyName}</h2>
                            <p>{experience.jobTitle}</p>
                            <p>{experience.startDate} - {experience.endDate}</p>
                            <p>{experience.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className={`${styels['common-style']} ${styels['profile-education']}`}>
                <h1>Education</h1>
                {
                    user.education?.map((edu: any) => (
                        <div key={edu.institution}>
                            <h2>{edu.institution}</h2>
                            <p>{edu.degree}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <p>{edu.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className={`${styels['common-style']} ${styels['profile-projects']}`}>
                <h1>Skills</h1>
                {
                    user.skills?.map((skill, idx: any) => (
                        <div key={`skill` + idx}>
                            <h2>{skill}</h2>
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    )
}

export default Profile;