
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <Features />
            <About />
        </>
    );
}

export default HomePage;
