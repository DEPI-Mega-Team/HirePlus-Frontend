import InputField from '@/shared/components/inputField/InputField';
import styles from './footer.module.css';
import LineSeparator from '@/shared/components/lineSeparator/LineSeparator';
import Button from '@/shared/components/button/Button';
const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['footer-container']}>

                <div className={styles['footer-container__about-container']}>
                    <div className={styles['footer-container__about-description']}>
                        <p>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
                    </div>
                    <div className={styles['footer-container__about']}>
                        <div >
                            <h3>About</h3>
                            <ul className={styles['footer-container__about-list']}>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <ul className={styles['footer-container__about-list']}>
                                <li>Help Docs</li>
                                <li>Guide</li>
                                <li>Updates</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles['footer-container__subscribe']}>
                        <h3>Get Job Notifications</h3>
                        <p>The latest job news, articles, sent to your inbox weekly.</p>
                        <div className={styles['footer-container__subscribe-form']}>
                            <InputField name='email' id='email' type="email" placeholder='Enter your email' />
                            <Button label='Subscribe' />
                        </div>
                </div>
                </div>
                <div className={styles['footer-container__line-separator']}>
                    <LineSeparator/>
                </div>
                <div className={styles['footer-container__copyright']}>
                    <p>2025 @ HIRE PLUS. All rights reserved.</p>
                    <ul className={styles['footer-container__copyright-social-media']}>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}   

export default Footer;