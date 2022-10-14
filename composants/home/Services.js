import styles from '../../styles/home/Services.module.scss'

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <h2>SERVICES</h2>
            <div className={`${styles.servicesBody} subsection`}>
                <div className={styles.card}>
                    <i className="fad fa-alarm-clock"></i>
                    <h3>Planning</h3>
                    <p>Mes horaires sont assez flexibles et facilement adaptables : qu’il s’agisse d’une matinée, d’une après-midi ou même d’une soirée ; je suis disponible à n’importe quel moment pour discuter de l’avancement du produit ou pour répondre à toutes vos demandes.</p>
                </div>
                <div className={styles.card}>
                    <i className="fab fa-react"></i>
                    <h3>Programmation</h3>
                    <p>Etant un Développeur Full Stack, je travaille sur la partie Front et Back. Je maitrise le HTML/CSS, React et Next, ainsi que Node puis Nest.js. Comme vous avez pu le constater, J’aime travailler avec des techno modernes néanmoins je vous informe que je dev aussi en PHP / Laravel.</p>
                </div>
                <div className={styles.card}>
                    <i className="fad fa-pencil-ruler"></i>
                    <h3>UI/UX Design</h3>
                    <p>Mockup, Wireframes, Prototypes : j’accorde une énorme importance à l’Experience Utilisateur. Tout ce que je conçois respecte les règles de base de l’UX, l’accessibilité ainsi que la facilité de navigation des sites ou appli sur lesquels je travaille sont grandement réfléchis.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
