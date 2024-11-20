'use client'
import { Badge } from '@/components/ui/badge';
import { useSpring, animated } from '@react-spring/web';

export default function About() {
  // Animações com React Spring
  const fadeInLeft = useSpring({ opacity: 1, x: 0, from: { opacity: 0, x: -20 } });
  const fadeInRight = useSpring({ opacity: 1, x: 0, from: { opacity: 0, x: 20 } });

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Primeira coluna com animação */}
          <animated.div style={fadeInLeft} className="space-y-6">
            <Badge variant="secondary">Sobre Nós</Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Excelência em Manutenção e Instalação desde 2010
            </h2>
            <p className="text-gray-600">
              A Atomo Manutenção é especializada em fornecer soluções completas de manutenção
              e instalação para ambientes corporativos, escritórios e edifícios comerciais e
              residenciais.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600">14+</h4>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600">5000+</h4>
                <p className="text-gray-600">Projetos Realizados</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600">98%</h4>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-blue-600">24/7</h4>
                <p className="text-gray-600">Suporte Técnico</p>
              </div>
            </div>
          </animated.div>

          {/* Segunda coluna com animação */}
          <animated.div style={fadeInRight} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-blue-900">Nossa Missão</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Fornecer soluções integradas de manutenção com excelência e inovação.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900">Nossos Valores</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Comprometimento, qualidade e respeito em cada serviço prestado.
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900">Nossa Visão</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Ser referência nacional em soluções de manutenção predial.
                </p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-blue-900">Diferencial</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Equipe especializada e atendimento personalizado 24 horas.
                </p>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
}
