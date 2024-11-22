'use client';

import React from 'react';
import Servico from './Servico';
import { dadosServicos } from './dadosServicos';

const Servicos: React.FC = () => (
    <section id="services" className="text-white rounded-3xl grid max-w-screen-xl mt-12 mx-auto lg:gap-8 xl:gap-0 relative">
        <h2 className="text-3xl font-extrabold text-sky-950 mb-12">
            Serviços populares
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {dadosServicos.map(servico => (
                <Servico key={servico.id} servico={servico} />
            ))}
        </div>
    </section>
);

export default Servicos;
