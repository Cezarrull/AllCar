import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Hedaer";
import style from './Bank.module.css';
import Image1 from "/src/Assets/About/Pix.jpg"

export function Bank() {
    return(
        <>
            <Header />
            <div className={style.bankBody}>
                <h1>Contribua para o nosso sucesso! Sua doação nos permite melhorar e inovar.</h1>
                <p>
                    Faça sua doação agora! Acesse o seu banco e escaneie o QR Code ou copie o códico a baixo, 
                    ajude nós a crescer.
                </p>
            </div>
            
            <div className={style.qrcodeBank}>
                <img src={Image1} alt="QrCode" />
            </div>

            <div className={style.textBank}>
                <a>33ddfcb8-26b6-40c9-8063-feddc8fdd599</a>
            </div>
            <Footer />
        </>
    )
}