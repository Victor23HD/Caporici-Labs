---
titulo: "Arquitetura elétrica e eletrônica do veículo"
resumo: "Como o veículo se organiza em sensores, atuadores, ECUs, gateways e redes — e por que a topologia define o que o software pode ou não garantir."
trilha: fundamentos
ordem: 2
nivel: introdutorio
preRequisitos:
  - Como o software de um veículo se organiza
status: publicado
objetivos:
  - Descrever os blocos de uma arquitetura E/E e o papel de cada um.
  - Explicar topologias ponto a ponto, barramento e estrela no contexto veicular.
  - Relacionar arquitetura física com decisões de software, diagnóstico e atualização.
normas:
  - ISO 26262 (contexto de item e arquitetura)
fontes:
  - titulo: AUTOSAR — Overview
    url: https://www.autosar.org/
    tipo: documentacao
    nota: Contexto de arquitetura de software sobre plataformas E/E.
  - titulo: Documentação do SocketCAN no kernel Linux
    url: https://docs.kernel.org/networking/can.html
    tipo: documentacao
  - titulo: Prática industrial de arquitetura E/E
    tipo: pratica
    nota: Síntese didática de padrões comuns em veículos de passeio e comerciais; não descreve uma montadora específica.
limitacoes:
  - Não detalha esquemas elétricos de um veículo real.
  - Não cobre EMC, harness design nem seleção de conectores.
  - A migração para arquitetura zonal é descrita em nível conceitual.
laboratorio:
  titulo: Inventário de uma arquitetura E/E fictícia
  objetivo: Modelar um veículo simplificado com 8 ECUs, 2 segmentos CAN, 1 LIN e 1 gateway, listando quem publica e quem consome cada sinal.
  dificuldade: basico
  entradas: Lista de funções (freio, motor, porta, cluster, telemática) e restrições de latência.
  saida: Tabela de nós, redes e mensagens com justificativa de por que cada função ficou em cada domínio.
  riscos: Não copiar topologias proprietárias de manuais de oficina sem adaptar para um cenário fictício.
revisao: "1.0"
atualizadoEm: 2026-07-30
---

Arquitetura elétrica/eletrônica (*E/E architecture*) é o desenho de como energia, sensores, atuadores e computadores se conectam no veículo. Software automotivo não flutuam no vazio: ele herda as restrições dessa topologia.

## Os blocos básicos

Todo projeto E/E combina, em proporções diferentes, os mesmos blocos:

- **Sensor** — transforma grandeza física em sinal elétrico ou digital (posição do pedal, temperatura, rotação da roda).
- **Atuador** — transforma decisão de software em ação física (injetor, motor de vidro, válvula de freio).
- **ECU** — executa lógica, fecha malhas de controle e publica estado.
- **Gateway** — conecta redes diferentes, filtra, traduz e isola.
- **Fonte e distribuição de energia** — bateria, gerador/alternador ou HV em elétricos, fusíveis, relés e redes de alimentação.
- **Harness** — o chicote: massa de fios, conectores e proteções que tornam o desenho caro, pesado e difícil de mudar.

Se você só pensa em "mensagens", ignora metade do problema. A mensagem só existe porque um sensor foi lido, um processador decidiu e um meio físico conseguiu entregar a tempo.

## Do ponto a ponto ao barramento

Historicamente, funções simples eram ligadas por fio dedicado: interruptor → lâmpada. Isso escala mal. Cada nova função adiciona cobre, peso, custo e pontos de falha.

O barramento compartilhado inverte a lógica: vários nós falam no mesmo meio, multiplexando informação. CAN e LIN existem para reduzir chicote e permitir que funções compartilhem estado. Ethernet automotivo aparece quando a multiplexação clássica não entrega banda suficiente — especialmente câmeras e atualização de software.

Três topologias aparecem o tempo todo:

