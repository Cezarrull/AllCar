import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Hedaer'
import style from './Pneu.module.css'

export function Pneu() {
    return(
        <>
            <Header />
            <div className={style.pneuBody}>
                <h1>Tipos de pneus: conheça cada um deles</h1>

                    <p>Saiba quais são os principais tipos de pneus e qual o mais adequado para cada veículo.</p>
                <div className={style.pneuContent}>
                    <p>
                        Os pneus são partes fundamentais de todo e qualquer veículo, pois eles oferecem estabilidade, 
                        segurança, conforto e economia. No entanto, ainda que todos possuam esses atributos, é fundamental 
                        entender os tipos de pneus para escolher o mais adequado à situação ou modelo veicular.
                    </p>

                    <h2>O que é o pneu?</h2>

                    <p>
                        O pneu é feito de uma borracha especial. Sua composição envolve a mistura de borracha 
                        sintética e natural, petróleo, aço e poliéster. Todos esses elementos são cuidadosamente 
                        estruturados e balanceados para que os pneus tenham a performance adequada à cada veículo e 
                        situação de momento. 
                        <br /><br />
                        Os pneus são os únicos pontos de contato entre veículo e a pista de rolamento. Só desse fato 
                        pode-se depreender que pneus apropriados e em bom estado são importantíssimos tanto para a 
                        segurança dos passageiros, como ao desempenho da máquina. 
                        <br /><br />
                        Não importa o quão eficientes, potentes ou caros sejam o motor, os freios e o ABS: os três 
                        dependem da aderência dos pneus ao solo. Importante lembrar que não é o pneu todo que está em 
                        contato com o piso, mas, sim, quatro (no caso de automóveis) pequenas áreas retangulares, que 
                        somadas não chegam a 30 centímetros quadrados.
                        <br /><br />
                        O pneu é, basicamente, um recipiente tubular fechado e flexível, contendo ar comprimido, com 
                        várias funções.
                    </p>

                    <img src="../../../Assets/PneuImage/dadosPneu.jpg" alt="Dados do pneu" />

                    <p>
                        Os dois primeiros pontos dependem integralmente do fato do pneu ser elástico e estar cheio de ar 
                        comprimido (ou seja, inflado). Já os dois últimos relacionam-se com o princípio de que o pneu 
                        oferece grande atrito com o solo.
                        <br /><br />
                        Quanto mais atrito, menos derrapagem; assim, portanto, o veículo não sai “cantando pneu” em 
                        qualquer arrancada, não desliza nas curvas e consegue frear sem travar a roda.
                    </p>

                    <h2>Tipos de pneus</h2>
                    <p>
                        Para cada situação e veículo, existem tipos de pneus específicos. Por isso, antes de definir o pneu 
                        do seu carro, moto ou caminhão, é preciso ter em mente a frequência e os locais de tráfego. 
                        <br /><br />
                        Cada modelo de veículo tem um tipo de pneu ideal. Caso tenha dúvidas, a resposta estará no manual 
                        do proprietário. Nele, é possível encontrar informações como a pressão correta, o controle periódico 
                        do alinhamento e do balanceamento e os tipos de pneus mais apropriados.
                    </p>

                    <h3>On-road ou convencional</h3>
                    <p>
                        Este é o tipo mais comum. Os pneus on-road, próprios para asfalto, são desenvolvidos para favorecer  o desempenho do veículo nessa superfície. Ele aumenta a área de contato, trazendo mais aderência, além de ser bastante eficiente no escoamento de água.
                    </p>
                    <h3>Off-road</h3>
                    <p>
                        Os pneus off-road, por sua vez, são próprios para estradas de terra e lama, apresentando duas características indispensáveis: alta frenagem e estabilidade. 
                        <br /><br />
                        Tais aspectos são fundamentais para resistir a terrenos irregulares sem se deformar além do esperado. Eles também favorecem a parada – ainda que brusca – com segurança, até mesmo na lama. 
                        <br /><br />
                        Por fim, esse tipo de pneu possui uma banda de rodagem mais espaçada, carcaça reforçada e sulcos mais largos.
                    </p>
                    <img src="../../../Assets/PneuImage/OffRoad.jpg" alt="Carro de offRoad" />

                    <h3>Pneu misto</h3>

                    <p>
                        Como o próprio nome sugere, o pneu misto é ideal para solos asfaltados e estradas de terra. Esse tipo possui alta resistência e um visual arrojado; no entanto, aumenta o consumo de combustível e o nível de ruídos em altas velocidades.
                        <br /><br />
                        Outro ponto negativo pesa no bolso do motorista: seu valor costuma ser mais alto comparado aos pneus específicos de asfalto ou off-road. Por isso, só vale a pena fazer esse investimento se o motorista passa frequentemente pelos dois tipos de estrada.
                    </p>
                    <h3>Pneus verdes</h3>
                    <p>
                        Chegamos à modalidade mais ecológica dessa série. Os pneus verdes são mais leves, duram mais tempo e produzem menos ruídos. Esse tipo de pneu foi desenvolvido com o propósito de diminuir o consumo de combustível e emissão de gases poluentes. 
                        <br /><br />
                        Além disso, o pneu verde tem ótimo desempenho em pista molhada, o que reduz o risco de aquaplanagem.
                    </p>
                    <h3>Pneus Radiais</h3>
                    <p>
                        Os pneus radiais possuem uma banda de rodagem mais duradoura e são altamente indicados para quem vai percorrer altas velocidades. Eles garantem melhor desempenho nas curvas, além da ótima qualidade em frenagens.
                    </p>
                    <h3>Pneus para carga</h3>
                    <p>
                        Há dois tipos de pneus para carga. Se você possui uma caminhonete derivada de carros de passeio (exemplo: Ford Courier, Chevrolet Montana e Fiat Strada), recomenda-se colocar pneus marcados com o “código C” logo após a medida.
                        <br /><br />
                        Já os utilitários leves, como caminhonetes maiores, furgões (vans) e utilitários esportivos (as chamadas SUVs) requerem pneus marcados com a sigla LT (Light Truck).  
                        <br /><br />
                        No Brasil, os proprietários acabam escolhendo pneus de passeio porque são mais baratos e mais macios para dirigir. No entanto, esse tipo de pneu não é o correto para as situações descritas acima; e, dependendo do seu uso, pode causar acidentes.
                        <br /><br />
                        Caso a SUV sirva somente para passeios, é permitido usar pneus convencionais. Mas se o veículo puxar uma carreta, trailer, ou carregar muita carga com frequência, é melhor gastar um pouco mais com o pneu LT.
                    </p>
                    <img src="../../../Assets/PneuImage/homemPneu.jpg" alt="Homem com mão no pneu" />
                    <h2>Manutenção dos pneus</h2>
                    <p>
                        Vale enfatizar que pneus gastos e não adequados ao terreno e ao veículo põem em risco as vidas do motorista e dos passageiros. Não basta comprar o item apenas pela aparência ou pela marca. É preciso trocar os pneus sempre que houver desgaste em excesso. 
                        <br /><br />
                        Recauchutar, ressulcar (“frisar”) e re-vulcanizar pneus também não são boas ideias.  Pneus novos são relativamente baratos e, se trocados de forma planejada, não ficarão carecas por um bom tempo. 
                        <br /><br />
                        Mas como saber a hora de trocar? O próprio pneu “avisa”! Atualmente, todos os pneus possuem um indicador de desgaste, chamado de TWI,  ou Tire Wear Indicator.
                        <br /><br />
                        Há dois tipos básicos de TWI, e a maioria dos pneus vêm com ambos. O primeiro deles é um ressalto de borracha dentro dos sulcos maiores do pneu. À medida que o pneu se desgasta, o sulco diminui de profundidade. A partir do instante em que o asfalto passa a encostar no TWI (ou seja, quando a borracha tiver gasto até ele), chegou a hora de trocar o pneu.
                        <br /><br />
                        O segundo tipo de TWI fica na faixa lateral e é formado por sulcos que, pelo fato de não encostarem no solo, aparentemente não deveriam ter essa função. Mas eles também são indicadores; portanto, quando o desgaste chegar neles, troque o pneu.
                        <br /><br />
                        Existem dois TWIs diferentes por um motivo muito simples: se o veículo estiver desalinhado, os pneus vão se desgastar de modo desigual. Ou seja, se o motorista olhar para o lado de fora, os pneus ainda estarão “bons”; mas, ao observar o lado interno, pode notar um problema.
                        <br /><br />
                        Por isso, é recomendável verificar os pneus sempre que fizer o rodízio.
                    </p>
                    <h2>Aspectos mais evidentes de desgaste</h2>
                    <p>
                        Bolhas, cortes, furos e afins. Esses elementos indicam apenas uma coisa: troque os pneus urgentemente! Ao se deparar com esse tipo de anomalia, não pense duas vezes.
                        <br /><br />
                        Normalmente, as bolhas indicam que a malha de aço ou de tecido no pneu se rompeu, de modo que apenas a borracha está segurando o ar. Nesses casos, o pneu está condenado – e isso é perigosíssimo, mesmo que a bolha não seja muito grande.
                        <br /><br />
                        Cortes, talhos e buracos na borracha, mesmo que o pneu esteja aparentemente perfeito, podem desestabilizá-lo ou até destruí-lo inesperadamente em uma curva a alta velocidade, por exemplo. 
                        <br /><br />
                        Portanto, inspecione bem os pneus e, ao notar esses sinais, substitua-os. 
                        <br /><br />
                        Também vale destacar a relação entre a durabilidade dos pneus e o modo com que a pessoa dirige. Profissionais recomendam evitar tanto aceleradas quanto freadas bruscas. 
                        <br /><br />
                        Por fim, é preciso ficar atento aos sinais “físicos” que o veículo emite quando chega a hora da troca.
                    </p>
                    <img src="../../../Assets/PneuImage/verificar-pneu-bom.jpg" alt="Vereficando pneu" />
                    <h2>Dicas para cuidar dos pneus</h2>
                    <p>
                        O rodízio de pneus é importantíssimo, pois previne, por exemplo, o desgaste irregular. Ao não fazê-lo, aumenta-se o consumo, o barulho, o perigo de derrapagem e, portanto, reduz o conforto na cabine de passageiros.
                        <br /><br />
                        Além disso, a falta de rodízio significa antecipar a troca dos pneus e, portanto, gastar mais dinheiro em menos tempo.
                        <br /><br />
                        Existem várias maneiras de combinar e permutar os pneus para rodízio. Por isso, siga sempre a forma exemplificada no manual do carro. 
                    </p>
                    <h2>Calibragem dos pneus</h2>
                    <p>
                        Essa é uma das dicas básicas, e que, justamente por ser tão “manjada”, algumas pessoas acabam esquecendo. É preciso manter os pneus sempre com a pressão recomendada – informação contida no manual do veículo e no próprio pneu.
                        <br /><br />
                        Na pressão certa, o pneu produzirá menos calor em seu eterno atrito com o solo, reduzindo seu desgaste e aumentando a economia de combustível. Além do perigo em si, o excesso ou a falta de ar fazem os pneus se desgastarem de modo desigual.
                        <br /><br />
                        Um pneu com calibragem baixa (murcho) perde capacidade nas curvas, devido ao fato de a parede externa estar menos rígida. Um pneu cheio demais, por sua vez, apresenta menor área de contato com o chão – por isso, derrapa mais facilmente.
                        <br /><br />
                        Se o veículo for usado para carregar carga, vale a pena calibrar com algumas libras acima do normal. 
                        <br /><br />
                        Independentemente da marca, os pneus perdem ar com o passar do tempo. Por isso, verifique e calibre o pneu ao menos uma vez por mês. Agora, se você roda frequentemente, é indicado fazer esse processo toda semana.
                    </p>
                    <img src="../../../Assets/PneuImage/alinhamento pneu.jpg" alt="" />
                    <h2>Alinhamento e balanceamento</h2>
                    <p>
                        Guarde seu investimento para cuidar bem dos pneus novos. Para isso, é fundamental realizar o alinhamento deles, sujeitos a desequilíbrio ao rodar em ruas irregulares, passar sobre buracos e vez ou outra baterem levemente nas guias da calçada. 
                        <br /><br />
                        Além de perigoso, um veículo desalinhado é a chave para gastar mais com pneus. Por isso, recomenda-se que o alinhamento seja feito a cada 5 mil quilômetros rodados.
                        <br /><br />
                        Outro serviço da área é o balanceamento das rodas, necessário para o momento em que novos pneus são colocados, ou quando o veículo começar a trepidar acima de 70 km/h. 
                        <br /><br />
                        Portanto, mais do que entender os tipos de pneus existentes no mercado, também é essencial ficar atento aos sinais que acusam a necessidade de manutenção. 
                        <br /><br />
                        Lembre-se que, dependendo do pneu escolhido, o custo é mais alto. No entanto, a não manutenção irá provocar danos mais graves no bolso e na segurança dos passageiros.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}