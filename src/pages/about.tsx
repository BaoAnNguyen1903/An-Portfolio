import { Container } from "react-bootstrap";
import About from "../components/sections/about";

const AboutPage = () => {
    return (
        <div className="about-screen">
            <section className="mt-md-5 mt-2 pt-md-5 pt-0">
                <Container>
                    <About />
                </Container>
            </section>
        </div>
    )
}

export default AboutPage;