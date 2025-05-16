import underline from '@/assets/imgs/underline.png'
import styles from './hero.module.css'
import manThumb from '@/assets/imgs/close up of black businessman in blue suit giving thumbs up.png'
import SearchBar from '@/shared/components/searchBar/SearchBar'
import { useNavigate } from 'react-router-dom'

const Hero = () => {    
    const navigate = useNavigate();
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
                            <img className={styles['hero-container__underline']} src={underline} alt="underline" />
                        </div>
                        <p className={styles['hero-container__description']}>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
                        
                        <div className={styles['hero-container__search']}>
                            <SearchBar title1='Job Title' title2='Location' onSearch={(params) => navigate(`/search?${new URLSearchParams(params).toString()}`)} />
                        </div>
                    </div>
                    <img className={styles['hero-container__man-thumb']} src={manThumb} alt="man raising thumb" />
            </div>
        </div>
        </>
    )
}
export default Hero;