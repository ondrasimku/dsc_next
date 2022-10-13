import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Nav from './Nav'
import Head from 'next/head'

const Layout = ( {children} ) => {
    return (
        <>
        <Head>
            <meta charset="UTF-8" />
            <title>DSC Gallery</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description"
                content="DSC is a contemporary gallery with a vibrant exhibition programme
                of leading local and international artists. Established in 2009, located in
                the very heart of Prague’s Old Town, the gallery is staffed by an expert team
                of curators, art dealers and investment consultants who collaborate on some of
                the most distinguished private Czech collections. DSC Gallery represents such
                local artists as Jiří Georg Dokoupil, David Černý, Lubomír Typlt and Václav Cigler.
                Due to its reputation the gallery has recently been launching exhibitions of
                international artists as well, such as Martin Eder, Dennis Scholl, Pavel
                Pepperstein, Justin Mortimer and Anselm Reyle." />
            <link rel="icon" type="image/png" href="favicon-dsc.png"></link>
        </Head>
        <Nav />
        <div className={styles.container}>
            {children}
        </div>
        <Footer />
        </>
    )
}

export default Layout;