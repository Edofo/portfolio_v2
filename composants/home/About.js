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
        bio: "Hey ! Bonjour à vous, je m'appelle Nolan LEBOUCHER alias Edofo. Full Stack Developer depuis pas mal d'année, je prépare actuellement mon Bachelor en Développement Web et Mobile au sein de Efrei Paris. En parallèle de mes études je réalise plusieurs missions freelance tout en travaillant pour Color Telecom ; l'entreprise pour laquelle j'occupe le rôle de Lead Developer.",
        formation: "Le Bachelor Développement & Data de Efrei Paris est un diplome préparant le métier de développeur Web ou Mobile. Lors de ces 3 années intenses, j'ai réalisé plusieurs projets afin de valider mes semestres : Application Mobile, site e-commerce, REST API, MERN Stack Website, architecture réseau, DevOps, etc.",
        experience: "Développant des sites web depuis 2017, je possède une excellente maitrise des techno Front : HTML/CSS, la librairie React ainsi que son framework Next. Mais aussi des techno Back : Node.js, Express, Nest.js, mais aussi PHP puis Laravel. Avoir fait énormément de projets en temps que dev Full Stack m'a donné une expérience concidérable, cette dernière me permet aujourd'hui de pouvoir concevoir des produits de A à Z sans aucuns soucis."
    }

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
                        </div>
                        <div>
                            <p><strong>Nationalité : </strong>FR</p>
                            <p><strong>Email : </strong>lnolan.pro@gmail.com</p>
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
