"use client";

import Image from "next/image";
import escritorio1 from "@hero/office-6.jpg";
import escritorio from "@hero/office.jpg";
import porta from "@hero/automatic-door1.webp";
import arCondicionado from "@hero/ar-condicionado.webp";
import manutencao from "@hero/maintenance.webp";
import detector from "@hero/detector.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      "title": "Seu escritório seguro e funcionando sempre.",
      "text": "Soluções completas para seu ambiente corporativo.",
      "img": escritorio1
    },
    {
      "title": "Manutenção Comercial 24h",
      "text": "Soluções gerais de manutenção e instalação para seu escritório e ambiente corporativo. Atendimento emergencial disponível 24 horas para garantir a continuidade do seu negócio.",
      "img": escritorio
    },
    {
      "title": "Manutenção Predial Completa",
      "text": "Cuidamos da estrutura física da sua empresa com soluções completas de manutenção. Segurança e funcionamento garantidos para suas instalações comerciais.",
      "img": manutencao
    },
    {
      "title": "Ar Condicionado: Instalação e Manutenção",
      "text": "Ambiente sempre agradável com nossa equipe especializada. Instalação e manutenção de sistemas de ar condicionado com eficiência energética para sua empresa.",
      "img": arCondicionado
    },
    {
      "title": "Portas Automáticas e Sistemas de Segurança",
      "text": "Instalação e manutenção de portas automáticas e sistemas de segurança com atendimento rápido. Proteja seu negócio com soluções confiáveis.",
      "img": porta
    },
    {
      "title": "Sistemas de Incêndio",
      "text": "Segurança contra incêndios com manutenção e instalação de sistemas completos. Conformidade com normas e proteção eficaz para sua empresa e colaboradores.",
      "img": detector
    }
  ];

  // Variantes de animação mais refinadas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop
      navigation={{
        // Remover o outline e outros estilos padrão que causam o efeito de barra piscando
        disabledClass: "swiper-button-disabled opacity-50",
      }}
      pagination={{ clickable: true }}
      className="rounded-xl grid max-w-screen-xl mt-24 shadow-2xl"
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      
      
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="relative w-full h-[450px] md:h-[600px]">
            <Image
              src={slide.img}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority={index === 0}
              unoptimized={typeof slide.img === "string"}
            />
            {/* Gradiente do transparente para preto na parte inferior */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 rounded-xl"></div>
          </div>

          <AnimatePresence mode="wait">
            {activeIndex === index && (
              <motion.div
                key={`content-${index}`}
                className="absolute inset-0 flex flex-col justify-end items-center text-white p-6 md:p-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              >
                <div className="max-w-3xl w-full mx-auto flex flex-col items-center space-y-6 pb-12">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-bold tracking-tight text-center leading-tight text-white drop-shadow-lg"
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-xl max-w-2xl text-center font-medium text-gray-100 leading-relaxed"
                  >
                    {slide.text}
                  </motion.p>

                  <motion.div 
                    className="mt-6 pt-2"
                  >
                    <a
                      href="https://wa.me/5511986745464"
                      className="inline-block px-8 py-4 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Entrar em contato pelo WhatsApp"
                    >
                      Entrar em contato
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}