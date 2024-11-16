import { IconType } from "react-icons";
import { 
  FaBolt, 
  FaBuilding, 
  FaWater, 
  FaCogs, 
  FaDoorClosed, 
  FaFan, 
  FaTools, 
  FaFire, 
  FaCamera, 
  FaLock, 
  FaLightbulb, 
  FaNetworkWired 
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
      "Reformas e construção de estruturas.",
      "Reparos em paredes, pisos e tetos.",
      "Impermeabilização de áreas internas e externas."
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
    name: "Automação",
    description: [
      "Configuração de sistemas de automação residencial.",
      "Automação de escritórios e sistemas industriais.",
      "Integração de dispositivos IoT e sistemas inteligentes."
    ],
    icon: FaCogs,
  },
  {
    id: 5,
    name: "Portas automáticas",
    description: [
      "Automatização de portas de vidro e portões residenciais.",
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
      "Instalação de aparelhos de ar condicionado split e central.",
      "Limpeza e manutenção preventiva de sistemas de climatização.",
      "Reparo de componentes como compressores e evaporadores."
    ],
    icon: FaFan,
  },
  {
    id: 8,
    name: "Pequenos Reparos",
    description: [
      "Conserto de fechaduras e dobradiças.",
      "Troca de torneiras e chuveiros.",
      "Ajustes em móveis e acessórios domésticos."
    ],
    icon: FaTools,
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
    name: "Eficiência Energética",
    description: [
      "Análise de consumo energético.",
      "Instalação de iluminação LED e dispositivos de economia.",
      "Consultoria em soluções de energia renovável."
    ],
    icon: FaLightbulb,
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
