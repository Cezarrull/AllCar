import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Hedaer";
import style from './About.module.css';

export function About() {
    return(
        <>
        <Header />
        <div className={style.aboutBody}>
            <h1>AllCar</h1>
            <div className={style.aboutContent}>
                <h2>Sobre quem somos!</h2>
                <p>
                    Nossa missão é fornecer informações precisas sobre o mundo automotivo, 
                    ajudando você a tomar decisões informadas e aprimorar sua experiência com veículos.
                    <br /><br />
                    Somos uma equipe pequena, mas apaixonada, e estamos apenas começando nossa jornada.
                    Estamos comprometidos em crescer e melhorar continuamente, trazendo conteúdo de qualidade e 
                    relevância para você.
                    <br /><br />
                    Acompanhe-nos nessa trajetória e descubra o mundo automotivo com nós!
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}