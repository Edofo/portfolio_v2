import emailjs from 'emailjs-com';
import { useState } from 'react';

import styles from '../../styles/home/Contact.module.scss'

const Contact = () => {

    const [send, setSend] = useState(false)

    emailjs.init('user_GxrzHM20XGsxuTbRkA6Pg');

    const sendEmail = (e) => {
        e.preventDefault()

        const params = {
            client: e.target.client.value,
            email: e.target.email.value,
            body: e.target.desc.value
        }

        emailjs.send('service_17hkypn','template_7cyil0m', params)
        .then(() => {

            const audio = new Audio('check.mp3');
            audio.play();

            setSend(true)

        }, (err) => {

            console.log('FAILED...', err);

        });

    }

    return (
        <section id="contact" className={styles.contact}>
            <h2>CONTACT</h2>
            <div className={`${styles.contactBody} subsection`}>
                <form onSubmit={(e) => sendEmail(e)}>
                    <input type="text" name="client" placeholder='Nom prénom'/>
                    <input type="text" name="email" placeholder='Email'/>
                    <textarea type="text" name="desc" placeholder='Details de votre demande'/>
                    {
                        send ?
                            <button style={{pointerEvents: 'none'}} type="submit">Email envoyé</button>
                        :
                            <button type="submit">Envoyer</button>
                    }
                </form>
            </div>
        </section>
    )
}

export default Contact