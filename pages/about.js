import AboutHeader from '../components/About/AboutHeader'
import DscTeam from '../components/About/DscTeam'
import styles from '../styles/About/About.module.less'

const About = () => {
    return (
        <main className={styles.main}>
            <AboutHeader />
            <DscTeam />
        </main>
    )
}

export default About;