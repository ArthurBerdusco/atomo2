"use client";

import escritorio from "@hero/office-6.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id={"hero"}
      className="bg-sky-950 text-white rounded-3xl grid max-w-screen-xl mt-24 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 relative"
    >
      {/* Conteúdo principal */}
      <div className="mr-auto place-self-center lg:col-span-7 px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-28 z-10">
        <h1 className="mb-6 font-extrabold tracking-tight leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Seu escritório seguro e funcionando sempre.
        </h1>

        <a
          href="https://wa.me/5511964685030"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-base md:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar em contato
        </a>
      </div>

      {/* Imagem para telas grandes */}
      <div className="lg:col-span-5 lg:flex hidden z-0">
        <div className="relative w-full h-full clip-diagonal">
          <Image
            src={escritorio}
            layout="fill"
            objectFit="cover"
            alt="Escritório"
            className="rounded-r-3xl"
          />
        </div>
      </div>

      {/* Imagem para telas pequenas */}
      <div className="lg:hidden w-full mt-6 z-0">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src={escritorio}
            layout="fill"
            objectFit="cover"
            alt="Escritório"
          />
        </div>
      </div>

      {/* Ícones ou padrões de fundo */}
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>

      {/* Estilo customizado */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
}
