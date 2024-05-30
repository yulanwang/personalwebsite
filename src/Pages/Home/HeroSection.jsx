export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Yulan</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Computer Science</span>{" "}
                        <br />
                        Student
                    </h1>
                    <p className="hero--section--description">
                        I'm a second year student study Computer Science and Mathematics at Northeastern University in Boston, MA. 
                        <br /> I'm passionate about building efficient software, applying data science to financial data, and utilizing natural language processing.
                    </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-image.png" alt="Hero Section" />
            </div>

        </section>
    )
    
    ;
}