import { Link } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Hedaer'
import style from './PageOne.module.css'

export function PageOne() {
    return(
        <>
            <Header />
            <div className={style.pageOneBody}>
                <h1>Conheça mais sobre carros</h1>
                <p>início</p>
                <div className={style.content}>
                    <Link to="/HistoriaDoAutomovel">
                        <h2>História do automóvel</h2>
                        <div className={style.textAndImage}>
                            <img src="src/Assets/carro1.jpg" alt="Foto de um Benz Patent-Motorwagen"/>
                            <p>
                                A história do automóvel tem início por volta de 1769, com a criação do motor a 
                                vapor de automóveis capazes de transportar humanos. Em 1807, os primeiros 
                                carros movidos por um motor de combustão interna a gás combustível apareceram, 
                                o que levou à introdução em 1885 do moderno motor a gasolina ou com combustão a 
                                gasolina onipresente interno. 
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/TiposDeMotores">
                        <h2>Quais são os tipos de motores de um carro?</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/motor.jpg" alt="Foto de um motor"/>
                            <p>
                            Ao longo do tempo, os carros já foram equipados com vários tipos diferentes de motor. 
                            Você sabia, por exemplo, que eles já receberam motores a jato, como nos aviões? Acontece que, 
                            hoje, são os motores de 4 tempos os mais presentes nos veículos, variando apenas 
                            características como quantidade e disposição de cilindros. Conheça quais são os tipos de 
                            motores de um carro. 
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/CarrosMaisVendidos">
                        <h2>5 carros mais vendidos no mundo em toda a história</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/Toyota-Corolla-2001-EUA-03.jpg" alt="Foto de um Corolla"/>
                            <p>
                                O carro mais comercializado no mundo ao longos dos anos é o Toyota Corolla. Ao todo 
                                foram vendidas mais de 40 milhões de unidades. Clique e confira a lista completa de 
                                todos os modelos que foram sucesso de vendas em todo o planeta. 
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/TiposDeCarroceria">
                        <h2>Tipos de carroceria</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/carroceria.jpg" alt="Foto de Tipos de carroceria"/>
                            <p>
                                A indústria automotiva oferece aos seus consumidores uma variedade de carros para escolher, 
                                cada um com diferentes características para se adequar ao estilo de vida e necessidades de 
                                cada tipo de consumidor. Os principais tipos de carroceria ou carroçaria (português europeu) 
                                são hatch, sedã, SUV, minivan, picape e conversível. Cada um destes tipos de carro oferece 
                                benefícios específicos para os seus proprietários. 
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/LuzesDoPaniel">
                        <h2>luzes do painel</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/luzes-do-painel.jpg" alt="Foto de um painel de carro"/>
                            <p>
                                Assim como os barulhos, os símbolos luminosos no painel do veículo são o principal meio 
                                de comunicação entre o automóvel e quem o conduz. Pois é, seu carro não é o Relâmpago 
                                McQueen, mas também fala (ou, pelo menos, tenta).  
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/Pneus">
                        <h2>Tipos de pneus: conheça cada um deles</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/pneu.jpg" alt="Foto de pneus"/>
                            <p>
                                Os pneus são partes fundamentais de todo e qualquer veículo, pois eles oferecem 
                                estabilidade, segurança, conforto e economia. No entanto, ainda que todos possuam esses 
                                atributos, é fundamental entender os tipos de pneus para escolher o mais adequado à 
                                situação ou modelo veicular.  
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>

                    <Link to="/OsCarrosMaisRapidosDaHistoria">
                        <h2>Voando baixo: os carros mais rápidos ao longo da História</h2>
                        <div className={style.textAndImage}>
                            <img src="/src/Assets/chiron.jpg" alt="Foto da Bugatti Chiron"/>
                            <p>
                                A velocidade é algo que contagia e apaixona uma multidão de pessoas ao redor do 
                                mundo. Aqueles que levam isso mais a sério se tornam pilotos de corridas e 
                                outros, ainda mais aficionados na adrenalina causada por tal fenômeno, vão além e 
                                buscam quebrar recordes.  
                            </p>
                            <button>Saiba mais</button>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}