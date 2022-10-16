import { useEffect, useState } from 'react'

import styles from '@styles/home/Skill.module.scss'

import listSkill from '@utils/skill.json'

const Skill = () => {

    const [selectInfos, setSelectInfos] = useState('framework')
    const [listSkillState, setListSkillState] = useState(listSkill['framework'])

    useEffect(() => {

        setListSkillState(listSkill[selectInfos])
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectInfos])

    return (
        <section id="skill" className={styles.skill}>
            <h2>SKILL</h2>
            <div className={`${styles.skillBody} subsection`}>
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