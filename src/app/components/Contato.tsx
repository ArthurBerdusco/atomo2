import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  return (
    <section  id={"contato"} className="bg-white mb-12 rounded-3xl py-16 px-8 lg:px-16 mx-auto max-w-screen-xl mt-12 shadow-lg">
      {/* Título e descrição */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          Entre em Contato com a <span className="text-blue-400">Átomo</span>
        </h2>
        <p className="text-lg text-gray-900 max-w-3xl mx-auto leading-relaxed">
          Estamos prontos para ajudar com soluções de manutenção, instalação e reparos. 
          Fale conosco no telefone 11986745464 ou pelo email atomo@gmail.com
        </p>
      </div>

      {/* Grade de contato */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* E-mail */}
        <a
          href="mailto:atomomanutencao@gmail.com"
          className="flex items-center gap-4 bg-white text-gray-800 hover:text-blue-600 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          <FaEnvelope className="text-stone-600 text-3xl" />
          <span className="text-lg font-semibold">atomomanutencao@gmail.com</span>
        </a>

        {/* Telefone */}
        <a
          href="tel:+5511986745464"
          className="flex items-center gap-4 bg-white text-gray-800 hover:text-blue-600 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          <FaPhone className="text-blue-600 text-3xl" />
          <span className="text-lg font-semibold">+55 (11) 98674-5464</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5511986745464"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white text-gray-800 hover:text-green-500 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          <FaWhatsapp className="text-green-500 text-3xl" />
          <span className="text-lg font-semibold">+55 (11) 98674-5464</span>
        </a>
      </div>
    </section>
  );
}
