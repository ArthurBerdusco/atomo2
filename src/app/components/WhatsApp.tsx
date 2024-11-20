'use client'
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp: React.FC = () => {
    const handleClick = () => {
        window.open('https://wa.me/5511986745464', '_blank');
    };

    return (
        <aside>
            <button
                onClick={handleClick}
                className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg p-4 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300 hover:brightness-125"
                title="Fale conosco pelo WhatsApp"
            >
                <FaWhatsapp size={30} />
            </button>
        </aside>
    );
};

export default WhatsApp;
