
import arrowRight from '@/assets/icons/arrowRight.svg'
import styles from './categoryCard.module.css'
interface CardProps {
    number: number;
    title: string;
    logo: string;
}




const Card:React.FC<CardProps> = ({number, title, logo = 'no-image.png'}) => {
    return (
        <>
        <div className={styles['card']}>
            <img src={logo} alt={title} />
            <h2 className={styles['card-title']}>{title}</h2>
            <div className={styles['card-description-container']}>
                    <p className={styles['card-description']}>{number} Jobs Available</p>
                    <span className={styles['card-description-icon']}><img src={arrowRight} alt="arrow right" /></span>
            </div>
           
        </div>
        </>
    )
}

export default Card;