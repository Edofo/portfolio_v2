import Footer from '../composants/Footer'
import About from '../composants/home/About'
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
        
            </main>

            <Footer />

        </div>
    )
}
