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
            text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            user: 'Ponch',
            rank: 'Developpeur Front',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
        {
            text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            user: 'Souf',
            rank: 'Developpeur du Dark',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
        {
            text: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
            user: 'Romain',
            rank: 'Developpeur au chomage',
            photo: 'https://avatars.githubusercontent.com/u/70896657?v=4'
        },
    ]

    return (
        <div className={styles.feedback}>
            <h2>FEEDBACK</h2>
            <div className={styles.feedbackBody}>
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
        </div>
    )
}

export default Feedback