import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Hedaer'
import style from './Luzes.module.css'

export function Luzes() {
    return(
        <>
            <Header />
            <div className={style.luzesBody}>
                <h1>Luzes do Painel: o guia completo para entender o seu carro</h1>

                <p>Salve, Motorista! As luzes do painel do seu carro acenderam e você não sabe o que isso significa?</p>

                <div className={style.luzesContent}>
                    <h2>Qual a função das luzes do painel?</h2>
                    <p>
                        Assim como os barulhos, os símbolos luminosos no painel do veículo são o principal meio de comunicação entre o automóvel e quem o conduz. Pois é, seu carro não é o Relâmpago McQueen, mas também fala (ou, pelo menos, tenta). 
                        <br /><br />
                        Com a função de advertir ou apenas informar, as luzes precisam ser conhecidas e bem interpretadas pelo motorista, afinal, qualquer falha ou alerta ignorados podem causar prejuízos não só ao veículo, mas também ao seu bolso e à segurança do trânsito.
                    </p>
                    <h2>
                        Significado das principais luzes do painel</h2>
                        <p>As cores das luzes variam de acordo com cada função, estabelecendo níveis de prioridade dentro de um código de sinalização praticamente universal. 
                        <br /><br />
                        Esse código é bastante semelhante aos demais ícones de sinalização do trânsito, com o acréscimo das cores azul, laranja e até mesmo branca, dependendo do modelo do veículo. 
                        <br /><br />
                        Confira, a seguir, o que cada luz indica:
                    </p>
                    <h3>Luz vermelha no painel do carro</h3>
                    <p> 
                        Essas são as que mais assustam, não é mesmo?  
                        <br /><br />
                        Luzes vermelhas indicam que algo exige muita atenção e/ou não está funcionando como deveria, o que pode ser bastante perigoso. Geralmente, elas se relacionam com emergências. 
                        <br /><br />
                        Por isso, é fundamental que o motorista saiba identificar o que cada símbolo representa e, assim, tomar as providências cabíveis em cada situação.
                        <br /><br />
                        Veja as principais luzes vermelhas do painel:
                    </p>
                    <h3>Luz de bateria</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/bateria.png" alt="Luz de bateria"/>
                        <p>
                            A bateria do carro ou moto é como se fosse o coração do sistema elétrico. Por isso, a luz vermelha com o símbolo de uma bateria indica problemas nesse sistema automotivo.  
                        </p>
                    </div>
                    <p>
                        Vale ressaltar que a falha não necessariamente precisa ser na bateria, pode se tratar de mau funcionamento de componentes como alternador, fios e até mesmo sensores.  
                        <br /><br />
                        De toda forma, é fundamental encostar o carro na oficina, uma vez que o veículo pode não ligar na próxima viagem dependendo da vida útil da bateria para carro.
                    </p>
                    <h3>Luz de freio de estacionamento</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/freioDeMão.png" alt="Luz de freio de estacionamento"/>
                        <p>
                            Quem nunca tentou sair com o carro e não conseguiu, porque o freio de mão estava puxado, que atire a primeira pedra. 
                        </p>
                    </div>
                    <p>
                        A luz de freio de estacionamento, também chamado de freio de mão, pode ser representada de várias formas: seja por um círculo vermelho contendo um ponto de exclamação ou um “P” dentro dele ou até mesmo pela palavra “Brake”.
                        <br /><br />
                        Ela indica o acionamento do freio de estacionamento e que, portanto, o motorista não deve tentar colocar o carro em movimento antes de inativá-lo.
                    </p>
                    <h3>Luz de temperatura de motor</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/temperaturaDoMotor.png" alt="Luz de temperatura de motor"/>
                        <p>
                            Atenção, Motorista! Pois essa luz jamais deve ser ignorada!  
                        </p>
                    </div>
                    <p>
                        Identificada pelo que parece ser uma boia na água, a luz de temperatura do motor (ou luz de água) diz respeito à condição do líquido de resfriamento do motor e também indica se falta água ou há falha no sistema de ventilação, como válvula termostática ou radiador. 
                        <br /><br />
                        Se ela acender, pare imediatamente o carro e procure ajuda especializada. Muito provavelmente o motor do carro superaqueceu ou está muito próximo disso.
                    </p>
                    <h3>Luz de pisca-alerta</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/4-150x150.png" alt="Luz de pisca-alerta"/>
                        <p>
                            A luz de pisca-alerta é outro aviso que não obrigatoriamente está no painel do veículo. Essa indicação pode vir no botão de liga/desliga do dispositivo em alguns automóveis.   
                        </p>
                    </div>
                    <p>
                        Vale ressaltar que o pisca-alerta só deve ser ativado com o veículo parado em caso de algum problema no seu veículo ou na via.
                    </p>
                    <h3>Luz de óleo</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/5-150x150.png" alt="Luz de óleo"/>
                        <p>
                            Olhou aquela luz igual a lâmpada do Aladdin no painel do carro e ficou sem saber o que é? Pois bem, essa é justamente a luz de óleo.  
                        </p>
                    </div>
                    <p>
                        Esse é outro símbolo que requer atenção o mais rápido possível para evitar problemas no funcionamento do veículo. Ele denuncia falhas no sistema de lubrificação do motor, como baixo nível de óleo ou algo pior, e exige atenção imediata.  
                        <br /><br />
                        Essa é uma das luzes do painel mais perigosas, afinal, se o motor trabalhar sem lubrificação, ele pode fundir. Então, sempre fique de olho para ver se o seu carro precisa de uma troca de óleo.
                    </p>
                    <h3>Luz de airbag</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/airbag.png" alt="Luz de airbag"/>
                        <p>
                            A luz de airbag, que parece um bonequinho com balão, indica o funcionamento ou não desse dispositivo de segurança. Ou seja, se o veículo sofrer uma colisão e essa luz estiver acesa, o airbag não vai operar ou apresentará falhas.   
                        </p>
                    </div>
                    <p>
                        Para a sua segurança e dos demais passageiros, é vital que você procure imediatamente oficina especializada, ou até mesmo a própria concessionária, a fim de resolver esse problema o mais rápido possível.  
                        <br /><br />
                        Afinal, o airbag é responsável por salvar muitas vidas no trânsito.
                    </p>
                    <h2>Luz amarela no painel do carro</h2>
                    <p>
                        Assim como nos semáforos, a luz amarela no painel do carro é sinal de atenção, isto é, busca alertar e chamar atenção do motorista para algum componente ou situação veicular.  
                        <br /><br />
                        Veja, a seguir, algumas situações para o aparecimento dessas luzes: 
                    </p>
                    <h3>Luz de injeção eletrônica</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/injeção.png" alt="Luz de injeção eletrônica"/>
                        <p>
                            A luz com um símbolo de motor de carro acende naturalmente no momento da ignição ou partida, mas deve se apagar logo em seguida. 
                        </p>
                    </div>
                    <p>
                        Se a luz de injeção eletrônica estiver acesa com frequência anormal, isso pode significar problemas no injetor ou no catalisador, o que aumenta o consumo de combustível e pode causar falhas na próxima ignição.
                    </p>
                    <h3>Luz de pré-aquecimento de velas</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/aquecimentoVelas.png" alt="Luz de pré-aquecimento de velas"/>
                        <p>
                            Essenciais para o funcionamento do motor, as velas do carro possuem canal direto para falar com o motorista: a luz com o símbolo de mola no painel.
                        </p>
                    </div>
                    <p>
                        A luz de pré-aquecimento de velas serve para indicar o aquecimento do combustível para partida em carros flex.
                        <br /><br />
                        Todavia, essa luz também alerta para questões sérias e que demandam atenção, como o desgaste de velas, corrosão de eletrodos e problemas no isolador.
                        <br /><br />
                        Por isso, não deixe de procurar ajuda especializada, caso essas luzes do painel operem com frequência anormal.
                    </p>
                    <h3>Luz de controle de tração ou ESC</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/ESC.png" alt="Luz de controle de tração ou ESC"/>
                        <p>
                            A luz do carrinho derrapando representa o controle eletrônico de estabilidade (ESC) e fica acesa enquanto o sistema está ativo no veículo.  
                        </p>
                    </div>
                    <p>
                        Esse controle tem função de corrigir a trajetória do veículo e assume o comando do acelerador e do freio, por exemplo, para pôr o veículo de volta à rota adequada.   
                        <br /><br />
                        Caso a luz permaneça ligada mesmo com o sistema ESC desabilitado, fique de olho e vá até uma oficina verificar o que não vai bem no carro.
                    </p>
                    <h3>Luz de baixa pressão dos pneus</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/pneus.png" alt="Luz de baixa pressão dos pneus"/>
                        <p>
                            Nos veículos que possuem monitoramento da pressão dos pneus (TPMS), existe uma luz com o desenho de uma ferradura com um ponto de exclamação no interior. Essa é a luz do painel que indica baixa pressão dos pneus.
                        </p>
                    </div>
                    <p>
                        Dessa forma, quando a luz se acender, é necessário checar se há algum pneu furado e calibrá-lo. Se estiver tudo ok e a luz continuar ligada, é provável que os sensores estejam com defeito.
                    </p>
                    <h3>Luz de desembaçador de para-brisas</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/desembaçadorParaBrisa.png" alt="Luz de desembaçador de para-brisas"/>
                        <p>
                            Representada por um quadrado ou uma janelinha com setas, a luz de desembaçador de para-brisas nem sempre fica no painel do veículo, sendo possível encontrá-la sobre o botão de acionamento do dispositivo. 
                        </p>
                    </div>
                    <p>
                        Esse mecanismo é uma mão na roda, pois facilita e muito a vida do motorista em condições adversas de tempo.
                    </p>
                    <h3>Luz de freio ABS</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/ABS.png" alt="Luz de freio ABS"/>
                        <p>
                            Geralmente identificada por um círculo com as letras ABS dentro dele, essa luz no painel indica que o sistema de freio não está funcionando por algum motivo.  
                        </p>
                    </div>
                    <p>
                        Isso não significa que o carro perdeu o freio, porém a frenagem será mais lenta que o normal. Por isso, redobre a atenção se essa luz estiver acesa e encoste o carro numa oficina!
                    </p>
                    <h3>Luz de direção elétrica</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/EPS.png" alt="Luz de direção elétrica"/>
                        <p>
                            A luz do “volantinho” ou com a sigla EPS no painel do carro é, na verdade, de direção elétrica e indica defeito nesse componente, como desregulamento do volante ou danos à caixa de direção.
                        </p>
                    </div>
                    <p>
                        Vale ressaltar que, normalmente, essa luz acende após a partida e se apaga logo em seguida. O alerta vem quando o símbolo permanece aceso.  
                        <br /><br />
                        Então, nesse caso, é necessário procurar ajuda especializada, uma vez que isso pode prejudicar a dirigibilidade do veículo.
                    </p>
                    <h2>Luz laranja no painel</h2>
                    <p>
                        As luzes laranjas no painel têm a mesma função das amarelas: alertar e advertir o motorista sobre questões relacionadas ao funcionamento do veículo que não exigem atenção imediata. 
                        <br /><br />
                        Veja só alguns exemplos dessas luzes e seus significados:
                    </p>
                    <h3>Luz de transmissão automática</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/trasmissãoAutomatica.png" alt="Luz de transmissão automática"/>
                        <p>
                            Indicada por uma engrenagem laranja com um ponto de exclamação ao lado ou no seu interior, a luz de câmbio automático denuncia defeito ou baixo nível de óleo da transmissão (quando o veículo exige a troca de fluído). 
                        </p>
                    </div>
                    <p>
                        Evite rodar com o veículo se essa luz estiver acesa, uma vez que pode agravar o problema e fazer você pagar não só o conserto, como também o guincho.
                    </p>
                    <h3>Luz de pastilha de freio</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/pastilhaDeFreio.png" alt="Luz de pastilha de freio"/>
                        <p>
                            Nem todos os veículos têm essa luz no painel. Além disso, ela também pode ser amarela, dependendo do modelo do carro. 
                        </p>
                    </div>
                    <p>
                        Identificada por um círculo amarelo, ela sinaliza desgaste nas pastilhas de freios do automóvel.  
                        <br /><br />
                        Por isso, é vital encostar o veículo na oficina para resolver essa questão o quanto antes para não correr o risco de ficar na mão.
                    </p>
                    <h3>Luz do imobilizador</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/imobilizador.png" alt="Luz do imobilizador"/>
                        <p>
                            Representada pelo desenho de um carro com uma chave ou cadeado dentro (ou somente uma chave no painel), a luz do imobilizador costuma variar de cor de acordo com o modelo de carro.  
                        </p>
                    </div>
                    <p>
                        Ela sinaliza falha de comunicação entre a chave e o receptor. Ou seja, a injeção eletrônica e a antena instalada no miolo da chave não estão funcionando bem em conjunto e, portanto, pode haver dificuldade em ligar o veículo. 
                        <br /><br />
                        O ideal é chamar um chaveiro ou eletricista para solucionar o defeito, além de verificar se você está tentando ligar o carro com a chave certa.
                    </p>
                    <h2>O que significa a luz azul e verde do painel?</h2>
                    <p>
                    Luzes azuis ou verdes indicam o acionamento de algum componente do automóvel e permanecem acesas durante a utilização dele.  
                    <br /><br />
                    Luzes de faróis e de posição, essenciais para dirigir à noite, são exemplos desse tipo.
                    </p>
                    <h3>Luz de pedal de freio</h3>
                    <div className={style.imgText}>
                        <img src="/src/Assets/LuzesImage/pedalDeFREIO.png" alt="Luz de pedal de freio"/>
                        <p>
                            Existente em carros de câmbio automático e representada por um pé dentro de um círculo em verde, essa luz indica para o motorista que é preciso apertar o pedal de freio durante a condução.
                        </p>
                    </div>
                    <h2>Todas as luzes do painel piscando: é normal?</h2>
                    <p>
                        Existem luzes específicas que piscam enquanto acesas, como a de pisca-alerta e de seta.  
                        <br /><br />
                        Contudo, todas as luzes do painel piscando ao mesmo tempo não é nada normal e pode indicar falhas de sensores elétricos ou ainda mais graves.
                        <br /><br />
                        Por isso, é muito importante procurar ajuda especializada o quanto antes, uma vez que ignorar o problema pode comprometer de vez o funcionamento do carro e encarecer a solução.
                    </p>
                    <div className={style.imgLight}>
                        <img src="/src/Assets/LuzesImage/luzesPainel.png" alt="Luzes do painel" />
                    </div>
                    <h2>Perguntas frequentes sobre luzes do painel</h2>
                    <h4>A luz do painel acende, mas não dá partida, o que pode ser?</h4>
                    <p>
                        Se a luz de bateria estiver acesa, ela pode estar descarregada. Já se a luz do imobilizador estiver ligada, pode haver falha na comunicação entre a chave e receptor. Verifique também a luz de injeção eletrônica, se ela estiver acesa pode ser problema no injetor.
                    </p>
                    <h4>O que pode ser luz piscando no painel?</h4>
                    <p>
                        Existem luzes do painel que piscam naturalmente, como a de seta. Porém, caso mais luzes estejam piscando, isso pode ser sinal de problemas elétricos. De toda forma, procure ajuda especializada.
                    </p>
                    <h4>O que quer dizer as luzes do painel?</h4>
                    <p>
                        Luzes do painel são os principais meios de comunicação entre carro e condutor, elas indicam que algo não funciona direito, alertam ou somente informam o uso de algum dispositivo, como faróis.
                    </p>
                    <h4>Quais são as luzes de advertência no painel?</h4>
                    <p>
                        As luzes de advertência no painel são aquelas representadas em amarelo ou laranja, como a luz de abastecimento e direção eletrônica.
                    </p>
                    <h4>Luz vermelha no painel é perigoso?</h4>
                    <p>
                        Depende, pois ela pode indicar desde emergências, como a do óleo e a de temperatura do motor, até reforço de algum aviso sobre segurança, como o acionamento do freio de estacionamento, portas abertas e cinto de segurança.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}