import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About.js";
import Projects from "../Components/Projects/Projects.js";
import Contact from "../Components/Contact/Contact.js";
import Skills from "../Components/Skiills/Skills";

function HomePage() {


    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}


export default HomePage;