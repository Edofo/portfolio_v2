import { useEffect, useState } from 'react'
import styles from '../../styles/home/Portfolio.module.scss'

const Portfolio = () => {

    const listImg = {
        all: [
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: '', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
        ]
    }

    const [selectInfos, setSelectInfos] = useState('all')
    const [listProject, setListProject] = useState(listImg['all'])

    useEffect(() => {

        setListProject(listImg[selectInfos])
        
    }, [selectInfos])


    return (
        <section id="portfolio" className={styles.portfolio}>
            <h2>PORTFOLIO</h2>
            <div className={styles.portfolioBody}>
                <div>
                    <button onClick={() => setSelectInfos('all')} className={selectInfos === 'all' ? styles.active : ''}>All</button>
                    <button onClick={() => setSelectInfos('color')} className={selectInfos === 'color' ? styles.active : ''}>Color Telecom</button>
                    <button onClick={() => setSelectInfos('ltdd')} className={selectInfos === 'ltdd' ? styles.active : ''}>La Taverne Du Design</button>
                </div>
                <div className={styles.portfolioGrid}>
                    {
                        listProject.map((x, i) => {
                            return (
                                <div className={`${styles.image}${i}`} key={i}>
                                    <img src={x.img} alt={x.title} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio