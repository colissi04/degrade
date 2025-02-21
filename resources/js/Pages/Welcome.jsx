import * as React from "react";
import { Link, Head } from "@inertiajs/react";

import FloatEffect from "../Components/FloatEffect";

import "../../css/ScrollDown/ScrollDown.css";
import { EmblaCarousel } from "@/Components/ui/emblaCarousel";


export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col justify-center">
                <nav
                    id="navbar"
                    className="flex w-full fixed top-0 justify-between items-center px-80 py-4 bg-transparent backdrop-blur-md z-50"
                >
                    <a href="/">
                        <img
                            src={`${window.location.origin}/images/logo.png`}
                            className="w-20 h-auto"
                        />
                    </a>
                    <div>
                        <ul className="flex gap-4 text-zinc-400 font-semibold">
                            <li>
                                <a
                                    href="#home"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Início
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Recursos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Planos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#reviews"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Avaliações
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-zinc-50 transition-colors duration-200 delay-50"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link className="text-zinc-400 hover:text-zinc-50 transition-colors duration-200 delay-50 px-2 py-1 rounded-full font-medium">
                            Login
                        </Link>
                        <Link className="bg-white text-black hover:bg-zinc-400 transition-colors duration-200 delay-50 px-2 py-1 rounded-full font-medium">
                            Cadastrar
                        </Link>
                    </div>
                </nav>

                <section
                    id="main"
                    className="relative w-full h-screen bg-black text-white"
                >
                    <FloatEffect />
                    {/* overlay para escurecer*/}
                    /*<div className="absolute inset-0 bg-black/20"></div>*/
                    {/* Conteúdo que fica por cima (z-10) */}
                    <div className="flex flex-col justify-center items-center gap-8 absolute inset-0 z-10">
                        <h1 className="text-8xl font-semibold">
                            Conquiste Clientes
                        </h1>
                        <h2 className="text-2xl text-center text-zinc-400">
                            Nosso app é capaz de fidelizar clientes. <br />
                            Possuímos dashboards, relatórios, cadastro de
                            serviços e muito mais.
                        </h2>
                        {/* Scroll Down */}
                        <div>
                            <span className="mouse-btn">
                                <span className="mouse-scroll"></span>
                            </span>
                            <span className="text-scroll">Deslize</span>
                        </div>
                    </div>
                </section>

                <section id="about" className="bg-black">
                    {/* Primeira seção do about */}
                    <div className="h-screen w-full flex flex-col items-center pt-28">
                        <h2 className="text-white text-6xl">Sobre nós</h2>
                        <div className="flex w-full h-full px-80 justify-between ">
                            <div className="w-full flex justify-center items-center text-start">
                                <span className="text-5xl text-zinc-400">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero illo pariatur ullam
                                    culpa repellendus. Libero illo pariatur
                                    ullam culpa repellendus. Libero illo
                                    pariatur ullam culpa repellendus. Libero
                                    illo pariatur ullam culpa repellendus.
                                </span>
                            </div>
                            <div className="w-full flex justify-center items-center bg-contain">
                                <img
                                    src={`${window.location.origin}/images/about.png`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="bg-red-900 h-screen flex flex-col items-center justify-center"
                >
                    {/* Título centralizado */}
                    <h2 className="text-white text-6xl">Recursos</h2>

                    {/* Container que envolve o carrossel */}
                    <div className="bg-blue-300 w-full">
                        <EmblaCarousel />
                    </div>
                </section>
            </div>
        </>
    );
}
