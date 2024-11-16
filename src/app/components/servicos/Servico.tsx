import React, { useState } from 'react';
import { TipoServico } from './dadosServicos';

interface ServicoProps {
    servico: TipoServico;
}

const Servico: React.FC<ServicoProps> = ({ servico }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <>
            <div
                className="flex items-center px-6 py-12 border border-slate-300 hover:border-white hover:rounded-lg hover:bg-white cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={toggleModal}
            >
                <div className="w-20">
                    <servico.icon size={45} className="fill-white stroke-blue-900 stroke-[16px]" />
                </div>
                <h3 className="w-80 font-bold text-sky-900">{servico.name}</h3>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                    onClick={toggleModal}
                >
                    <div
                        className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full mx-4 relative text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            &times;
                        </button>
                        <div className="mb-6">
                            <servico.icon size={60} className="text-blue-600 mb-4" />
                            <h3 className="text-2xl font-bold text-blue-800 mb-4">{servico.name}</h3>
                        </div>
                        <ul className="text-gray-700 text-left space-y-2">
                            {servico.description.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-blue-600 font-bold">•</span>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleModal}
                            className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Servico;
