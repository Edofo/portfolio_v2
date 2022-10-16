import emailjs from 'emailjs-com';
import { useState } from 'react';

import styles from '@styles/home/Contact.module.scss'

const Contact = () => {

    const [send, setSend] = useState(false)

    emailjs.init(process.env.NEXT_PUBLIC_EMAIL_USER);

    const sendEmail = (e) => {
        e.preventDefault()

        const params = {
            client: e.target.client.value,
            email: e.target.email.value,
            body: e.target.desc.value
        }

        emailjs.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE, params)
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
                    <input required type="text" name="client" placeholder='Nom et Prénom'/>
                    <input required type="email" name="email" placeholder='Email'/>
                    <textarea required type="text" name="desc" placeholder='Votre message...'/>
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
