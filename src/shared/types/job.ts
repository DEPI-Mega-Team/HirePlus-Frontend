import { Company } from "./company";

export interface Job {
    id: string;
    jobTitle: string;
    description: string;
    location: string;
    jobType: string;
    postedDate: string;
    expiryDate: string;
    experienceLevel: string;
    skillNames: string[];
    numberOfApplicants: number;
    capacity: number;
    categoryNames: string[];
    company: Company;

}