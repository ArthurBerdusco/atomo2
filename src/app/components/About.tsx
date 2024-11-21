'use client'

export default function About() {

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-screen-xl mt-12 mx-auto lg:gap-8 xl:gap-0 relative">
        <h2 className="text-3xl font-extrabold text-sky-950 mb-12">Quem somos</h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Primeira coluna com animação */}
          <div className='space-y-6'>

            <h2 className="text-3xl font-bold text-gray-900">
              Soluções de Manutenção e Instalação para Ambientes Corporativos
            </h2>
            <p className="text-gray-600">
              A Átomo é especializada em serviços de manutenção e instalação para ambientes corporativos, escritórios e edifícios comerciais. 
              Oferecemos soluções práticas, personalizadas e eficientes, garantindo funcionalidade, segurança e conforto nos espaços de trabalho.
            </p>
          </div>

          {/* Segunda coluna com animação */}
          <div className='space-y-6'>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">

              <h3 className="font-semibold text-blue-900">Nossa Missão</h3>
              <p className="text-sm text-gray-600 mt-2">
                Garantir um ambiente corporativo bem cuidado e funcional, com serviços rápidos e de qualidade.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-gray-900">Nosso Diferencial</h3>
              <p className="text-sm text-gray-600 mt-2">
                Atendimento personalizado e soluções flexíveis para atender as necessidades do seu escritório.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
