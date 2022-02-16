import styles from '../../styles/home/Services.module.scss'

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <h2>SERVICES</h2>
            <div className={`${styles.servicesBody} subsection`}>
                <div className={styles.card}>
                    <i className="fad fa-alarm-clock"></i>
                    <h3>Planning</h3>
                    <p>Vous vous demandez surement quels sont mes horaires ? C'est très simple, étant donné que je suis en cours la journée je peux travailler uniquement le soir et le week-end.</p>
                </div>
                <div className={styles.card}>
                    <i className="fab fa-react"></i>
                    <h3>Programmation</h3>
                    <p>Les fameux languages de Programmation ^^. Même si le HTML/SASS est un language de balisage, actuellement je pourrais affirmer que je les maîtrise à 100%. Pour ce qui en est du NodeJS je pourrais dire que je suis dans les 90%.</p>
                </div>
                <div className={styles.card}>
                    <i className="fad fa-pencil-ruler"></i>
                    <h3>UI/UX Design</h3>
                    <p>Vous avez surement déjà pu apercevoir des sites pas très pratiques ou pas très jolies. Mais avec moi je peux vous assurer que chaque site que je réalise est 100% facile d'utilisation et jolie !</p>
                </div>
            </div>
        </section>
    )
}

export default Services