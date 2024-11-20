import Image from "next/image";
import cbre from "@clientes/cbre.png";
import zeiss from "@clientes/zeiss.png";
import vertin from "@clientes/vertin.png";
import levis from "@clientes/levis.png";
import thales from "@clientes/thales.png";
import iugu from "@clientes/iugu.png";
import gm from "@clientes/gm.png";
import leroy from "@clientes/leroy.jpg";

export default function Clientes() {
    const clientes = [
        { id: 1, src: cbre, alt: "CBRE Logo" },
        { id: 2, src: zeiss, alt: "Zeiss Logo" },
        { id: 4, src: levis, alt: "Levis Logo " },
        { id: 3, src: vertin, alt: "Vertin Logo" },
        { id: 5, src: thales, alt: "Thales Logo" },
        { id: 6, src: iugu, alt: "Iugu Logo" },
        { id: 7, src: gm, alt: "GM Financial" },
        { id: 8, src: leroy, alt: "Leroy Logo" },
    ];

    return (
        <section className="text-white rounded-3xl grid max-w-screen-xl mt-12 mx-auto lg:gap-8 xl:gap-0  relative">
            <h2 className="text-3xl font-extrabold text-sky-950 mb-12">
                Nossos Clientes
            </h2>

            {/* Grid Responsivo para Clientes */}
            <div className="grid grid-cols-2 md:grid-cols-8 gap-8">
                {clientes.map((cliente) => (
                    <div
                        key={cliente.id}
                        className="group cursor-pointer transition-colors duration-300 flex justify-center items-center"
                    >
                        {/* Contêiner para garantir o alinhamento e tamanho do fundo */}
                        <div className="w-32 h-32 p-4 bg-white rounded-full flex justify-center items-center shadow-md">
                            <div className="relative w-full h-full flex justify-center items-center">
                                <Image
                                    src={cliente.src}
                                    alt={cliente.alt}
                                    layout="intrinsic"
                                    width={150}
                                    height={150}
                                    className="grayscale group-hover:grayscale-0 duration-200 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
