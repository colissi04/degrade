import { Link, Head } from "@inertiajs/react";
import FloatEffect from "../Components/FloatEffect";
import "../../css/ScrollDown/ScrollDown.css";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex flex-col justify-center">
                <nav id="navbar" className="flex w-full fixed top-0 justify-between items-center px-80 py-4 bg-transparent backdrop-blur-md z-50">
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

                <section id="#main" className="relative w-full h-screen bg-black text-white">
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
                        <div class="container_mouse">
                            <span class="mouse-btn">
                                <span class="mouse-scroll"></span>
                            </span>
                            <span class="text-scroll">Deslize</span>
                        </div>
                    </div>
                </section>

                <section id="#about">
                    <div className="h-screen w-full bg-red-100">
                        <h1>teste</h1>  
                    </div>
                </section>
            </div>
        </>
    );
}
