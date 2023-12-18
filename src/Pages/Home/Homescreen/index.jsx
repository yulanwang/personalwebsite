import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Experiences from "../Experiences";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Experiences />
            <ContactMe />
            <Footer />
        </>
    )
}