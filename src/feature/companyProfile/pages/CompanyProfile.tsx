import { Company } from "@/shared/types/company";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useCompanyProfileService from "../services/useCompanyProfileService";
import Pattern4 from "@/assets/imgs/Pattern-4.png";
import Pattern5 from "@/assets/imgs/Pattern-5.png";
import styles from "./companyProfile.module.css";


const CompanyProfile = () => {
    const {id} = useParams() as {id: string};
    const [company, setCompany] = useState<Company | null>(null);
    useEffect(() => {
        (async () => {
            const data = await useCompanyProfileService(id);
            setCompany(data);
        })()
        
    }, [id]);
    return (
        <div className={styles['company-profile-container']}>
            <img className={styles['company-profile-container__pattern4']} src={Pattern4} alt="" />
            <img className={styles['company-profile-container__pattern5']} src={Pattern5} alt="" />
            <p>Home/Companies/{company?.name}</p>
            <div>
                <img src={company?.logo} alt="" />
                <h1>{company?.name}</h1>
                <div>
                    <p>{company?.location}</p>
                    <p>{company?.website}</p>
                    <p>{company?.size}</p>
                    <p>{company?.industry}</p>
                    <p>{company?.rating}</p>
                </div>
                
            </div>
            <div>
                <h2>About</h2>
                <p>{company?.description}</p>
            </div>
        </div>
    )
}

export default CompanyProfile;