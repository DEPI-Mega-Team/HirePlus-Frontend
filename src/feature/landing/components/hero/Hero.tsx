import underline from '@/assets/imgs/underline.png'
import styles from './hero.module.css'
import manThumb from '@/assets/imgs/close up of black businessman in blue suit giving thumbs up.png'
const Hero = () => {    
    return (
        <>
        <div className={styles['hero']}>

            <div className={styles['hero-container']}>
                    <div className={styles['hero-container__title-container']}>
                        <div className={styles['hero-container__title']}>
                            <h1>Discover</h1>
                            <h1>more than </h1>
                            <h1>5000+ Jobs</h1>
                        </div>
                        <div>
                            <img src={underline} alt="underline" />
                        </div>
                        <p className={styles['hero-container__description']}>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                    </div>
                    <img className={styles['hero-container__man-thumb']} src={manThumb} alt="man raising thumb" />
            </div>
        </div>
        </>
    )
}
export default Hero;