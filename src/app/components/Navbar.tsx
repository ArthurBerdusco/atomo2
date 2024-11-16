'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../images/logo.svg"
import { useState, useEffect } from "react"

export function Navbar() {
    const [bgColor, setBgColor] = useState("bg-transparent") // Estado para controlar a cor do background
    const [activeLink, setActiveLink] = useState('')  // Estado para controlar o link ativo

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setBgColor("bg-blue-700") // Cor quando a rolagem ultrapassar 50px
        } else {
            setBgColor("bg-transparent") // Cor inicial
        }

        // Detecção da posição da rolagem para mudar o link ativo
        const sections = ['hero', 'servicos', 'clientes', 'contato'];
        for (let sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section && window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight - 50) {
                setActiveLink(sectionId);
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Função para rolar suavemente até a seção
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }

    return (
        <header>
            <nav className={`${bgColor} dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image width={50} height={50} src={logo} alt="Atomo Soluções Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Atomo Soluções</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="#hero"
                                    scroll={false}  // Impede a rolagem automática do Next.js
                                    onClick={() => scrollToSection("hero")}
                                    className={`${activeLink === 'hero' ? 'text-blue-500' : 'text-gray-500'
                                        } hover:text-blue-700`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#servicos"
                                    scroll={false}
                                    onClick={() => scrollToSection("servicos")}
                                    className={`${activeLink === 'servicos' ? 'text-blue-500' : 'text-gray-500'
                                        } hover:text-blue-700`}
                                >
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#clientes"
                                    scroll={false}
                                    onClick={() => scrollToSection("clientes")}
                                    className={`${activeLink === 'clientes' ? 'text-blue-500' : 'text-gray-500'
                                        } hover:text-blue-700`}
                                >
                                    Clientes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contato"
                                    scroll={false}
                                    onClick={() => scrollToSection("contato")}
                                    className={`${activeLink === 'contato' ? 'text-blue-500' : 'text-gray-500'
                                        } hover:text-blue-700`}
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
