import Footer from '../composants/Footer'
import About from '../composants/home/About'
import Contact from '../composants/home/Contact'
import Feedback from '../composants/home/Feedback'
import Home2 from '../composants/home/Home2'
import Portfolio from '../composants/home/Portfolio'
import Services from '../composants/home/Services'
import Skill from '../composants/home/Skill'
import Navbar from '../composants/Navbar'
import Particle from '../composants/Particle'

const Home = () => {
    return (
        <div>

            <Navbar />

            <main>

                <Particle />

                <Home2 />

                <About />

                <Services />

                <Skill />

                <Portfolio />

                <Feedback />

                <Contact />
        
            </main>

            <Footer />

        </div>
    )
}

export default Home