export interface Job {
    id: string;
    jobTitle: string;
    description: string;
    location: string;
    jobType: string;
    postedDate: string;
    expiryDate: string;
    experienceLevel: string;
    companyName: string;
    skillNames: string[];
    logo?: string;
    numberOfApplicants: number;
    capacity: number;
    categoryNames: string[];

}