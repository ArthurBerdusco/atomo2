'use client'
import { useState } from "react";
import Image from "next/image";
import logo from "./../images/logo.svg";

export default function Footer() {
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  const togglePolicyModal = () => {
    setShowPolicyModal(!showPolicyModal);
  };

  return (
    <>
      <footer className="bg-white shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image width={50} height={50} src={logo} alt="Atomo Soluções Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Atomo Soluções
              </span>
            </a>

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Sobre
                </a>
              </li>
              <li>
                <button onClick={togglePolicyModal} className="hover:underline me-4 md:me-6">
                  Política de Privacidade
                </button>
              </li>
              <li>
                  contato@atomo.com 
              </li>
              <li className="ml-4">
            
                   (11) 98674-5464
              
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              Atomo™
            </a>
            . Todos os direitos reservados.
          </span>
        </div>
      </footer>

      {/* Modal de Política de Privacidade */}
      {showPolicyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Política de Privacidade</h3>
            <p className="text-sm mb-4">
              Este site é destinado à exposição dos serviços da Atomo Soluções.
              Não coletamos dados pessoais sem o seu consentimento. Caso você entre em contato, as informações
              fornecidas serão usadas apenas para responder à sua solicitação.
            </p>
            <p className="text-sm">
              Para mais detalhes, entre em contato conosco por e-mail ou telefone. Estamos comprometidos em proteger
              sua privacidade e fornecer um serviço confiável.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={togglePolicyModal}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
