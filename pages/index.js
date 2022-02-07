import Footer from '../composants/Footer'
import About from '../composants/home/About'
import Contact from '../composants/home/Contact'
import Feedback from '../composants/home/Feedback'
import Services from '../composants/home/Services'
import Skill from '../composants/home/Skill'
import Navbar from '../composants/Navbar'
import Particle from '../composants/Particle'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div>

            <Navbar />

            <main>

                <Particle />

                <About />

                <Services />

                <Skill />

                <Feedback />

                <Contact />
        
            </main>

            <Footer />

        </div>
    )
}
