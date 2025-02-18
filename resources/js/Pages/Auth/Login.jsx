import * as React from "react";
import { useForm } from "@inertiajs/react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Login() {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 10000, stopOnInteraction: true })
    );

    const slides = [
        {
            src: `${window.location.origin}/images/barber1.jpg`,
            text: "Lembretes automáticos para seus clientes nunca mais esquecerem um corte",
        },
        {
            src: `${window.location.origin}/images/barber2.jpg`,
            text: "Organização e praticidade para sua barbearia crescer sem estresse",
        },
        {
            src: `${window.location.origin}/images/barber3.jpg`,
            text: "Transforme sua barbearia em referência, garantindo praticidade e satisfação para seus clientes",
        },
        {
            src: `${window.location.origin}/images/barber4.jpg`,
            text: "Economize tempo e aumente lucros com uma plataforma de agendamento simples e eficaz",
        },
    ];

    // Configuração correta do useForm do Inertia
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // Submissão do formulário
    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <main className="flex min-h-screen overflow-hidden">
            {/* ESQUERDA: Área de Login */}
            <section
                className="flex w-1/2 flex-col justify-center items-center px-8 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${window.location.origin}/images/login-background.jpg')`,
                }}
            >
                <header className="flex flex-col justify-center self-center mb-10 w-2/5">
                    <div className="text-center mb-4">
                        <h1 className="font-semibold text-3xl">degradê</h1>
                        <h3 className="font-normal text-md">
                            Fidelize seus clientes investindo pouco.
                        </h3>
                    </div>
                    <div className="flex flex-row justify-center self-center gap-2">
                        <Button variant="outline" className="w-40">
                            Cadastrar
                        </Button>
                        <Button variant="default" className="w-40">
                            Entrar
                        </Button>
                    </div>
                </header>

                <article className="flex flex-col justify-center self-center w-2/5">
                    {/* Formulário de E-mail e Senha */}
                    <form onSubmit={submit} className="w-full">
                        <div className="mb-2">
                            <label className="block text-sm font-medium">
                                Email
                            </label>
                            <Input
                                placeholder="Digite seu email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="border-zinc-950 placeholder:text-zinc-700"
                                required
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-medium">
                                Senha
                            </label>
                            <Input
                                placeholder="Digite sua senha"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="border-zinc-950 placeholder:text-zinc-700"
                                required
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex gap-2 items-center">
                                <Checkbox
                                    checked={data.remember === "on"}
                                    onCheckedChange={(checked) => setData("remember", checked ? "on" : null)}
                                />
                                <label className="text-xs font-medium leading-none">
                                    Lembrar-me
                                </label>
                            </div>
                            <a className="text-sm font-semibold" href="">
                                Esqueceu a senha?
                            </a>
                        </div>

                        {/* Botão de Login */}
                        <Button
                            type="submit"
                            variant="default"
                            className="bg-zinc-950 w-full"
                            disabled={processing}
                        >
                            {processing ? "Entrando..." : "Entrar"}
                        </Button>
                    </form>
                </article>
            </section>

            {/* DIREITA: Imagem */}
            <section
                className="relative w-1/2 overflow-hidden"
                data-carousel="slide"
            >
                {/* Carrousel */}
                <Carousel
                    plugins={[autoplayPlugin.current]}
                    className="w-full h-full"
                    onMouseEnter={autoplayPlugin.current.stop}
                    onMouseLeave={autoplayPlugin.current.reset}
                >
                    <CarouselContent>
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="relative">
                                {/* Imagem */}
                                <img
                                    src={slide.src}
                                    alt={`Imagem ${index + 1}`}
                                    className="w-full h-screen object-cover"
                                />
                                {/* Texto */}
                                <div className="absolute inset-0 flex justify-center items-start pt-10">
                                    <div className="max-w-screen px-10 text-center uppercase italic text-white p-4 rounded-md">
                                        <p className="text-xl font-semibold select-none">
                                            {slide.text}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* Botão para voltar slide */}
                    <CarouselPrevious className="absolute ml-20 border-none" />
                    {/* Botão de Próximo */}
                    <CarouselNext className="absolute mr-20 border-none" />
                </Carousel>
            </section>
        </main>
    );
}
