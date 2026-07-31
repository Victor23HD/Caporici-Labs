export type Trilha = {
  id: string;
  numero: number;
  titulo: string;
  resumo: string;
  status: "ativa" | "planejada";
  temas: string[];
};

export const trilhas: Trilha[] = [
  {
    id: "fundamentos",
    numero: 0,
    titulo: "Orientação e fundamentos",
    resumo:
      "Arquitetura E/E, ECU, eletricidade necessária, representação de dados e determinismo, o mapa mental antes do protocolo.",
    status: "ativa",
    temas: [
      "Mapa do software veicular",
      "Arquitetura elétrica/eletrônica",
      "Eletricidade para desenvolvedores",
      "Representação de dados",
      "Tempo e determinismo",
    ],
  },
  {
    id: "can",
    numero: 1,
    titulo: "CAN do fio ao quadro",
    resumo:
      "Camada física, bit timing, arbitragem, formato clássico, fault confinement, carga e latência; depois CAN FD.",
    status: "planejada",
    temas: [
      "Camada física CAN",
      "Bit timing",
      "Arbitragem e formato",
      "Erros e confinamento",
      "CAN FD",
    ],
  },
  {
    id: "redes-classicas",
    numero: 2,
    titulo: "Ecossistema de redes clássicas",
    resumo:
      "DBC e sinais, SocketCAN, LIN, J1939 e gateways, do byte cru à grandeza física.",
    status: "planejada",
    temas: ["DBC", "SocketCAN", "LIN", "J1939", "Gateways"],
  },
  {
    id: "ecu",
    numero: 3,
    titulo: "Dentro da ECU",
    resumo:
      "MCU/SoC, startup, linker, interrupções, DMA, watchdog, bare metal, RTOS e Linux embarcado.",
    status: "planejada",
    temas: ["MCU e SoC", "Startup e linker", "RTOS", "Linux embarcado", "Watchdog"],
  },
  {
    id: "diagnostico",
    numero: 4,
    titulo: "Diagnóstico",
    resumo:
      "OBD-II versus diagnóstico de fabricante, ISO-TP, UDS, DTCs, DoIP, ODX e SOVD.",
    status: "planejada",
    temas: ["OBD-II", "ISO-TP", "UDS", "DoIP", "ODX e SOVD"],
  },
  {
    id: "autosar",
    numero: 5,
    titulo: "AUTOSAR",
    resumo:
      "Classic, Adaptive, ARXML, geração de código, integração de fornecedores e limites práticos.",
    status: "planejada",
    temas: ["Motivação", "Classic", "Adaptive", "ARXML", "Integração"],
  },
  {
    id: "ethernet-sdv",
    numero: 6,
    titulo: "Ethernet, arquitetura zonal e SDV",
    resumo:
      "Automotive Ethernet, SOME/IP, TSN, HPC, controladores zonais e observabilidade ponta a ponta.",
    status: "planejada",
    temas: ["Automotive Ethernet", "SOME/IP", "TSN", "Arquitetura zonal", "SDV"],
  },
  {
    id: "boot-ota",
    numero: 7,
    titulo: "Boot, atualização e operação",
    resumo:
      "Bootloader, secure boot, A/B, rollback, OTA, campanhas, SBOM e telemetria.",
    status: "planejada",
    temas: ["Bootloader", "Secure boot", "OTA", "SBOM", "Telemetria"],
  },
  {
    id: "safety-security",
    numero: 8,
    titulo: "Safety, reliability e cybersecurity",
    resumo:
      "ISO 26262, HARA, ASIL, modos degradados, ISO/SAE 21434, TARA e a relação safety–security.",
    status: "planejada",
    temas: ["ISO 26262", "HARA e ASIL", "ISO/SAE 21434", "TARA", "Reliability"],
  },
  {
    id: "testes-processo",
    numero: 9,
    titulo: "Testes e processo industrial",
    resumo:
      "MIL/SIL/PIL/HIL, restbus, fault injection, cobertura, rastreabilidade, ASPICE e evidence as code.",
    status: "planejada",
    temas: ["SIL e HIL", "Fault injection", "Cobertura", "ASPICE", "Evidence as code"],
  },
  {
    id: "sintese",
    numero: 10,
    titulo: "Síntese integradora",
    resumo:
      "Acompanhar uma informação do sensor à nuvem e projetar conceitualmente um veículo zonal virtual.",
    status: "planejada",
    temas: [
      "Do sensor à nuvem",
      "Veículo zonal virtual",
      "Integração das trilhas",
      "Checklist de maturidade",
    ],
  },
];

export function trilhaPorId(id: string): Trilha | undefined {
  return trilhas.find((trilha) => trilha.id === id);
}
