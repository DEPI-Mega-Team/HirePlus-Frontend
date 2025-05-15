export interface User {
  id: string;
  email: string;
  fullName: string;
  jobTitle: string;
  location: string;
  openForOpportunities: boolean;
  about: string;
  phone: string;
  languages: string[];
  experience: {
    companyName: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institutionName: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  socialMediaLinks: { platform: string; url: string }[];
  profilePicture: string;
  role: 'User'| 'Company';
  skills: string[];
}

