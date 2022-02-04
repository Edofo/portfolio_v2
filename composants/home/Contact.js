import styles from '../../styles/home/Contact.module.scss'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h2>CONTACT</h2>
            <div className={styles.contactBody}>
                <form>
                    <input placeholder='Nom prénom'/>
                    <input placeholder='Email'/>
                    <textarea placeholder='Details de votre demande'/>
                    <button>Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default Contact