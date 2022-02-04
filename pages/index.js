import Footer from '../composants/Footer'
import About from '../composants/home/About'
import Navbar from '../composants/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
    return (
        <div>

            <Navbar />

            <main>

                <About />
        
            </main>

            <Footer />

        </div>
    )
}
