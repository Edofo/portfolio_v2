import styles from '../../styles/home/Feedback.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Feedback = () => {

    const feedBack = [
        {
            text: "Première collaboration avec Edofo et vraiment très surpris du résultat. A su mettre en œuvre correctement nos attentes. Toujours à l’écoutes, disponible et à proposer ces idées quand il le faut. Pour une première collaboration je suis plus que satisfait du travail mené. Nous tâcherons de réitérer nos commandes envers lui et nous vous invitons fortement à faire de même si vous hésitez encore à passer par ses services !",
            user: 'Louis',
            rank: 'Fondateur - La Taverne Du Design',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
        {
            text: "Je suis agréablement surpris de la qualité des services que Nolan fournis. Je lui mets la note de 5 étoiles, il traite la demande rapidement et d'une très bonne qualité ! Je recommande ses services !",
            user: 'Bertrand',
            rank: 'Fondateur - StandardEnLigne',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
        {
            text: "Nolan est un élève en développement fullstack très impliqué, qui à le sens du détail et qui apprend très vite, son site à été parfaitement réaliser. Bravo à toi !",
            user: 'Rooksaar',
            rank: 'Amis',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },{
            text: "Nolan est un très bon développeur, il est passioné et cela se retrouve dans ses projets. Il a accumulé une bonne experience au cours des dernières années, il a aussi un bon sens du travail en équipe. Je vous le recommande en tant que développeur freelance 😁 !",
            user: 'Romain',
            rank: 'Développeur junior',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
    ]

    return (
        <section id="feedback" className={styles.feedback}>
            <h2>FEEDBACK</h2>
            <div className={`${styles.feedbackBody} subsection`}>
                <i className="fad fa-quote-right"></i>
                <div className={styles.feedbackContainer}>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides
                        grabCursor
                        loop
                    >
                        {
                            feedBack.map((x, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className={styles.card}>
                                            <p>{x.text}</p>
                                            <div>
                                                <h3>{x.user}</h3>
                                                <h4>{x.rank}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Feedback