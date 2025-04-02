'use client'

import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contato() {

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    setStatus("");
  
    const formData = new FormData(e.currentTarget);
  
    try {
      await fetch("https://formsubmit.co/ajax/arthur.berdusco1@gmail.com", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });
    } catch (error) {
    
      console.log(error);
    } finally {
      setStatus("Mensagem enviada com sucesso!");
      
      setTimeout(() => {
        setStatus("");
      }, 3000); // Oculta a mensagem após 3 segundos
    }
  };
  
  const [telefone, setTelefone] = useState("");

  const formatarTelefone = (value: string) => {
    // Remove todos os caracteres que não são números
    const numeros = value.replace(/\D/g, "");

    // Aplica a máscara (XX)XXXXX-XXXX
    let formatado = "";

    if (numeros.length > 0) formatado += `(${numeros.substring(0, 2)}`;
    if (numeros.length > 2) formatado += `)${numeros.substring(2, 7)}`;
    if (numeros.length > 7) formatado += `-${numeros.substring(7, 11)}`;

    return formatado;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatarTelefone(e.target.value));
  };

  return (
    <section id="contato" className="bg-white mb-12 rounded-3xl py-16 px-8 lg:px-16 mx-auto max-w-screen-xl mt-12 shadow-lg">
      {/* Título e descrição */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          Entre em Contato com a <span className="text-blue-500">Átomo</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Estamos prontos para ajudar com soluções de manutenção, instalação e reparos.
          Nossa equipe de especialistas está disponível para atender às suas necessidades.
        </p>
      </div>

      {/* Grade de contato */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* E-mail */}
        <a
          href="mailto:atomomanutencao@gmail.com"
          className="flex items-center gap-4 bg-gray-50 text-gray-800 hover:text-blue-500 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border border-gray-100"
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <FaEnvelope className="text-blue-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">E-mail</p>
            <span className="text-lg font-semibold">atomomanutencao@gmail.com</span>
          </div>
        </a>

        {/* Telefone */}
        <a
          href="tel:+5511964685030"
          className="flex items-center gap-4 bg-gray-50 text-gray-800 hover:text-blue-500 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border border-gray-100"
        >
          <div className="bg-blue-100 p-3 rounded-full">
            <FaPhone className="text-blue-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Telefone</p>
            <span className="text-lg font-semibold">+55 (11) 96468-5030</span>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5511964685030"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gray-50 text-gray-800 hover:text-green-500 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg border border-gray-100"
        >
          <div className="bg-green-100 p-3 rounded-full">
            <FaWhatsapp className="text-green-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
            <span className="text-lg font-semibold">+55 (11) 96468-5030</span>
          </div>
        </a>

        {/* Endereço */}
        <div className="flex items-center gap-4 bg-gray-50 text-gray-800 p-6 rounded-xl shadow-md border border-gray-100 md:col-span-3 lg:col-span-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Endereço</p>
            <span className="text-lg font-semibold">São Paulo, SP - Brasil</span>
          </div>
        </div>
      </div>

      {/* Formulário rápido */}
      <section className="mt-12 p-6 bg-gray-50 rounded-xl shadow-md border border-gray-100">
        <h3 className="text-2xl font-bold text-center mb-6">Envie uma Mensagem Rápida</h3>
        {status && (
          <p className={`text-center text-lg font-semibold ${status.includes("sucesso") ? "text-green-600" : "text-red-600"} transition-opacity duration-500 opacity-100`}>{status}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem! Em breve entraremos em contato." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input type="text" name="Nome" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Seu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" name="Email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Seu e-mail" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input
              type="text"
              name="Telefone"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="(  )   -    "
              value={telefone}
              onChange={handleChange}
              maxLength={16} // Limita o tamanho do input para evitar caracteres extras
            />          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
            <input type="text" name="Assunto" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Assunto da mensagem" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea name="Mensagem" required rows={4} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Sua mensagem"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
              Enviar Mensagem
          </button>
        </form>
      </section>
    </section>
  );
}