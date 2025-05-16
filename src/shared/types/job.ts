
export interface Skill {
    skillId: string;
    skillName: string;
}
export interface Job {
    jobId: number;
    jobTitle: string;
    description: string;
    location: string;
    jobType: string;
    postDate: string;
    expiredDate: string;
    experienceLevel: string;
    address: {
        city: string,
        country: string,
        region: string,
        street: string
    }
    skillIds: number[];
    companyId: number;

}


/*



{
  "jobTitle": "string",
  "description": "string",
  "location": "string",
  "jobType": "string",
  "postDate": "2025-05-15T01:37:58.093Z",
  "expiredDate": "2025-05-15T01:37:58.093Z",
  "experienceLevel": "string",
  "address": {
    "city": "string",
    "country": "string",
    "region": "string",
    "street": "string"
  },
  "companyId": 0,
  "skillIds": [
    0
  ]
}

*/