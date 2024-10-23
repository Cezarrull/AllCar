import style from './Contact.module.css';
import { Header } from "../../Components/Header/Hedaer";
import { Footer } from "../../Components/Footer/Footer"

export function Contact() {
    return(
        <>
        <Header />
        <div className={style.contactBody}>
            <div className={style.contactContent}>
                <h1>Entre em contato conosco:</h1>
                <p>Não hesite em entrar em contato! Estamos aqui para ajudar.</p>
                <a>allcarcontato@gmail.com</a>
            </div>
        </div>
        <Footer />
        </>
    )
}