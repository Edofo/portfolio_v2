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
    
    }, [])

   
    const checkImage = () => {
        const img = document.querySelector('#img-about')   
        setImgInfos({
            width: img.width,
            height: img.height
        })
    }

    const text = {
        bio: 'Proin lacus justo, dapibus sit amet bibendum ut, mollis imperdiet est. Praesent iaculis urna diam. Aenean hendrerit erat id bibendum luctus. Nullam id enim interdum, maximus orci eu, mollis risus. Pellentesque id eros a erat finibus fermentum. Donec in efficitur purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis leo sapien. Vestibulum augue libero, imperdiet in accumsan eu, hendrerit eu lectus.',
        formation: 'LOL',
        experience: 'AZSASASAASASAS'
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
        <div className={styles.about}>
            <h2>A PROPOS</h2>
            <div className={styles.aboutBody}>
                <div className={styles.aboutImage}>
                    <img id='img-about' alt='photo' src='/images/phoyo.jpg' />
                    {
                        imgInfos.width >= 0 && <div id='div-img-about' style={{width: `${imgInfos.width}px`, height: `${imgInfos.height}px`}}/>
                    }
                </div>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutCat}>
                        <button onClick={() => setSelectInfos('bio')} className={selectInfos === 'bio' ? styles.active : ''}>Bio</button>
                        <button onClick={() => setSelectInfos('formation')} className={selectInfos === 'formation' ? styles.active : 'formation'}>Formation</button>
                        <button onClick={() => setSelectInfos('experience')} className={selectInfos === 'experience' ? styles.active : 'experience'}>Experiences</button>
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
                    <div>
                        <CustomButton text='Me contacter' style='black'/>
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default About