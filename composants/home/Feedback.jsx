// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '@styles/home/Feedback.module.scss'

import avis from '@utils/avis.json'

const Feedback = () => {

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
                            avis.map((x, i) => {
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
