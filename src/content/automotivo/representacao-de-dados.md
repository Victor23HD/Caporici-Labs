---
titulo: "Representação de dados no embarcado automotivo"
resumo: "Bits, endianness, campos empacotados, ponto fixo, contadores e CRC — o vocabulário que aparece em todo DBC, UDS e log de barramento."
trilha: fundamentos
ordem: 4
nivel: introdutorio
preRequisitos:
  - Como o software de um veículo se organiza
status: publicado
objetivos:
  - Explicar como sinais físicos viram bits em um payload.
  - Distinguir endianness de byte e numeração de bits usada em DBC.
  - Usar escala, offset, sinal e CRC sem confundir representação com significado.
normas:
  - SAE J1939 (contexto de SPN/PGN)
fontes:
  - titulo: Documentação do SocketCAN no kernel Linux
    url: https://docs.kernel.org/networking/can.html
    tipo: documentacao
  - titulo: Prática de decodificação DBC / cantools
    tipo: pratica
    nota: DBC é formato de facto associado historicamente à Vector; não há norma ISO pública equivalente.
  - titulo: SAE J1939
    tipo: norma
    nota: Norma paga. Aqui usamos apenas o vocabulário público PGN/SPN como contexto.
limitacoes:
  - Não ensina a sintaxe completa de arquivos DBC.
  - Não cobre todos os algoritmos de CRC usados na indústria.
  - Exemplos são didáticos e não representam um veículo real.
laboratorio:
  titulo: Biblioteca portátil de sinais e CRC
  objetivo: Implementar empacotamento/desempacotamento de sinais com start bit, length, endianness, scale e offset, com vetores dourados.
  dificuldade: intermediario
  entradas: Casos de teste com payloads hex e valores físicos esperados.
  saida: Biblioteca C/C++ testada no host, com falhas deliberadas de endianness detectadas pelos testes.
  riscos: Não reutilizar DBCs proprietários; criar sinais fictícios.
revisao: "1.0"
atualizadoEm: 2026-07-30
---

No veículo, quase tudo que importa para o software chega como bytes. Temperatura, velocidade, posição de pedal e estado de falha são interpretações de bits empacotados. Confundir representação com significado é a fonte clássica de "o valor veio dobrado" e "a temperatura deu 4000 °C".

## Do físico ao bit

O caminho típico:

1. um sensor gera tensão, corrente ou dado digital;
2. um conversor ou front-end digitaliza;
3. o software da ECU escala, filtra e decide;
4. o resultado é empacotado em um payload de rede;
5. outro nó desempacota e usa.

DBC e mapas de sinal existem para documentar o passo 4 e 5. Sem eles, o payload é só um array opaco.

## Campos empacotados

Payloads automotivos raramente usam um `float` por sinal. Espaço é caro e a rede é compartilhada. Em vez disso, sinais ocupam um número específico de bits a partir de uma posição.

Conceitos essenciais:

- **start bit** — onde o sinal começa no payload;
- **length** — quantos bits ele ocupa;
- **signed / unsigned** — se o valor bruto admite negativo;
- **scale e offset** — conversão de bruto para físico: `fisico = bruto * scale + offset`.

Exemplo didático: um sinal de 8 bits, unsigned, scale `0.5`, offset `-40`.

- bruto `0` → físico `-40`
- bruto `100` → físico `10`
- bruto `255` → físico `87.5`

Se você imprimir o bruto achando que já é físico, o dashboard mente com confiança.

## Endianness: onde as pessoas se perdem

Há duas discussões diferentes que costumam ser misturadas:

1. **Ordem dos bytes na memória / no payload** — little-endian versus big-endian.
2. **Numeração de bits no DBC** — convenções Intel/Motorola para localizar o start bit.

Um sinal multi-byte pode ter seus bytes "ao contrário" do que sua intuição de desktop espera. O erro típico:

- ler `0x12 0x34` como `0x1234` quando o layout era `0x3412`;
- ou o inverso.

A regra operacional é brutalmente simples: **não invente**. Use a definição do sinal, escreva um teste com vetor conhecido e só então generalize.

## Contadores, live counters e freshness

Muitos frames carregam um contador que incrementa a cada transmissão. Ele não é "dado de negócio"; é evidência de frescura.

Para o receptor:

- contador que não muda pode significar retransmissão, gateway preso ou nó morto que ainda é espelhado;
- salto inesperado pode significar perda de frames;
- ausência prolongada é tão importante quanto valor errado.

Em sistemas safety-related, a combinação de contador + checksum/CRC end-to-end é comum para detectar empacotamento incorreto, stale data e certos defeitos de comunicação.

## CRC e checksum não são detalhe cosmética

CRC (*Cyclic Redundancy Check*) e checksums detectam corrupção. Eles não autentica origem e não substituem assinatura criptográfica.

Pontos práticos:

- cada protocolo escolhe polinômio, seed e quais bytes entram no cálculo;
- um CRC "certo" em bytes errados interpretados com endianness errada ainda pode passar no seu teste unitário mal escrito;
- teste de CRC precisa de vetores oficiais ou capturas validadas, não de intuição.

## Ponto fixo versus ponto flutuante

ECUs críticas frequentemente evitam `float` em caminhos quentes por previsibilidade, custo de hardware e determinismo. Ponto fixo — inteiro com scale implícito — é comum.

Implicações:

- overflow e saturização precisam ser explícitos;
- arredondamento muda resultado de controle;
- logs em float podem esconder a resolução real do sinal.

Quando um requisito diz "resolução 0.1 km/h", isso é afirmação sobre representação, não só sobre UX.

## Dados de diagnóstico não são dados de runtime

UDS e OBD expõem DIDs, DTCs e rotinas. A representação pode diferir do sinal de rede usado em tempo real:

- mesmo conceito físico, outro scale;
- availability bits;
- valores especiais para "não disponível" ou "erro de sensor".

Tratar dump de diagnóstico como se fosse o mesmo layout do frame periódico é atalho que produz ferramenta mentirosa.

## Erros comuns de interpretação

- Assumir que byte 0 é sempre o mais significativo.
- Ignorar bits reservados e usar máscaras largas demais.
- Esquecer offset negativo em temperaturas.
- Tratar ausência de atualização como "último valor ainda válido" sem política.
- Confundir CRC de frame CAN com proteção end-to-end de sinal.

## Resumo

Representação de dados é o contrato entre quem publica e quem consome. Start bit, length, endianness, scale, offset, contador e CRC são o alfabeto de qualquer conversa séria sobre DBC, J1939 e diagnóstico.

## Perguntas de verificação

1. Qual a diferença entre valor bruto e valor físico?
2. Por que um contador que congela pode ser mais grave do que um valor fora da faixa?
3. O que um CRC garante e o que ele não garante?
