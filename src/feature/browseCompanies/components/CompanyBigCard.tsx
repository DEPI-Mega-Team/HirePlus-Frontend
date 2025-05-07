import { Company } from "@/shared/types/company";
import styles from "./companyBigCard.module.css";
const CompanyBigCard = ({name,description, logo, industry}: Company) => {
    return (
        <div className={styles.companyBigCard}>
            <img src={logo} alt={name} />
            <h1>{name}</h1>
            <p>{industry}</p>
        </div>
    )
}

export default CompanyBigCard;