import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Hedaer';
import style from './Carroceria.module.css';
import Image1 from "/src/Assets/Carroceria/tipos-de-carroceria-01.jpg";

export function Carroceria() {
    return(
        <>
        <Header />
            <div className={style.carroceriaBody}>
                <h1>Tipos de carroceria</h1>
                <p>
                    A lista é longa e pode confundir muita gente na hora de escolher o estilo do carro; entenda as características dos diferentes tipos de carroceria.
                </p>
                <div className={style.flexCarroceria}>

                    <div className={style.carroceriaContent}>
                        <h2>Tipos de carroceria</h2>
                        <p>
                            A indústria automotiva oferece aos seus consumidores uma variedade de carros para escolher, cada um com diferentes características para se adequar ao estilo de vida e necessidades de cada tipo de consumidor. Os principais tipos de carroceria ou carroçaria (português europeu) são hatch, sedã, SUV, minivan, picape e conversível. Cada um destes tipos de carro oferece benefícios específicos para os seus proprietários.
                        </p>
                        <h3>Hatch:</h3>
                        <p>
                            o hatchback (ou simplesmente hatch) é veículo extremamente prático com design compacto. Normalmente, os hatches são identificados pelo porta-malas e a janela traseira do veículo serem numa única parte. Este é um desenho extremamente eficiente no consumo de combustível. Eles são ideais para cidades grandes onde o estacionamento é limitado, pois cabem em quase todos os lugares.
                        </p>
                        <h3>Sedã:</h3>
                        <p>
                            os sedãs são um dos tipos de carros mais populares. Eles também são chamados de sedan, berlina, turismo ou três volumes. Este tipo de carroceria oferece espaço interno adicional e é ideal para famílias ou aqueles que fazem muitos trajetos diários. O design aerodinâmico destes veículos ajuda a economizar combustível e também os torna mais seguros.
                        </p>
                        <h3>Perua:</h3>
                        <p>
                            este tipo de carroceria é basicamente uma variação de sedã cujo habitáculo se estende por sobre o porta-malas. É um veículo ideal para famílias, pois o bagageiro é maior e mais alto que os sedãs, além de ser mais facilmente acessado pelo banco traseiro. As peruas também são chamadas de station wagons no Brasil e carrinha, break ou station em Portugal.
                        </p>
                        <h3>SUV:</h3>
                        <p>
                            estes veículos são conhecidos por serem robustos e combinam o melhor de um carro e de uma picape. O nome é a sigla para "Sport Utility Vehicle" ("Veículo Utilitário Esportivo" em inglês). Este tipo de carroceria oferece mais espaço interno, tem uma boa visibilidade para o motorista, além de grande aderência e estabilidade. Eles têm geralmente um consumo maior de combustível em relação aos sedans e hatches.
                        </p>
                        <h3>Crossover:</h3>
                        <p>
                            termo em inglês que significa convergência é um tipo de carroceria que utiliza a base de um carro de passeio com características de um SUV. Estas adaptações tornam este tipo de veículo uma mistura dos dois modelos, como o nome sugere. Os crossovers também são chamados de CUV (Crossover Utility Vehicle).
                        </p>
                        <h3>Minivan:</h3>
                        <p>
                            estes veículos que também são chamados de monovolumes ou MPV ("Multi Purpose Vehicle") oferecem uma cabine ampla e são perfeitas para famílias, pois oferecem muito espaço para acomodar os passageiros. As Minivans são ideais para longos trajetos e oferecem diversos recursos de segurança.
                        </p>
                        <h3>Picape:</h3>
                        <p>
                            estes veículos são grandes e práticos, pois possuem uma caçamba que pode ser usada para transportar cargas pesadas. Além disso, são ideais para dirigir em terrenos acidentados ou em estradas de montanha. Este tipo de carroceria também é chamada de camionete, caminhonete, carrinha de caixa aberta (português europeu) ou picape (do inglês "pick-up").
                        </p>
                        <h3>Conversível:</h3>
                        <p>
                            estes veículos são mais adequados para aqueles que apreciam a liberdade da abertura do teto e a possibilidade de sentir a brisa no rosto. Estes carros oferecem ao motorista um estilo de vida único, além de um excelente desempenho, já que o seu grande diferencial é a remoção (automática ou manual) do teto. Este tipo de veículo é chamado comumente de conversível no Brasil e descapotável ou cabriolé em Portugal.
                        </p>
                        <p>
                            O crossover combina, dependendo do modelo, mais ou menos características de um SUV, como espaço interior, altura em relação ao solo, pneus grandes, altura dos assentos, tração 4x4. Cada um destes tipos de carro tem seus próprios benefícios e características. Por isso, é importante que os consumidores façam sua própria pesquisa para descobrir qual tipo de carro é mais adequado para suas necessidades e estilo de vida.
                        </p>
                    </div>
                    <div className={style.carroceriaImage}>
                        <img src={Image1} alt="Tipos de carroceria"/>
                        <p>
                            Diagrama de plataforma da primeira geração do Ford Focus em variantes hatchback (no topo), sedã (no meio) e station wagon ou perua (em baixo).
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}