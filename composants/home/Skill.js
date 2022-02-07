import { useEffect, useState } from 'react'
import styles from '../../styles/home/Skill.module.scss'

const Skill = () => {

    const listSkill = {
        framework: [
            {
                title: 'ReactJS',
                number: '9'
            },
            {
                title: 'NextJS',
                number: '8'
            },
            {
                title: 'Laravel',
                number: '6'
            },
        ],
        languages: [
            {
                title: 'HTML',
                number: '10'
            },
            {
                title: 'CSS/SCSS',
                number: '10'
            },
            {
                title: 'JS',
                number: '9'
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
                <div>
                    <button onClick={() => setSelectInfos('framework')} className={selectInfos === 'framework' ? styles.active : ''}>Framework</button>
                    <button onClick={() => setSelectInfos('languages')} className={selectInfos === 'languages' ? styles.active : ''}>Languages</button>
                </div>
                <div className={styles.list}>
                    {
                        listSkillState.map((x, i) => {
                            return (
                                <div className={styles.oneSkill} key={i}>
                                    <h3>{x.title}</h3>
                                    <div>
                                        <hr />

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