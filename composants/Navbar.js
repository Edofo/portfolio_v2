import CustomButton from "./CustomButton"

const Navbar = () => {
    return (
        <header>
            <p>Nolan - L.</p>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#feedback">Feedback</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <CustomButton text="Me contacter" style="black"/>
        </header>
    )
}

export default Navbar