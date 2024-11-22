import { IconType } from "react-icons";
import {
  FaBolt,
  FaBuilding,
  FaWater,
  FaDoorClosed,
  FaFan,
  FaTools,
  FaFire,
  FaCamera,
  FaLock,
  FaClipboard,
  FaNetworkWired,
  FaUserCheck
} from "react-icons/fa";

export interface TipoServico {
  id: number;
  name: string;
  description: string[];
  icon: IconType;
}

export const dadosServicos: TipoServico[] = [
  {
    id: 1,
    name: "Elétrica",
    description: [
      "Instalação de quadros elétricos e disjuntores.",
      "Manutenção preventiva e corretiva em redes elétricas.",
      "Instalação de tomadas, iluminação e equipamentos elétricos."
    ],
    icon: FaBolt,
  },
  {
    id: 2,
    name: "Civil",
    description: [
      "Construção e manutenção de paredes de drywall.",
      "Reparos em paredes, pisos e tetos.",
      "Pintura e acabamentos em geral."
    ],
    icon: FaBuilding,
  },
  {
    id: 3,
    name: "Hidráulica",
    description: [
      "Instalação e manutenção de encanamentos.",
      "Reparo de vazamentos e obstruções.",
      "Instalação de caixas d'água, bombas e sistemas de drenagem."
    ],
    icon: FaWater,
  },
  {
    id: 4,
    name: "Instalação e Manutenção de Leitores Faciais e Biometria",
    description: [
      "Instalação de leitores biométricos para controle de acesso",
      "Manutenção preventiva e corretiva de sistemas de biometria",
      "Soluções personalizadas para ambientes corporativos e escritórios"
    ],
    icon: FaUserCheck,
  },
  {
    id: 5,
    name: "Portas automáticas",
    description: [
      "Manutenção de portas de vidro.",
      "Manutenção de motores e sensores para portas automáticas.",
      "Instalação de sistemas de controle remoto para portões."
    ],
    icon: FaDoorClosed,
  },
  {
    id: 6,
    name: "Detecção e Alarme de Incêndio",
    description: [
      "Instalação de detectores de fumaça e calor.",
      "Manutenção de centrais de alarme de incêndio.",
      "Configuração de sistemas de evacuação de emergência."
    ],
    icon: FaFire,
  },
  {
    id: 7,
    name: "Ar Condicionado",
    description: [
      "Instalação de aparelhos de ar condicionado split, VRF e VRV.",
      "Limpeza e manutenção preventiva de sistemas de climatização.",
      "Reparo de componentes como compressores e evaporadores."
    ],
    icon: FaFan,
  },
  {
    "id": 8,
    "name": "Pequenos Reparos",
    "description": [
      "Ajuste e conserto de fechaduras em portas de escritórios.",
      "Troca e reparo de torneiras e acessórios em cozinhas e banheiros.",
      "Manutenção e ajuste de móveis corporativos, como cadeiras, mesas e armários."
    ],
    "icon": FaTools
  },
  {
    id: 9,
    name: "CFTV e Monitoramento",
    description: [
      "Instalação de câmeras de segurança internas e externas.",
      "Configuração de DVRs e sistemas de gravação.",
      "Manutenção de equipamentos de monitoramento."
    ],
    icon: FaCamera,
  },
  {
    id: 10,
    name: "Controle de Acesso",
    description: [
      "Instalação de catracas e dispositivos biométricos.",
      "Manutenção de sistemas de controle de portaria.",
      "Configuração de softwares de gestão de acesso."
    ],
    icon: FaLock,
  },
  {
    id: 11,
    name: "Identificação e Padronização de Circuitos Elétricos",
    description: [
      "Mapeamento e identificação dos circuitos de iluminação e tomadas.",
      "Padronização dos quadros de distribuição com etiquetas e diagramas.",
      "Auditoria do sistema elétrico para otimizar e garantir a conformidade com as normas"
    ],
    icon: FaClipboard,
  },
  {
    id: 12,
    name: "Infraestrutura de TI",
    description: [
      "Cabeamento estruturado para redes de dados.",
      "Configuração de servidores e roteadores.",
      "Manutenção de equipamentos de rede."
    ],
    icon: FaNetworkWired,
  },
];
