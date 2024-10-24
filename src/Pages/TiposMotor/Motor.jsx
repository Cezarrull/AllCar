import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Hedaer';
import style from './Motor.module.css';

/*////////////////////////////////////////////////////////////////////////////////////////////////*/
import Image1 from "/src/Assets/motor.jpg";
import Image2 from "/src/Assets/Motor/motor4tempos.jpg";
import Image3 from "/src/Assets/Motor/motorTwo.jpg";
/*////////////////////////////////////////////////////////////////////////////////////////////////*/

export function Motor() {
    return(
        <>
        <Header />
            <div className={style.motorBody}>
                <h1>Quais são os tipos de motores de um carro?</h1>
                <p>
                    Ao longo do tempo, os carros já foram equipados com vários tipos diferentes de motor. Você sabia, por exemplo, que eles já receberam motores a jato, como nos aviões?
                </p>
                <div className={style.motorContent}>
                    <p>
                        Acontece que, hoje, são os motores de 4 tempos os mais presentes nos veículos, variando apenas características como quantidade e disposição de cilindros. Conheça quais são os tipos de motores de um carro.
                        <br /><br />
                        As possibilidades são várias: os motores podem ser de 2 tempos, a jato, podem ser motores de ciclo Otto, de ciclo Diesel, Wankel, ou até mesmo podem estar associados a uma bateria que lhe gera eletricidade, nos novos carros elétricos. Hoje em dia, como já dito acima, são os motores de ciclo Otto e de ciclo Diesel que predominam no cenário urbano.
                        <br /><br />
                        Ambos podem ser considerados motores de 4 tempos. Eles precisam dos mesmos elementos para funcionar: do ar, do combustível e de um gatilho para a explosão. O primeiro, de Otto, utiliza-se de combustíveis como gasolina e etanol e seu gatilho é promovido pela “vela”, uma peça importante responsável por soltar uma faísca e gerar explosão.
                    </p>
                    <img src={Image1} alt="Motor"/>
                    <p>
                        O segundo se utiliza de diesel, e sua explosão é gerada não por uma outra peça como a vela, mas pela própria compressão dos gases dentro dos cilindros, somada à alta temperatura dos motores.
                        <br /><br />
                        Seja como for, mesmo dentro dessas duas opções principais (de ciclo Otto e Diesel), existem várias características menores (mas extremamente importantes, também) que se alteram de modelo a modelo nos carros. Um exemplo é a quantidade de cilindros que um automóvel possui, e de que forma esses cilindros do motor estarão dispostos: se em linha reta ou em “W”, por exemplo.
                        <br /><br />
                        Outra característica importante que também varia muito é a própria potência do motor. Dependendo da quantidade de cilindradas, pode-se determinar se ele é “1.0” (uma potência baixa) ou “2.0” (presente em automóveis com altíssimo desempenho).
                        <br /><br />
                        Para entender tudo isso, vamos conhecer o que são afinal os motores de quatro tempos, como eles funcionam e outras características e peças que se fazem presentes no motor de um carro.
                    </p>
                    <h2>Como funciona um motor de combustão interna?</h2>
                    <p>
                        Para entender como funciona um motor de quatro tempos, principal tipo presente nos veículos hoje, é importante falar antes sobre o que é combustão interna. Apesar de ela ser alvo de críticas por gerar gases poluentes, ela continua sendo uma das principais formas de gerar a energia necessária para rodar estradas.
                        <br /><br />
                        A combustão, ou queima, é um processo químico que exige três componentes que se combinam: calor, oxigênio e combustível. Nas locomotivas a vapor, por exemplo, movidas por um motor de combustão externa, a queima do combustível ocorre fora dos compartimentos que produzem o movimento (cilindros).
                        <br /><br />
                        Já nos motores de combustão interna, essa reação química acontece dentro desse compartimento: dentro dos cilindros. Ela necessita de um conjunto de peças mecânicas e elétricas para conseguir fazer a queima dessa mistura de ar e combustível e  gerar expansão. Tudo isso no interior de cilindros fechados.
                    </p>
                    <h2>O motor de quatro tempos</h2>
                    <p>
                        Dito isso, o motor de quatro tempos é um motor de combustão interna. Para realizar essa combustão, ele cumpre 4 etapas básicas.
                        <br /><br />
                        A 1ª é a admissão, em que a mistura de ar e combustível é inserida no cilindro pelas válvulas de admissão; a 2ª a compressão, quando o pistão sobe e comprime a mistura (dentro do cilindro); a 3ª a explosão, com o gatilho da vela (nos motores de ciclo de Otto) ou da própria pressão e temperatura (nos de ciclo Diesel); e por fim a 4ª a expansão, com o pistão descendo e retornando à sua posição original.
                    </p>
                    <img src={Image2} alt="Motor"/>
                    <p>
                        Todas essas fases combinadas geram movimento no final, que vai sendo transferido para as mais diferentes peças do veículo: desde o câmbio até as rodas, possibilitando que o carro também se movimente. Essa queima de combustível gera gases muitas vezes poluentes (como CO2), que saem do veículo pelos escapamentos.
                        <br /><br />
                        Todo esse mecanismo se repete várias vezes conforme o veículo se move – por isso todo esse conjunto de ações é considerado um ciclo.
                    </p>
                    <h2>As peças de um motor</h2>
                    <p>
                        Outra questão importante de se ressaltar são os vários elementos que compõem um motor de combustão interna. Entre eles, estão alguns dos principais, como os cilindros e êmbolos, a árvore de manivelas e o cabeçote
                        <br /><br />
                        O conjunto móvel é formado pelas bielas, êmbolos, anéis e árvore de manivelas.. Já os cilindros são compostos por, no mínimo, duas válvulas: a de Admissão, que permite a entrada da mistura de ar/combustível, e a de Escapamento, que permite a passagem dos gases queimados para a descarga.
                    </p>
                    <img src={Image3} alt="Motor"/>
                    <p>
                    As peças básicas para o funcionamento do motor são o pistão, a biela, os cilindros, o virabrequim e as válvulas. Itens como bombas de combustível e de água, radiador e comando de válvulas estão presentes em motores de ciclo Otto com refrigeração a líquido.
                    </p>
                    <h2>Os tipos de motor de acordo com os cilindros</h2>
                    <p>
                        Normalmente, os motores podem ser construídos com um ou mais cilindros. Motores monocilíndricos são empregados em implementos agrícolas, motonetas e pequenas lanchas. Os policilíndricos, com 4, 6, 8, 10, 12 ou até mais cilindros, destinam-se a automóveis, locomotivas, navios e aviões.
                        <br /><br />
                        Os cilindros podem ser agrupados de várias formas, dando origem a motores: em linha, em V, radial, cilindros opostos.
                    </p>
                    <h3>Motor em linha (ou vertical):</h3>
                    <p>
                        como o próprio nome já diz, nesse tipo de motor os cilindros estão dispostos em uma linha reta. São reconhecidos, portanto, por ocuparem menos espaço e acabaram ficando muito ligados a carros menores. O seu outro nome, “vertical”, é dado pelo fato de que os pistões do equipamento ficarem em pé.
                    </p>
                    <h3>Motor em “V”:</h3>
                    <p>
                        já esse nome também está muito relacionado à visão que se tem quando o mecânico observa o motor de frente. Os seus cilindros estão posicionados em “V”, com um ângulo mais agudo sendo formado entre eles. E são vários os tipos dentro dessa mesma ‘categoria’: podem ser V6 até V12, variando, é claro a quantidade de cilindros em si.
                    </p>
                    <h3>Motor em “W”:</h3>
                    <p>
                        nesse tipo de motor em “W”, a disposição de cilindros é quase a mesma do que em V. Mas duplicada. Assim, o leitor pode entender que sua potência e seu próprio desempenho também são bastante altos e que os carros que são equipados com ele são caros, portanto – inclusive pelo custo da montagem.
                    </p>
                    <h3>Motor boxer:</h3>
                    <p>
                        os motores boxers estão muito presentes em modelos mais esportivos de carros. Já vimos que os motores em linha também são chamados de “motor na vertical”, justamente pela posição dos cilindros. Os motores “boxer”, ao contrário, são colocados em uma linha deitada, horizontal.
                    </p>
                    <h2>Os tipos de motor de acordo com a potência</h2>
                    <p>
                        Não é porque os motores têm um tamanho maior que, necessariamente, seu desempenho também será mais elevado. Afinal, o chamado “downsizing” possibilitou que motores de menor cilindrada e de menor volume fossem tão potentes quanto outros de capacidades maiores. Mas, normalmente, tamanho aqui costuma ser documento, sim.
                        <br /><br />
                        Quanto maior for o tamanho desse equipamento, a tendência é que seu o seu desempenho e a sua potência também sejam maiores – e isso pode afetar inclusive o preço do veículo. As possibilidades são várias, mas vamos conhecer a seguir algumas delas.
                    </p>
                    <p>
                        <strong>Motor 1.0:</strong> esse tipo de motor é como uma ‘faca de dois gumes’. Afinal, ele consome pouco combustível, mas também tem uma potência reduzida. Por causa disso, está presente, normalmente, em carros mais populares, e seu preço costuma ser mais acessível
                    </p>
                    <p>
                        <strong>Motor 1.4:</strong> ele também costuma estar em carros mais ‘em conta’, mas já tem algumas vantagens em relação ao do motor 1.0. Entre elas, podemos citar a possibilidade de instalar um ar-condicionado e usar ele no dia a dia – algo que, no tipo anterior de motor, poderia prejudicar bastante o desempenho do veículo.
                    </p>
                    <p>
                        <strong>Motor 1.6:</strong> estamos começando a entrar, aqui, em um tipo de motor menos acessível. Afinal, mesmo que o carro em si não seja tão mais caro, no dia a dia o motorista vai perceber que o gasto com combustível é mais alto. Ele tem mais cilindros, o que acaba possibilitando que sua velocidade seja maior, mas isso vem com um preço.
                    </p>
                    <p>
                        <strong>Motor 1.8:</strong> esse equipamento consome bastante combustível e já está presente em modelos esportivos. Os motoristas que decidirem adquirir um veículo com motor 1.8 podem usá-lo para fazer viagens mais longas, sem perder a potência nas estradas. (Na verdade, ele é até mais indicado para estradas do que para os trechos urbanos!)
                    </p>
                    <p>
                        <strong>Motor 2.0:</strong> costuma ter um espaço interno maior, além de ser mais tecnológico. Esse é definitivamente o tipo de motor com o maior consumo de combustível por quilômetro rodado, mas também é o motor mais potente. Ele atinge altas velocidades e faz ultrapassagens com mais facilidade.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}