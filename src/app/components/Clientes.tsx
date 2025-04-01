'use client'

import Image from "next/image"
import cbre from "@clientes/cbre.png"
import zeiss from "@clientes/zeiss.png"
import levis from "@clientes/levis.png"
import iugu from "@clientes/iugu.png"
import gm from "@clientes/gm.png"
import leroy from "@clientes/leroy.png"

export default function Clientes() {
    const clientes = [
        { id: 1, src: cbre, alt: "CBRE Logo" },
        { id: 2, src: zeiss, alt: "Zeiss Logo" },
        { id: 3, src: levis, alt: "Levis Logo " },
        { id: 4, src: iugu, alt: "Iugu Logo" },
        { id: 5, src: gm, alt: "GM Financial" },
        { id: 6, src: leroy, alt: "Leroy Logo" },
    ]

    return (
        <section id="clientes" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-sky-950 text-center mb-4">
                    Nossos Clientes
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Empresas que confiam em nossas soluções para impulsionar seus negócios
                </p>

                <div className="relative overflow-hidden">
                    <div className="hover-group">
                        <div className="flex overflow-hidden relative">
                            {/* Primeira cópia dos slides */}
                            <div className="flex space-x-8 animate-infinite-scroll">
                                {clientes.map((cliente) => (
                                    <div
                                        key={cliente.id}
                                        className="m-5 relative min-w-[200px] h-24 bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 filter hover:grayscale-0 cursor-pointer"
                                    >
                                        <div className="w-full h-full relative flex items-center justify-center">
                                            <Image
                                                src={cliente.src}
                                                alt={cliente.alt}
                                                width={140}
                                                height={60}
                                                className="object-contain transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Segunda cópia dos slides */}
                            <div className="flex space-x-8 animate-infinite-scroll">
                                {clientes.map((cliente) => (
                                    <div
                                        key={`${cliente.id}-duplicate`}
                                        className="my-5 ml-5 relative min-w-[200px] h-24 bg-white rounded-lg shadow-lg p-4 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 filter hover:grayscale-0 cursor-pointer"
                                    >
                                        <div className="w-full h-full relative flex items-center justify-center">
                                            <Image
                                                src={cliente.src}
                                                alt={cliente.alt}
                                                width={140}
                                                height={60}
                                                className="object-contain transition-all duration-300"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}