/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Nav.module.less'
import Link from 'next/link';

export default function Nav() {
    return (
        <header>
            <nav className={styles.navbar}>
                <span className={styles.navbar__close}>&times;</span>
                <div className={styles.navbar__logo}>
                    <Link href="/">
                        <a><img src='/images/DSC_header_logo.png' alt="DSC Logo"/></a>
                    </Link>
                </div>
                <div className={styles.navbar__links}>
                    <Link href="/">
                    <a>
                        EXHIBITIONS
                    </a>
                    </Link>
                    <Link href="/">
                    <a>
                        ARTISTS
                    </a>
                    </Link>
                    <Link href="/about">
                    <a>
                        ABOUT US
                    </a>
                    </Link>
                    <a id="cz" href="javascript:void(0)">CZ</a>
                    <a id="eng" href="javascript:void(0)">ENG</a>
                </div>
                <div className={styles.navbar__boorgir}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
        </header>
    );
}