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
            <div className={style.bank}>
                <h2>Você pode fazer a difereça!</h2>
                <p>
                    Se gostou do nosso conteúdo, considere fazer uma doação com uma quantia que seja 
                    significativa para você, sua contribuição nos ajudará a melhorar e manter nosso trabalho de
                    qualidade.
                </p>
                <a href="/AjudeaAllCar">
                    <button>Saiba mais</button>
                </a>
            </div>
        </div>
        <Footer />
        </>
    )
}