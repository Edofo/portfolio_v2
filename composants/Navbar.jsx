import { useEffect, useState } from "react";
import Link from "next/link";

import styles from '@styles/Navbar.module.scss'

const Navbar = () => {

    const [active, setActive] = useState('home')

    const [activeBurger, setActiveBurger] = useState(false)

    const [activeTheme, setActiveTheme] = useState("dark");
    const inactiveTheme = activeTheme === "dark" ? "light" : "dark";

    useEffect(() => {
        checkSection()

        window.addEventListener('scroll', () => {
            checkSection()
            setActiveBurger(false)
        }, false)
    }, [])


    const checkSection = () => {
        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("header ul li a");
        const navHeight = document.querySelector("header").offsetHeight;

        const curPos = window.scrollY;

        // console.log(sections, navLi, navHeight, curPos)
        
        sections.forEach((x) => {
            const top = x.offsetTop - 200 - navHeight
            const bottom = x.offsetTop + x.offsetHeight
            // console.log(curPos, top, bottom)

            if(curPos >= top && curPos <= bottom) {
                // console.log(x.id)
                setActive(x.id)
                // window.history.pushState({}, "", `#${x.id}`)
            }
        })
       
    }

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);    

    return (
        <header className={styles.header}>
            <div style={{display: 'flex'}}>
                <button className={styles.switch} onClick={() => setActiveTheme(inactiveTheme)}>{activeTheme === 'dark' ? '🌙' : '☀️'}</button>
                <p>Nolan - L.</p>
            </div>
            <ul className={activeBurger === true ? styles.menuActive : ''}>
                <li className={active === 'home' ? styles.active : ''}><Link href="#home">Home</Link></li>
                <li className={active === 'about' ? styles.active : ''}><Link  href="#about">A propos</Link></li>
                <li className={active === 'services' ? styles.active : ''}><Link href="#services">Services</Link></li>
                <li className={active === 'skill' ? styles.active : ''}><Link href="#skill">Skill</Link></li>
                <li className={active === 'portfolio' ? styles.active : ''} ><Link href="#portfolio">Portfolio</Link></li>
                <li className={active === 'feedback' ? styles.active : ''}><Link href="#feedback">Feedback</Link></li>
                <button className={`${styles.buttonContact} ${styles.buttonContact3}`}>
                    <Link  href="#contact">Me contacter</Link>
                </button>
            </ul>
            <button className={`${styles.buttonContact} ${styles.buttonContact2}`}>
                <Link  href="#contact">Me contacter</Link>
            </button>
            <div className={`${activeBurger === true ? styles.sidebarActive : ''} ${styles.sidebar}`}/>
            <div onClick={() => setActiveBurger(!activeBurger)} className={`${activeBurger === true ? styles.burgerActive : ''} ${styles.burger}`}>
                <div className={styles.top}/>
                <div className={styles.middle}/>
                <div className={styles.bottom}/>
            </div>
        </header>
    )
}

export default Navbar