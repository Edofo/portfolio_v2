import Link from "next/link"
import { useEffect, useState } from "react"

import styles from '../../styles/home/About.module.scss'

import CustomButton from "../CustomButton"

const About = () => {
    
    const [imgInfos, setImgInfos] = useState({width: '', height: ''})

    useEffect(() => {
        checkImage()

        window.addEventListener('resize', () => {
            checkImage()
        }, 2000)

        setTimeout(() => checkImage(), 400)
    
    }, [])
   
    const checkImage = () => {
        if(document !== undefined) {
            const img = document.querySelector('#img-about')   
            setImgInfos({
                width: img.width,
                height: img.height
            })
        }
    }

    const text = {
        bio: "Je me présente, je me nomme Nolan LEBOUCHER, alias Edofo. Je suis née le 18 décembre 2002, je possède donc 19 ans. Très bonne maîtrise de la langue Anglaise et possédant nombreuses qualités.",
        formation: "Actuellement en Bachelor Concepteur Développeur / Global Programming au sein de l'école d'ingénieurs Efrei Paris situé à Villejuif. Je possède plusieurs qui sont éloignés de la tech. Le diplôme : Bac Pro Métiers de la Sécurité, Le diplôme PSE1 - PSE2 (Premier Secours en Equipe).",
        experience: "Je développe des sites web depuis 2017, je possède donc une très bonne maitrise dans le HTML / CSS. Ensuite peu après j'ai commencé à apprendre le PHP grâce à la réalisation d'un système de news/catalogue. Peu après je me suis amusé à dev des bots discord en NodeJS. Pour les Framework, j'ai commencé à développer sur ReactJS ainsi que Laravel. Peu de temps après, je me suis lancé sur NextJS. Maintenant je peu dire que je maîtrise totalement le HTML/SASS/PHP/NodeJS. "
    }
    // A l'heure actuelle, je possède un Bac pro métiers de la sécurite avec le diplome PSE1 et PSE2 (Premier Secours en Equipe) 
    const [selectInfos, setSelectInfos] = useState('bio')
    const [textInfos, setTextInfos] = useState(text['bio'])

    useEffect(async() => {
        const textEdit = document.querySelector('#text-about')   
        textEdit.style.transform = 'translateX(100px)'
        textEdit.style.opacity = '0'
        setTimeout(() => {
            textEdit.style.transform = 'translateX(-100px)'
        }, 200)

        setTimeout(() => {
            textEdit.style.transform = 'translateX(0px)'
            textEdit.style.opacity = '1'
            setTextInfos(text[selectInfos])
        }, 400)

    }, [selectInfos])


    return (
        <section id="about" className={styles.about}>
            <h2>A PROPOS</h2>
            <div className={`${styles.aboutBody} subsection`}>
                <div className={styles.aboutImage}>
                    <img id='img-about' alt='photo' src='/images/phoyo.jpg' />
                    {
                        imgInfos.width >= 0 && <div id='div-img-about' style={{width: `${imgInfos.width}px`, height: `${imgInfos.height}px`}}/>
                    }
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutCat}>
                        <button onClick={() => setSelectInfos('bio')} className={selectInfos === 'bio' ? styles.active : ''}>Bio</button>
                        <button onClick={() => setSelectInfos('formation')} className={selectInfos === 'formation' ? styles.active : ''}>Formation</button>
                        <button onClick={() => setSelectInfos('experience')} className={selectInfos === 'experience' ? styles.active : ''}>Experiences</button>
                    </div>
                    <p id="text-about" className={styles.aboutText}>
                        {textInfos}
                    </p>
                    <div className={styles.aboutInfos}>
                        <div>
                            <p><strong>Age : </strong>19</p>
                            <p><strong>Freelance : </strong>Disponible</p>
                            {/* <p><strong>Téléphone:...</strong>+33 6 24 22 03 34</p> */}
                        </div>
                        <div>
                            <p><strong>Nationalité : </strong>FR</p>
                            <p><strong>Email : </strong>lnolan.pro@gmail.com</p>
                            {/* <p><strong>Téléphone:...</strong>+33 6 24 22 03 34</p> */}
                        </div>
                    </div>
                    <div className={styles.aboutBtn}>
                        <Link href="#contact">Me contacter</Link>
                    </div>
                </div>       
            </div>
        </section>
    )
}

export default About