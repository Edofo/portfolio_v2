import { useEffect, useState } from 'react'
import styles from '../../styles/home/Portfolio.module.scss'

const Portfolio = () => {

    const listImg = {
        all: [
            {
                id: 1,
                title: 'Color Telecom', 
                img: 'https://dam.malt.com/7bed8257-2552-4660-9b5d-8c930c5b39ca?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 2,
                title: 'La Taverne Du Design', 
                img: 'https://dam.malt.com/bab6ce2d-4500-456c-8fba-2440c3c16a82?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 3,
                title: 'Color Telecom', 
                img: 'https://dam.malt.com/093c4f42-ecf7-4b69-a9a9-4f97b387b237?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 4,
                title: 'La Taverne Du Design', 
                img: 'https://dam.malt.com/99b43e6f-dd01-4462-a637-b7964484f52e?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 5,
                title: 'Color Telecom', 
                img: 'https://i.gyazo.com/756b4639e92becb8524f049efb209dd7.png'
            },
            {
                id: 6,
                title: 'La Taverne Du Design', 
                img: 'https://i.gyazo.com/2b6ceb4c9753deb2a096337d1e6abe1f.jpg'
            },
        ],
        color: [
            {
                id: 7,
                title: 'Color Telecom', 
                img: 'https://dam.malt.com/7bed8257-2552-4660-9b5d-8c930c5b39ca?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 8,
                title: 'Color Telecom', 
                img: 'https://i.gyazo.com/756b4639e92becb8524f049efb209dd7.png'
            },
            {
                id: 9,
                title: 'Color Telecom', 
                img: 'https://dam.malt.com/093c4f42-ecf7-4b69-a9a9-4f97b387b237?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 10,
                title: 'Color Telecom', 
                img: 'https://i.gyazo.com/824c2489ce711d6064106492decb6ad1.png'
            },
            {
                id: 11,
                title: 'Color Telecom', 
                img: 'https://i.gyazo.com/5c567f92f143dfd8c556c05e7242ebef.png'
            },
            {
                id: 12,
                title: 'Color Telecom', 
                img: 'https://i.gyazo.com/eda4fa7b8993dc96385ee7e91b3fb82e.png'
            },
        ],
        ltdd: [
            {
                id: 13,
                title: 'La Taverne Du Design', 
                img: 'https://dam.malt.com/bab6ce2d-4500-456c-8fba-2440c3c16a82?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 14,
                title: 'La Taverne Du Design', 
                img: 'https://dam.malt.com/99b43e6f-dd01-4462-a637-b7964484f52e?func=bound&w=2048&org_if_sml=1'
            },
            {
                id: 15,
                title: 'La Taverne Du Design', 
                img: 'https://i.gyazo.com/aa2efc809d8eec274b461ce8c4dce073.png'
            },
            {
                id: 16,
                title: 'La Taverne Du Design', 
                img: 'https://i.gyazo.com/d9f7f32a30d984f6572d1298a95bb112.png'
            },
            {
                id: 17,
                title: 'La Taverne Du Design', 
                img: 'https://i.gyazo.com/2b6ceb4c9753deb2a096337d1e6abe1f.jpg'
            },
            {
                id: 18,
                title: 'La Taverne Du Design', 
                img: 'https://i.gyazo.com/56389beb0446102fe6e025d995043ebc.jpg'
            },
        ]
    }

    const [selectInfos, setSelectInfos] = useState('all')
    const [listProject, setListProject] = useState(listImg['all'])

    const [displayModal, setDisplayModal] = useState(false)

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
                                <div onClick={() => setDisplayModal(x)} style={{gridArea: `IMG-${i + 1}`}} className={`portfolioUnique ${styles.onePortfolio}`} key={x.id}>
                                    <img src={x.img} alt={x.title} />
                                    <div className={styles.info}>
                                        <p>{x.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    displayModal !== false &&
                        <div className={styles.modal}>
                            <div onClick={() => setDisplayModal(false)} className={styles.shadow}></div>
                            <div className={styles.submodal}>
                                <div style={{position: 'relative'}}>
                                    <i onClick={() => setDisplayModal(false)} className="fas fa-times"></i>
                                    <img src={displayModal.img} alt={displayModal.title} />
                                </div>
                                <p>{displayModal.title}</p>
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

export default Portfolio
