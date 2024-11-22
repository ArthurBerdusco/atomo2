import React from "react";
import Image from "next/image";
import servico from "@servicos/servico-detector.webp";

const Apresentacao = () => {
    return (
        <section  id={"apresentacao"} className="bg-white h-auto grid max-w-screen-xl mt-12 mx-auto lg:gap-12 xl:gap-16 lg:grid-cols-12 relative px-6 py-16 rounded-3xl shadow-lg overflow-hidden">
            {/* Imagem */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center">
                <Image
                    src={servico}
                    width={400}
                    height={400}
                    alt="Serviços profissionais para ambientes corporativos"
                    className="rounded-3xl shadow-md"
                />
            </div>

            {/* Texto e CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start text-left space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Soluções inteligentes{" "}
                    <span className="text-blue-600 underline">para ambientes corporativos</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Somos especializados em atender edifícios e escritórios corporativos, coworkings, fábricas, ambientes comerciais e espaços de trabalho.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Garantimos soluções personalizadas para manter seu ambiente seguro, funcional e eficiente, permitindo que você foque no crescimento do seu negócio.
                </p>

                {/* Lista com ícones */}
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-3xl">🏢</span>
                        <span className="text-gray-800 text-lg font-medium">
                            Edifícios corporativos e escritórios
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-3xl">💼</span>
                        <span className="text-gray-800 text-lg font-medium">
                            Coworkings e espaços compartilhados
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-3xl">🏭</span>
                        <span className="text-gray-800 text-lg font-medium">
                            Fábricas e indústrias
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-3xl">🛍️</span>
                        <span className="text-gray-800 text-lg font-medium">
                            Lojas e ambientes comerciais
                        </span>
                    </li>
                </ul>

                {/* Benefícios */}
                <div className="text-gray-700 mt-6">
                    <h3 className="text-2xl font-bold mb-4">Por que escolher a Átomo?</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                            <span className="text-blue-600 text-2xl">✅</span>
                            Atendimento rápido e personalizado
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-600 text-2xl">✅</span>
                            Equipe qualificada e experiente
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-600 text-2xl">✅</span>
                            Garantia de qualidade em todos os serviços
                        </li>
                    </ul>
                </div>

                {/* Botão CTA */}
                <a
                    href="https://wa.me/5511986745464"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md mt-6"
                >
                    Solicite um orçamento agora
                </a>
            </div>
        </section>



    );
};

export default Apresentacao;
