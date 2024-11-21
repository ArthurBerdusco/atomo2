import About from "./components/About"
import Clientes from "./components/Clientes"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { Navbar } from "./components/Navbar"
import Apresentacao from "./components/Apresentacao"
import Services from "./components/servicos/Servicos"
import WhatsApp from "./components/WhatsApp"


export default function Home() {
    return (
        <>

            <Navbar />

            <main>

                <Hero id="hero"/>

                <About />

                <Services />

                <Clientes />

                <Apresentacao />

                <Contato />

            </main>

            <WhatsApp />

            <Footer />

        </>
    );
}
