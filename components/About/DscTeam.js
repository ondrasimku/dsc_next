import styles from '../../styles/About/DscTeam.module.less'
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faSpotify
} from '@fortawesome/free-brands-svg-icons';

const DscTeam = () => {
    return (
        <section className={styles.dsc_team}>
        <h1>DSC Team</h1>
        <div className={styles.cards}>
            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/trckova.png" alt="Olga Trčková"/>
                </div>
                <h2>Olga Trčková</h2>
                <p>Founder</p>
                <a href="mailto:olga.trckova@dscgallery.com">olga.trckova@dscgallery.com</a>
                <div className={styles.cards__card__links}>
                    <Link href="https://www.instagram.com/olgatrckova/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/olga-tr%C4%8Dkov%C3%A1-art-investments-art-advisory-040003100/" target="_blank">
                        <a><FontAwesomeIcon icon={faLinkedin} /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/cucka.png" alt="Edmund Čučka"/>
                </div>
                <h2>Edmund Čučka</h2>
                <p>Managing Partner</p>
                <a href="mailto:edmund.cucka@dscgallery.com">edmund.cucka@dscgallery.com</a>
                <div className={styles.cards__card__links}>
                    <Link href="https://www.instagram.com/edmund100/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/juricova.png" alt="Karolína Juřicová"/>
                </div>
                <h2>Karolína Juřicová</h2>
                <p>Curator & Art Dealer</p>
                <a href="mailto:karolina@dscgallery.com">karolina@dscgallery.com</a>
                <div className={styles.cards__card__links}>
                    <Link href="https://www.instagram.com/keroline23/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/karol%C3%ADna-ju%C5%99icov%C3%A1-b3aa48196/" target="_blank">
                        <a><FontAwesomeIcon icon={faLinkedin} /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/novakova.png" alt="Nikola Nováková"/>
                </div>
                <h2>Nikola Nováková</h2>
                <p>Art Dealer & PR Executive</p>
                <a href="mailto:nikola@dscgallery.com">nikola@dscgallery.com</a>
                <div className={styles.cards__card__links}>
                    <Link href="https://www.instagram.com/novakovaniko/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/nikola-novakova-7b7123160/?originalSubdomain=cz" target="_blank">
                        <a><FontAwesomeIcon icon={faLinkedin} /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/kopecka.png" alt="Aneta Kopecká"/>
                </div>
                <h2>Aneta Kopecká</h2>
                <p>Gallery Manager</p>
                <a href="mailto:aneta@dscgallery.com">aneta@dscgallery.com</a>
                <div className={styles.cards__card__links}>
                    <Link href="https://www.instagram.com/kopeckaanet/" target="_blank">
                        <a><FontAwesomeIcon icon={faInstagram} /></a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/aneta-kopeck%C3%A1-76679b152/" target="_blank">
                        <a><FontAwesomeIcon icon={faLinkedin} /></a>
                    </Link>
                </div>
            </div>

            <div className={styles.cards__card}>
                <div className={styles.cards__card__imageDiv}>
                    <img src="/images/About/sec.png" alt="Petr Šec"/>
                </div>
                <h2>Petr Šec</h2>
                <p>Founder</p>
            </div>
        </div>
    </section>
    )
}

export default DscTeam;