import styles from '../styles/Footer.module.less'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faFacebook,
    faInstagram,
    faSpotify
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__line}>
                <div className={styles.footer__line__left}>DSC Gallery</div>
                <div className={styles.footer__line__right__socials}>
                    <Link href="https://open.spotify.com/episode/73pduv4PSYX0IYm76okPXk?si=UXKgfd3nQ1ek8BHft5JEKA&nd=1" target="_blank">
                        <a><FontAwesomeIcon icon={faSpotify} size="xl" /></a>
                    </Link>
                    <Link href="https://www.facebook.com/dscgallery" target="_blank">
                        <a><FontAwesomeIcon icon={faFacebook} size="xl" /></a>
                    </Link>
                    <Link href="https://www.instagram.com/dsc_gallery/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.footer__line__reverse}>
                <div className={styles.footer__line__left}>
                        Mon–⁠Fri 1pm–⁠6pm
                </div>
                <div className={styles.footer__line__right}>
                    <a href="tel:+420604204653">+420 604 204 653</a>
                </div>
            </div>

            <div className={styles.footer__line}>
                <div className={styles.footer__line__left}>
                        Sat–⁠Sun Closed
                    </div>
                <div className={styles.footer__line__right}>
                    <a href="mailto:info@dscgallery.com">info@dscgallery.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;