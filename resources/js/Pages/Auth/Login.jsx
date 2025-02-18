import * as React from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/Components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const loginSchema = z.object({
    email: z.string().email("Informe um e-mail válido."),
    password: z.string(),
    remember: z.boolean(),
});

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

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return (
        <main className="flex min-h-screen overflow-hidden">
            {/* ESQUERDA: Área de Login */}
            <section className="flex w-1/2 flex-col justify-center self-center px-8">
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
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="mb-2">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Digite seu email"
                                                className=""
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="mb-2">
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Digite sua senha"
                                                type="password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-between items-center mb-4">
                                <FormField
                                    control={form.control}
                                    name="remember"
                                    render={({ field }) => (
                                        <FormItem className="flex gap-2 items-center">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <FormLabel className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !m-0">
                                                Lembrar-me
                                            </FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <a className="text-sm font-semibold" href="">
                                    Esqueceu a senha?
                                </a>
                            </div>

                            {/* Botão de Login */}
                            <Button
                                type="submit"
                                variant="default"
                                className="bg-zinc-950 w-full"
                            >
                                Entrar
                            </Button>
                        </form>
                    </Form>
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
                                        <p className="text-xl font-semibold">
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
