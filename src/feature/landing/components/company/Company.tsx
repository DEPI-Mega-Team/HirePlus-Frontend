import amd from '@/assets/logos/amd.png'
import intel from '@/assets/logos/intel.png'
import talkit from '@/assets/logos/talkit.png'
import tesla from '@/assets/logos/tesla.png'
import vodafone from '@/assets/logos/vodafone.png'
import styles from './company.module.css'

const Company = () => {
    return (
           <div className={styles['company-desk']}>
                <div className={styles['company-desk__container']}>
                    <p className={styles['company-desk__title']}>Companies we helped grow</p>
                    <div className={styles['company-desk__logos']}>
                        <img src={amd} alt="amd" />
                        <img src={intel} alt="intel" />
                        <img src={talkit} alt="talkit" />
                        <img src={tesla} alt="tesla" />
                        <img src={vodafone} alt="vodafone" />
                    </div>
                </div>
           </div>
    )
}

export default Company;