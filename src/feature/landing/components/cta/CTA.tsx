import styles from './cta.module.css'
import ctaImg from '@/assets/imgs/isometric view of young woman working on laptop.png'
import ctaBg from '@/assets/imgs/bg1.png'
import Button from '@/shared/components/button/Button'
const CTA = () => {
    return (
        <>
        <div className={`${styles['cta']} d-none`}>
            <img src={ctaBg} alt="cta-bg" className={styles['cta-bg']}  />
            <div className={styles['cta-container']}>
                <div className={styles['cta-content']}>
                        <h1 className={styles['cta-title']}>Start posting jobs today</h1>
                        <p className={styles['cta-description']}>start posting jobs for only $10</p>
                        <div className={styles['cta-button-container']}>
                            <Button>Sign Up for free</Button>
                        </div>
                </div>
                <img src={ctaImg} alt="cta-img" className={styles['cta-img']} />
            </div>
        </div>
        </>
    )
}

export default CTA;