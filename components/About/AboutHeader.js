import styles from '../../styles/About/AboutHeader.module.less'

const AboutHeader = () => {
    return (
        <section class={styles.headerText}>
            <h1>
                    About us
            </h1>
            <p>
                    DSC is a contemporary gallery with a vibrant exhibition programme of leading local and international
                    artists. Established in 2009, located in the very heart of Prague’s Old Town, the gallery is staffed by an
                    expert team of curators, art dealers and investment consultants. DSC Gallery routinely attracts such local
                    artists as Jiří Georg Dokoupil, David Černý, Lubomír Typlt and Václav Cigler. Through its frequent
                    collaboration with international curators, the gallery puts on 6–8 diverse exhibitions a year of artists
                    such as Martin Eder, Dennis Scholl, Pavel Pepperstein, Justin Mortimer and Anselm Reyle.
            </p>
        </section>
    )
}

export default AboutHeader;