import Particles from "react-tsparticles";

const Particle = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
            
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    enable: false
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                density: {
                    enable: true,
                    area: 1500,
                },
                    value: 20,
                },
                opacity: {
                    value: 0.2,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: true,
                    value: 5,
                },
            },
            detectRetina: true,
            }}
        />
    )
}

export default Particle