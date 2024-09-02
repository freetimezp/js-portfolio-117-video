
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Partners />
            <Features />
            <About />
            <Testimonials />
        </>
    );
}

export default HomePage;
