import styles from '../../styles/home/Home.module.scss'

const Home2 = () => {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.bg}></div>
            <div className={styles.container}> 
                <div className={styles.head}>
                    <h1>HI !</h1>
                    <p>Je suis <strong>Nolan</strong>, développeur Fullstack. <br />Découvrez rapidement mes valeurs et mes activités grâce au bouton !</p>
                    <a href="Nolan_LEBOUCHER.pdf" download>Télécharger mon CV</a>
                </div>
                <div className={`${styles.homeBody}`}>
                    <img src='./images/caracter_naruto.png' alt='photo' />
                    <div className={styles.social}>
                        <p>SOCIAL</p>
                        <hr />
                        <i className="fab fa-discord"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home2