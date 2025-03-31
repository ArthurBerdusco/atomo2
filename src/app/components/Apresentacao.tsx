import React from "react";
import Image from "next/image";
import Link from "next/link";
// Importando react-icons
import { FaBuilding, FaBriefcase, FaIndustry, FaStore } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

import servico from "@servicos/servico-detector.webp";

const Apresentacao = () => {
  return (
    <section
      id="apresentacao"
      className="relative py-16 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-3xl">
            <span className="text-blue-600">Soluções profissionais</span> que transformam ambientes
          </h2>
        </div>

        {/* Main Content Section */}
        <div className="mt-8 lg:mt-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            {/* Left column - Image */}
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <div className="relative mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:max-w-none">
                <div className="relative shadow-xl rounded-2xl overflow-hidden">
                  <Image
                    src={servico}
                    alt="Serviços profissionais para ambientes corporativos"
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent opacity-20"></div>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-6">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0">
                <div className="space-y-8">
                  {/* Featured content */}
                  <div>
                    <p className="text-lg text-gray-600">
                      <strong className="text-blue-600">Elimine preocupações</strong> com a manutenção do seu espaço. Nossa expertise garante que você possa focar 100% no crescimento do seu negócio, enquanto cuidamos de toda a infraestrutura.
                    </p>
                  </div>

                  {/* Our services list */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl shadow-md p-5 transform transition-all hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <FaBuilding className="w-6 h-6 text-blue-600" />
                        <span className="ml-2 text-lg font-semibold text-gray-800">
                          Corporativo
                        </span>
                      </div>
                      <p className="text-gray-600">Manutenção completa para escritórios e sedes</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-5 transform transition-all hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <FaBriefcase className="w-6 h-6 text-blue-600" />
                        <span className="ml-2 text-lg font-semibold text-gray-800">
                          Coworkings
                        </span>
                      </div>
                      <p className="text-gray-600">Soluções para espaços compartilhados</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-5 transform transition-all hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <FaIndustry className="w-6 h-6 text-blue-600" />
                        <span className="ml-2 text-lg font-semibold text-gray-800">
                          Indústrias
                        </span>
                      </div>
                      <p className="text-gray-600">Manutenção especializada para fábricas</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-5 transform transition-all hover:scale-105 hover:shadow-lg">
                      <div className="flex items-center mb-2">
                        <FaStore className="w-6 h-6 text-blue-600" />
                        <span className="ml-2 text-lg font-semibold text-gray-800">
                          Comércio
                        </span>
                      </div>
                      <p className="text-gray-600">Serviços otimizados para lojas e varejo</p>
                    </div>
                  </div>

                  {/* Benefits section */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Benefícios exclusivos
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex">
                        <BsCheckCircleFill className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="ml-3 text-gray-700">Diagnóstico rápido e solução em até 24h</span>
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="ml-3 text-gray-700">Técnicos certificados com +10 anos de experiência</span>
                      </li>
                      <li className="flex">
                        <BsCheckCircleFill className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="ml-3 text-gray-700">Garantia estendida em todos os serviços</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link
                      href="https://wa.me/5511986745464"
                      target="_blank"
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <BiMessageDetail className="w-5 h-5 mr-2" />
                      Solicite um orçamento sem custo!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;