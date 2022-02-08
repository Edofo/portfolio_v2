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
        ],
        color: [
            {
                title: 'Demon slayer', 
                img: 'https://pyxis.nymag.com/v1/imgs/2b1/dc3/35b0941763f46d5920017ed6cf57dd7b16-demon-slayer.rsquare.w700.jpg'
            },
            {
                title: 'Demon slayer', 
                img: 'https://img.joomcdn.net/b21b63fd92dd40731fe42211d932167118f184c3_original.jpeg'
            },
            {
                title: 'Demon slayer', 
                img: 'https://images.wallpapersden.com/image/download/demon-slayer-kimetsu-no-yaiba-team_a21ubm2UmZqaraWkpJRpbWWtaW1p.jpg'
            },
            {
                title: 'Demon slayer', 
                img: 'https://static1.purebreak.com/articles/2/21/70/32/@/762852-demon-slayer-saison-2-la-suite-de-l-an-200x200-2.jpg'
            },
            {
                title: 'Demon slayer', 
                img: 'https://res.9appsinstall.com/group6/M00/70/BD/EE6A0A6BF099035142860A73856DCE57.png?x-oss-process=style/mq200'
            },
            {
                title: 'Demon slayer', 
                img: 'https://static01.nyt.com/images/2021/04/24/arts/23demonslayer1/23demonslayer1-mediumSquareAt3X.jpg'
            },
        ],
        ltdd: [
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

    useEffect(async() => {

        const listPortfolio = document.querySelectorAll('.portfolioUnique')   

        await listPortfolio.forEach((x) => {
            x.style.opacity = '0',
            x.style.transform = 'scale(0)',
        
            setTimeout(() => {
                x.style.opacity = '1',
                x.style.transform = 'scale(1)'
            }, 200)
        })

        setListProject(listImg[selectInfos])
        
    }, [selectInfos])


    return (
        <section id="portfolio" className={styles.portfolio}>
            <h2>PORTFOLIO</h2>
            <div className={`${styles.portfolioBody} subsection`}>
                <div className={styles.portfolioBtn}>
                    <button onClick={() => setSelectInfos('all')} className={selectInfos === 'all' ? styles.active : ''}>All</button>
                    <button onClick={() => setSelectInfos('color')} className={selectInfos === 'color' ? styles.active : ''}>Color Telecom</button>
                    <button onClick={() => setSelectInfos('ltdd')} className={selectInfos === 'ltdd' ? styles.active : ''}>La Taverne Du Design</button>
                </div>
                <div className={styles.portfolioGrid}>
                    {
                        listProject.map((x, i) => {
                            return (
                                <div style={{gridArea: `IMG-${i + 1}`}} className={`portfolioUnique ${styles.onePortfolio}`} key={i}>
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