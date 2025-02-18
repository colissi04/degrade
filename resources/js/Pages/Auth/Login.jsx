import React from "react";
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

const loginSchema = z.object({
    email: z.string().email("Informe um e-mail válido."),
    password: z.string(),
    remember: z.boolean(),
});

export default function Login() {
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
        <main className="flex min-h-screen">
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
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                            </FormControl>
                                            <FormLabel className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !m-0" >Lembrar-me</FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                )}
                            />
                            <a className="text-sm font-semibold" href="">Esqueceu a senha?</a>
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
            <section className="relative w-1/2  bg-black"></section>
        </main>
    );
}
