import Card from "./categoryCard/categoryCard";
import styles from './category.module.css'

const Category = () => {
    return (
        <>
        <div className={styles['category']}>
            <div className={styles['category-container']}>
                <h1 className={styles['category-title']}>Explore by Category</h1>

                <div className={styles['category-card-container']}>
                        <Card number={100} title="Design" logo={'no-image.png'} />
                        <Card number={100} title="Design" logo={'no-image.png'} />
                        <Card number={100} title="Design" logo={'no-image.png'} />
                        <Card number={100} title="Design" logo={'no-image.png'} />
                        <Card number={100} title="Design" logo={'no-image.png'} />
                </div>
               
                </div>
        </div>
        </>
    )
}

export default Category;