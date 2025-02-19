import { Link, Head } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div className="flex justify-center">
                <nav className="flex w-full fixed top-0 justify-between items-center px-80 py-4 bg-transparent backdrop-blur-md z-50">    
                    <a href="/">
                    <img
                        src={`${window.location.origin}/images/logo.png`}
                        className="w-20 h-auto"
                    />
                    </a>
                    <div>
                        <ul className="flex gap-4 text-zinc-400 font-semibold">
                            <li><a href="#home" className="hover:text-zinc-50 transition-colors duration-200 delay-50">Início</a></li>
                            <li><a href="#about" className="hover:text-zinc-50 transition-colors duration-200 delay-50">Sobre</a></li>
                            <li><a href="#pricing" className="hover:text-zinc-50 transition-colors duration-200 delay-50">Planos</a></li>
                            <li><a href="#reviews" className="hover:text-zinc-50 transition-colors duration-200 delay-50">Avaliações</a></li>
                            <li><a href="#contact" className="hover:text-zinc-50 transition-colors duration-200 delay-50">Contato</a></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link className="text-zinc-400 hover:text-zinc-50 transition-colors duration-200 delay-50 px-2 py-1 rounded-full font-medium">Login</Link>
                        <Link className="bg-white text-black hover:bg-zinc-400 transition-colors duration-200 delay-50 px-2 py-1 rounded-full font-medium">Cadastrar</Link>
                    </div>
                </nav>

            <section className="relative flex w-full h-screen justify-center items-center bg-black text-white bg-[url('/images/bg2.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="flex flex-col justify-center items-center gap-8 relative z-10">
                    <h1 className="text-8xl font-semibold">Conquiste Clientes</h1>
                    <h2 className="text-2xl text-center text-zinc-400">Nosso app é capaz de fidelizar clientes. <br />Possuímos dashboards, relatórios, cadastro de serviços e muito mais.</h2>
                    <div>⭣</div>
                </div>
            </section>

            </div>
        </>
    );
}
