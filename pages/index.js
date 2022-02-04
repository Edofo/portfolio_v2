import Footer from '../composants/Footer'
import About from '../composants/home/About'
import Feedback from '../composants/home/Feedback'
import Services from '../composants/home/Services'
import Navbar from '../composants/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div>

            <Navbar />

            <main>

                <About />

                <Services />

                <Feedback />
        
            </main>

            <Footer />

        </div>
    )
}
