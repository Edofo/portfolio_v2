import CustomButton from "./CustomButton"
import styles from '../styles/Navbar.module.scss'
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState('home')

    useEffect(() => {
        checkSection()

        window.addEventListener('scroll', () => {
            checkSection()
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
            }
        })
       
    }

    return (
        <header className={styles.header}>
            <p>Nolan - L.</p>
            <ul>
                <li className={active === 'home' ? styles.active : ''}><Link href="#home">Home</Link></li>
                <li className={active === 'about' ? styles.active : ''}><Link  href="#about">A propos</Link></li>
                <li className={active === 'services' ? styles.active : ''}><Link href="#services">Services</Link></li>
                <li className={active === 'portfolio' ? styles.active : ''} ><Link href="#portfolio">Portfolio</Link></li>
                <li className={active === 'feedback' ? styles.active : ''}><Link href="#feedback">Feedback</Link></li>
                <li className={active === 'contact' ? styles.active : ''}><Link href="#contact">Contact</Link></li>
            </ul>
            <CustomButton text="Me contacter" style="black"/>
        </header>
    )
}

export default Navbar