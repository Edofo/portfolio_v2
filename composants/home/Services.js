import styles from '../../styles/home/Services.module.scss'

const Services = () => {
    return (
        <section id="services" className={styles.services}>
            <h2>SERVICES</h2>
            <div className={`${styles.servicesBody} subsection`}>
                <div className={styles.card}>
                    <i className="fad fa-alarm-clock"></i>
                    <h3>Planning</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.card}>
                    <i className="fab fa-react"></i>
                    <h3>Programmation</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className={styles.card}>
                    <i className="fad fa-pencil-ruler"></i>
                    <h3>UI/UX Design</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </section>
    )
}

export default Services