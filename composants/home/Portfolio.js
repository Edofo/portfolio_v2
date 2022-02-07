import { useEffect, useState } from 'react'
import styles from '../../styles/home/Portfolio.module.scss'

const Portfolio = () => {

    const listImg = {
        all: [
            {
                title: 'Naruto', 
                img: 'https://photos.tf1.fr/780/780/perso-showpage-naruto-70c311-7cdbc0-0@1x.png'
            },
            {
                title: 'Naruto', 
                img: 'https://play-lh.googleusercontent.com/bkHvRVEP4AEGO1-8kjOoh_tKKtjjhaDl7_vhFC7oyCz9mJzi2KTwGv_eJMDNb4R6iA=w512'
            },
            {
                title: 'Naruto', 
                img: 'https://cdn.myanimelist.net/r/360x360/images/characters/2/284121.jpg?s=5b0448ce14c283b38583b9ceaf86ae73'
            },
            {
                title: 'Naruto', 
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB1uy_0_BZhJS66k0T-FYbZdlqvTQdBsqMU5ZB-sXDvV3cAZ1bgCNmYVC3_A37mPFhN4&usqp=CAU'
            },
            {
                title: 'Naruto', 
                img: 'https://yt3.ggpht.com/ytc/AKedOLQVyQcqzpVHG8IPHYQFCChi0XEUxfLKHLceq0EH=s900-c-k-c0x00ffffff-no-rj'
            },
            {
                title: 'Naruto', 
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTqmjCMtdoXsceF6wwBKMNoCBNPDTNVMXoKlj836IyZ-yY0Kr9cOR_acELZQfQ6O2hkmk&usqp=CAU'
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
                <div className={styles.portfolioBtn}>
                    <button onClick={() => setSelectInfos('all')} className={selectInfos === 'all' ? styles.active : ''}>All</button>
                    <button onClick={() => setSelectInfos('color')} className={selectInfos === 'color' ? styles.active : ''}>Color Telecom</button>
                    <button onClick={() => setSelectInfos('ltdd')} className={selectInfos === 'ltdd' ? styles.active : ''}>La Taverne Du Design</button>
                </div>
                <div className={styles.portfolioGrid}>
                    {
                        listProject.map((x, i) => {
                            return (
                                <div style={{gridArea: `IMG-${i + 1}`}} className={styles.onePortfolio} key={i}>
                                    <img src={x.img} alt={x.title} />
                                    <div className={styles.info}>
                                        <p>{x.title}</p>
                                    </div>
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