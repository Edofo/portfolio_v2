import styles from '@styles/home/Home.module.scss'

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
{                    // eslint-disable-next-line @next/next/no-img-element
}                    <img src='./images/caracter_naruto.png' alt='photo' />
                    <div className={styles.social}>
                        <p>SOCIAL</p>
                        <hr />
                        <a href="https://discord.com/users/331709677672988672" target="_blank" without="true" rel="noreferrer"><i className="fab fa-discord" /></a>
                        <a href="https://www.twitch.tv/Edofo" target="_blank" without="true" rel="noreferrer"><i className="fab fa-twitch" /></a>
                        <a href="https://www.linkedin.com/in/nolan-leboucher-a2530a1b3/" target="_blank" without="true" rel="noreferrer"><i className="fab fa-linkedin" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home2