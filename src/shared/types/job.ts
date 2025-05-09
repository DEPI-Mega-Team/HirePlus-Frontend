
export interface Skill {
    skillId: string;
    skillName: string;
}
export interface Job {
    jobId: string;
    jobTitle: string;
    description: string;
    location: string;
    jobType: string;
    postDate: string;
    expiredDate: string;
    experienceLevel: string;
    skills: Skill[];
    companyId: string;
    onClick: () => void;

}