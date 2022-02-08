import { useEffect, useRef, useState } from 'react'
import styles from '../../styles/home/Skill.module.scss'

const Skill = () => {

    const listSkill = {
        framework: [
            {
                title: 'ReactJS',
                number: '92'
            },
            {
                title: 'NextJS',
                number: '86'
            },
            {
                title: 'Laravel',
                number: '67'
            },
        ],
        languages: [
            {
                title: 'HTML',
                number: '100'
            },
            {
                title: 'CSS/SCSS',
                number: '99'
            },
            {
                title: 'JS',
                number: '95'
            },
        ],
    }

    const [selectInfos, setSelectInfos] = useState('framework')
    const [listSkillState, setListSkillState] = useState(listSkill['framework'])

    useEffect(() => {

        setListSkillState(listSkill[selectInfos])
        
    }, [selectInfos])

    return (
        <section id="skill" className={styles.skill}>
            <h2>SKILL</h2>
            <div className={styles.skillBody}>
                <div className={styles.skillBtn}>
                    <button onClick={() => setSelectInfos('framework')} className={selectInfos === 'framework' ? styles.active : ''}>Framework</button>
                    <button onClick={() => setSelectInfos('languages')} className={selectInfos === 'languages' ? styles.active : ''}>Languages</button>
                </div>
                <div className={styles.list}>
                    {
                        listSkillState.map((x, i) => {

                            return (
                                <div className={styles.oneSkill} key={i}>
                                    <h3>{x.title}</h3>
                                    <div className={styles.barline}>
                                        <div style={{width: `${x.number}%`}} className={`${styles.countbar} countbarCheck`} data-percentnumber={`${x.number}`}><h4>{x.number}%</h4></div>
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

export default Skill