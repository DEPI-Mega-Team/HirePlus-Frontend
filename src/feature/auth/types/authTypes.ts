export interface loginBody {
    email: string;
    password: string;    
}

export interface signupBodyUser {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface signupBodyCompany {
    companyName: string;
    email: string;
    password: string;
    role: string;
    address: string;
}

export type AccountType = 'jobseeker' | 'company';
