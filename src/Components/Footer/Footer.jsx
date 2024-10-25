import { Link } from 'react-router-dom'
import style from './Footer.module.css'

export function Footer() {
    return(
        <>
            <div className={style.footerBody}>
                <div className={style.footerContent}>
                    <p className={style.logoFooter}>AllCar</p>
                </div>

                <div className={style.topics}>
                    <h1>TÓPICOS</h1>
                    <ul>
                        <li>
                            <Link to="/HistoriaDoAutomovel">História do automóvel</Link>
                        </li>
                        <li>
                            <Link to="/TiposDeMotores">Quais são os tipos de motores de um carro?</Link>
                        </li>
                        <li>
                            <Link to="/CarrosMaisVendidos">5 carros mais vendidos no mundo em toda a história</Link>
                        </li>
                        <li>
                            <Link to="/TiposDeCarroceria">Tipos de carroceria</Link>
                        </li>
                        <li>
                            <Link to="/LuzesDoPaniel">luzes do painel</Link>
                        </li>
                        <li>
                            <Link to="/Pneus">Tipos de pneus: conheça cada um deles</Link>
                        </li>
                        <li>
                            <Link to="/OsCarrosMaisRapidosDaHistoria">Voando baixo: os carros mais rápidos ao longo da História</Link>
                        </li>
                        <li>
                            <Link to="/DicasDeCuidado">9 dicas de conservação de automóveis: valorize o seu carro!</Link>
                        </li>
                    </ul>
                    
                    <div className={style.infosFooter}>
                        <Link to="/Home">INÍCIO</Link>
                        <p>|</p>
                        <Link to="/Contato">CONTATO</Link>
                        <p>|</p>
                        <Link to="/Sobre">SOBRE</Link>
                    </div>
                </div>
            </div>
        </>
    )
}