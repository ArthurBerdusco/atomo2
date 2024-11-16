import React from "react";
import Image from "next/image";
import servico from "@servicos/servico-detector.webp";

const Reserva = () => {
    return (
        <section className="bg-white h-auto grid max-w-screen-xl mt-12 mx-auto lg:gap-12 xl:gap-16 lg:grid-cols-12 relative px-6 py-16 rounded-3xl shadow-lg overflow-hidden">
            {/* Imagem */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center">
                <Image
                    src={servico}
                    width={400}
                    height={400}
                    alt="Serviço de manutenção"
                    className="rounded-3xl shadow-md"
                />
            </div>

            {/* Texto e CTA */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start text-left space-y-6">
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Contrate um{" "}
                    <span className="text-blue-600 underline">
                        serviço com preço fixo
                    </span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Nossa equipe oferece serviços de alta qualidade, incluindo instalações, reparos, manutenção e muito mais. Planeje seu próximo serviço com facilidade e confiança!
                </p>
                <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-2xl">💰</span>{" "}
                        <span className="font-medium">Preços acessíveis</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-2xl">📅</span>{" "}
                        <span className="font-medium">Atendimento agendado</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <span className="text-blue-600 text-2xl">💳</span>{" "}
                        <span className="font-medium">Pagamentos flexíveis</span>
                    </li>
                </ul>

              
               
            </div>
        </section>
    );
};

export default Reserva;