| Topologia | Ideia | Trade-off típico |
| --- | --- | --- |
| Ponto a ponto | Um fio, uma função | Simples, mas explode em cobre |
| Barramento | Vários nós no mesmo meio | Eficiente, porém compartilhado e sujeito a contenção |
| Estrela / switched | Nós ligados a um switch ou controlador | Mais banda e isolamento, mais infraestrutura |

Arquitetura zonal é, em essência, uma aposta em menos chicote longo e mais inteligência local por região física do veículo, com um backbone de alta velocidade ligando as zonas.

## Domínio versus zona

Há duas formas comuns de agrupar funções:

- **Por domínio funcional** — powertrain, chassi, carroceria, infotenimento. Útil porque requisitos e fornecedores se organizam assim.
- **Por zona física** — dianteira esquerda, traseira direita, teto, porta. Útil porque o chicote e o comprimento do cabo se organizam assim.

Veículos modernos misturam as duas lógicas. Você pode ter um controlador zonal na porta que agrega funções de carroceria locais, enquanto uma função de freio continua isolada por razões de safety. O software precisa saber se está falando com um vizinho de zona, um par de domínio ou um serviço central.

## O gateway não é só um "router"

Em IP, um roteador encaminha pacotes entre redes. No veículo, o gateway frequentemente faz mais:

- filtra o que pode sair de um segmento crítico;
- traduz formato (CAN ↔ Ethernet, sinais ↔ serviços);
- aplica políticas de diagnóstico e atualização;
- protege a rede interna de ferramentas externas e de nós comprometidos.

Do ponto de vista de software, isso significa que **nem toda mensagem que existe no veículo é visível no seu segmento**. Se o seu código "não vê" um sinal, a causa pode ser política de gateway, não bug de driver.

## Energia e estados do veículo

Software embarcado vive sob estados de alimentação. Exemplos típicos, em linguagem de engenharia de produto:

- veículo desligado com consumo mínimo (*quiescent current*);
- acordar por evento (abertura de porta, comando remoto, timer);
- operação normal;
- modo degradado após falha;
- atualização, diagnóstico ou produção na linha de montagem.

Uma função que assume "sempre estou ligado e a rede está estável" falha em campo. Mensagens periódicas desaparecem quando um domínio dorme. Watchdogs disparam quando a alimentação oscila. Persistência precisa sobreviver a brownout.

## O que a topologia impõe ao software

Algumas consequências práticas:

1. **Latência é caminho, não só CPU.** O atraso inclui amostragem, processamento, fila do barramento, gateway e atuação.
2. **Disponibilidade é parcial.** Um segmento pode estar vivo enquanto outro está em sleep ou bus-off.
3. **Variantes multiplicam combinações.** O mesmo software pode rodar em veículos com conjuntos diferentes de ECUs e opções.
4. **Diagnóstico depende de roteamento.** UDS/DoIP atravessam gateways; o caminho de teste não é óbvio.
5. **Atualização é problema de sistema.** Atualizar uma ECU sem coordenar dependências pode deixar o veículo inconsistente.

## Erros comuns de interpretação

- Desenhar arquitetura só com caixas de software, sem redes e alimentação.
- Assumir broadcast global: "se publiquei no CAN, todo mundo sabe".
- Tratar gateway como transparente e sem política.
- Confundir domínio funcional com zona física.
- Ignorar estados de energia ao projetar timeouts e heartbeats.

## Resumo

Arquitetura E/E é o contrato físico sobre o qual o software opera. Domínios, zonas, gateways e alimentação definem o que pode ser observado, quando pode ser atuado e o que acontece quando parte do veículo dorme ou falha.

## Perguntas de verificação

1. Qual problema o barramento resolve que o fio dedicado não escala?
2. Por que um sinal pode existir no veículo e mesmo assim não aparecer no seu segmento CAN?
3. Dê um exemplo de requisito de software que muda quando a ECU pode entrar em sleep.
