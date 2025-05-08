import { Company } from "@/shared/types/company";
import styles from "./companyBigCard.module.css";
const CompanyBigCard = ({name,description, logo, industry}: Company) => {
    return (
        <div className={styles.companyBigCard}>
            {logo && <img className={styles.companyBigCardImage} src={logo} alt={name} />}
            <h1>{name}</h1>
            <p>{industry}</p>
            <p>{description}</p>
        </div>
    )
}

export default CompanyBigCard;