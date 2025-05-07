import SearchBar from "../searchBar/SearchBar";
import styles from './secondHero.module.css';
import underline2 from '@/assets/imgs/underline-2.png';
import pattern2 from '@/assets/imgs/Pattern-2.png';
import pattern3 from '@/assets/imgs/Pattern-3.png';
import businessMan from '@/assets/imgs/black businessman in blue suit looking at phone.png';

interface SecondHeroProps {
    onSearch?: (searchParams: { keyword: string; location: string }) => void;
}

const SecondHero = ({ onSearch }: SecondHeroProps) => {
    return (
        <div className={styles['search-container-hero']}>
            <div className={styles['search-container-hero-content']}>
                <h1 className={styles['search-container-hero-title']}> Find your <span className={styles['search-container-hero-title-span']}>dream job</span></h1>
                <p className={styles['search-container-hero-content-text']}>Find your next career at companies like HubSpot, Nike, and Dropbox</p>
                <span className={styles['search-container-hero-content-searchBar']}>
                    <SearchBar onSearch={onSearch} />
                </span>
            </div>
            <img className={styles['search-container-hero-underline2']} src={underline2} alt="" />
            <img className={styles['search-container-hero-pattern2']} src={pattern2} alt="" />
            <img className={styles['search-container-hero-pattern3']} src={pattern3} alt="" />
            <img className={styles['search-container-hero-businessMan']} src={businessMan} alt="" />
        </div>
    )
}

export default SecondHero;