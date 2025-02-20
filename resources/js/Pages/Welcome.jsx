import * as React from "react";
import { Link, Head } from "@inertiajs/react";

import Autoplay from "embla-carousel-autoplay";

import FloatEffect from "../Components/FloatEffect";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

import {Card, CardContent} from "../Components/ui/card";

import "../../css/ScrollDown/ScrollDown.css";

export default function Welcome() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    const arrayTeste = [
        { src: "", title: "teste", text: "blablablabla" },
        { src: "", title: "teste2", text: "bwewewewewew" },
        { src: "", title: "teste3", text: "dskdiejifowe" },
    ];
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

                    {/* Segunda seção do about */}
                    <div className="h-screen w-full flex flex-col items-center pt-28">
                        <h2 className="text-white text-6xl">Sobre nós</h2>
                        <div className="flex w-full h-full px-80 justify-between ">
                            <div className="w-full flex justify-center items-center bg-contain">
                                <img
                                    src={`${window.location.origin}/images/about.png`}
                                />
                            </div>
                            <div className="w-full flex justify-center items-center text-end">
                                <span className="text-5xl text-zinc-400">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero illo pariatur ullam
                                    culpa repellendus. Libero illo pariatur
                                    ullam culpa repellendus. Libero illo
                                    pariatur ullam culpa repellendus. Libero
                                    illo pariatur ullam culpa repellendus.
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Terceira seção do about */}
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
                    className="bg-red-100 h-screen flex flex-col items-center justify-center"
                >
                    {/* Título centralizado */}
                    <h2 className="text-2xl font-bold mb-6">Recursos</h2>

                    {/* Container que envolve o carrossel */}
                    <div className="bg-blue-300 w-full max-w-xl flex justify-center p-4">
                        <Carousel
                            plugins={[plugin.current]}
                            className="bg-pink-500"
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                        >
                            <CarouselContent>
                                {arrayTeste.map((item, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="bg-emerald-400"
                                    >
                                        <div className="p-1">
                                            <Card>
                                                <CardContent>
                                                    <span>{item.title}</span>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
            </div>
        </>
    );
}
