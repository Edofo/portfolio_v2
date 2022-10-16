import { useEffect, useState } from 'react'

import styles from '@styles/home/Portfolio.module.scss'

import project from '@utils/project.json'

const Portfolio = () => {

    const [selectInfos, setSelectInfos] = useState('all')
    const [listProject, setListProject] = useState(project['all'])

    const [displayModal, setDisplayModal] = useState(false)

    useEffect(() => {

        const listPortfolio = document.querySelectorAll('.portfolioUnique')   

        handleSelectInfos(listPortfolio)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectInfos])


    const handleSelectInfos = async(listPortfolio) => {
        await listPortfolio.forEach((x) => {
            x.style.opacity = '0',
            x.style.transform = 'scale(0)',
        
            setTimeout(() => {
                x.style.opacity = '1',
                x.style.transform = 'scale(1)'
            }, 200)
        })

        setListProject(project[selectInfos])
    }

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
{                                    // eslint-disable-next-line @next/next/no-img-element
}                                    <img src={x.img} alt={x.title} />
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
