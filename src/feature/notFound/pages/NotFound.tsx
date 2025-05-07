import Footer from "@/shared/components/footer/Footer";
import Header from "@/shared/components/header/Header";
import styles from './notFound.module.css';
const NotFound = () => {
  return (
    <div>
        <Header/>
        <div className={styles['not-found-container']}>
            404 | Page Not Found
        </div>
        <Footer/>
      
    </div>
  )
}   

export default NotFound;