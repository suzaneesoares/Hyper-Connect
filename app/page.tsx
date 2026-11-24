"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CheckCircle2,
  Clock3,
  Cpu,
  Droplets,
  Leaf,
  MessageCircle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY, SERVICES, buildWhatsappUrl } from "@/lib/hyperconnect";

const ICONS: Record<string, typeof Sun> = {
  instalacao: Wrench,
  limpeza: Droplets,
  inversor: Settings2,
  carregador: BatteryCharging,
  automacao: Cpu,
};

export default function Home() {
  function openWhatsapp(serviceId?: string) {
    window.open(buildWhatsappUrl(serviceId), "_blank", "noopener,noreferrer");
  }

  const [monthlyBill, setMonthlyBill] = useState(650);

  const benefits = [
    {
      title: "Economize na conta de luz",
      text: "Reduza de forma significativa o valor que você paga todos os meses pela energia.",
      icon: TrendingUp,
    },
    {
      title: "Valorize seu imóvel",
      text: "Um sistema de energia solar pode agregar valor ao seu patrimônio.",
      icon: ShieldCheck,
    },
    {
      title: "Tenha mais previsibilidade",
      text: "Menos dependência dos reajustes e das oscilações da tarifa de energia.",
      icon: Clock3,
    },
    {
      title: "Produza energia limpa",
      text: "Gere sua própria energia renovável e reduza seu impacto ambiental.",
      icon: Leaf,
    },
  ];

  const savings = useMemo(() => {
    const rate = 0.42;
    const monthlySavings = monthlyBill * rate;
    const annualSavings = monthlySavings * 12;
    const fiveYearSavings = annualSavings * 5;

    return {
      monthlySavings,
      annualSavings,
      fiveYearSavings,
      rate,
    };
  }, [monthlyBill]);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0e5a7f_0%,_#094360_22%,_#062f49_100%)] text-[#FCEEA8]">
      <header className="fixed top-0 z-40 w-full">
        <div className="mx-auto mt-4 max-w-6xl px-6">
          <div className="flex items-center justify-between rounded-full border border-[#FCEEA8]/15 bg-[#0a3d5d]/80 px-5 py-3 shadow-[0_18px_50px_rgba(5,22,32,0.35)] backdrop-blur-xl">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FCEEA8] shadow-lg shadow-[#FCEEA8]/20">
                <Sun className="h-4 w-4 text-[#094360]" />
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                HyperConnect
              </span>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-[#FCEEA8]/80 md:flex">
              <a
                className="transition-opacity hover:text-[#FCEEA8]"
                href="#beneficios"
              >
                Benefícios
              </a>

              <a
                className="transition-opacity hover:text-[#FCEEA8]"
                href="#servicos"
              >
                Serviços
              </a>

              <a
                className="transition-opacity hover:text-[#FCEEA8]"
                href="#como-funciona"
              >
                Como funciona
              </a>
            </nav>

            <Button
              variant="solar"
              size="sm"
              onClick={() => openWhatsapp()}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(252,238,168,0.18),_transparent_35%)]" />

          <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
            {/* TEXTO */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FCEEA8]/20 bg-[#FCEEA8]/5 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FCEEA8]/90">
                <Leaf className="h-3.5 w-3.5" />
                {COMPANY.tagline}
              </span>

              <h1 className="mt-8 max-w-xl text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-[3.6rem] lg:text-[5rem]">
                Seu gasto com energia
                <span className="mt-2 block text-[#FCEEA8]">
                  pode virar dinheiro no seu bolso.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FCEEA8]/80 md:text-lg">
                Com energia solar e soluções inteligentes, você deixa de pagar
                só conta e passa a aproveitar a própria energia gerada no seu
                imóvel, com mais economia e mais liberdade.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  variant="solar"
                  size="xl"
                  onClick={() => openWhatsapp()}
                >
                  Falar no WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <Button variant="outline" size="xl" asChild>
                  <a href="#servicos">Ver serviços</a>
                </Button>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 sm:gap-6">
                {[
                  ["Até 95%", "de economia"],
                  ["25 anos", "de vida útil"],
                  ["R$ 1.2k", "por mês"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-[#FCEEA8]/10 bg-[#FCEEA8]/5 px-4 py-4 backdrop-blur-sm"
                  >
                    <dt className="font-display text-xl font-semibold text-[#FCEEA8] sm:text-2xl">
                      {value}
                    </dt>

                    <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#FCEEA8]/65">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* IMAGEM */}
            <div className="relative -translate-y-6 lg:-translate-y-10 lg:justify-self-end">
              <div className="relative rounded-[2rem] border border-[#FCEEA8]/20 bg-[#0a3653]/80 p-4 shadow-[0_30px_90px_rgba(10,22,32,0.55)] backdrop-blur-xl">
                <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-[#FCEEA8]/20 blur-3xl" />

                <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-[#7ad7d8]/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-[#FCEEA8]/10 bg-[#0d4b69]">
                  <div className="flex h-[420px] w-full max-w-[520px] items-center justify-center overflow-hidden md:h-[500px]">
                    <Image
                      src="/hero-solar.png"
                      alt="Painéis solares"
                      width={800}
                      height={500}
                      className="h-full w-full object-cover object-center opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section
          id="beneficios"
          className="border-y border-white/10 bg-[#0b2032]/40 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FCEEA8]/70">
                Por que fazer a mudança
              </p>

              <h2 className="mt-4 text-3xl font-medium text-white sm:text-4xl">
                O dinheiro que você gasta hoje pode passar a trabalhar por
                você.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map(({ title, text, icon: Icon }) => (
                <Card
                  key={title}
                  className="h-full border-[#FCEEA8]/10 bg-[#0d4d6c]/80 shadow-[0_20px_50px_rgba(4,24,36,0.25)]"
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCEEA8]/10">
                      <Icon className="h-5 w-5 text-[#FCEEA8]" />
                    </span>

                    <h3 className="mt-6 text-xl font-medium text-white">
                      {title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#FCEEA8]/75">
                      {text}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#FCEEA8]">
                      <Sparkles className="h-4 w-4" />
                      Mais eficiência
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULADORA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[2rem] border border-[#FCEEA8]/10 bg-[#0d4d6c]/75 p-6 shadow-[0_25px_70px_rgba(4,24,36,0.25)] md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#FCEEA8]/70">
                    Calculadora de economia
                  </p>

                  <h2 className="mt-3 text-3xl font-medium text-white">
                    Veja quanto você pode economizar.
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#FCEEA8]/75">
                    Descubra uma estimativa realista com base no valor da sua
                    conta de luz.
                  </p>
                </div>

                <div className="w-full max-w-sm rounded-[1.5rem] border border-[#FCEEA8]/10 bg-[#062b3d]/90 p-4">
                  <label
                    htmlFor="valor-conta"
                    className="block text-xs uppercase tracking-[0.18em] text-[#FCEEA8]/65"
                  >
                    Valor da conta de luz
                  </label>

                  <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#FCEEA8]/10 bg-[#0a3653] px-3 py-3">
                    <span className="text-base text-[#FCEEA8]">R$</span>

                    <input
                      id="valor-conta"
                      type="number"
                      min="0"
                      step="10"
                      value={monthlyBill}
                      onChange={(event) =>
                        setMonthlyBill(Number(event.target.value) || 0)
                      }
                      className="w-full bg-transparent text-lg font-medium text-[#FCEEA8] outline-none placeholder:text-[#FCEEA8]/40"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-[#FCEEA8]/10 bg-[#FCEEA8]/5 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#FCEEA8]/60">
                    Economia por mês
                  </p>

                  <p className="mt-3 text-3xl font-medium text-[#FCEEA8]">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(savings.monthlySavings)}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#FCEEA8]/10 bg-[#FCEEA8]/5 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#FCEEA8]/60">
                    Economia por ano
                  </p>

                  <p className="mt-3 text-3xl font-medium text-[#FCEEA8]">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(savings.annualSavings)}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#FCEEA8]/10 bg-[#FCEEA8]/5 p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#FCEEA8]/60">
                    5 anos
                  </p>

                  <p className="mt-3 text-3xl font-medium text-[#FCEEA8]">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(savings.fiveYearSavings)}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#FCEEA8]/10 bg-[#062b3d]/80 p-5 text-sm leading-relaxed text-[#FCEEA8]/80">
                Com uma conta de luz de{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(monthlyBill)}
                , a estimativa aponta uma economia de{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(savings.monthlySavings)}{" "}
                por mês,{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(savings.annualSavings)}{" "}
                por ano e mais de{" "}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(savings.fiveYearSavings)}{" "}
                em 5 anos.
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-[#FCEEA8]/70">
                  Soluções
                </p>

                <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
                  Tudo para deixar sua energia mais inteligente.
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#FCEEA8]/15 bg-[#FCEEA8]/5 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-[#FCEEA8]/75">
                <Zap className="h-3.5 w-3.5" />
                Energia sob medida
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => {
                const Icon = ICONS[service.id] ?? Sun;

                return (
                  <Card
                    key={service.id}
                    className="group flex h-full flex-col justify-between border-[#FCEEA8]/10 bg-[#0d4d6c]/80 transition-transform duration-300 hover:-translate-y-1 hover:border-[#FCEEA8]/25"
                  >
                    <CardContent className="p-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FCEEA8]/10">
                        <Icon className="h-5 w-5 text-[#FCEEA8]" />
                      </span>

                      <h3 className="mt-6 text-xl font-medium text-white">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-[#FCEEA8]/70">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {service.details.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-[#FCEEA8]/80"
                          >
                            <Check className="h-3.5 w-3.5 text-[#FCEEA8]" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Button
                        variant="solar"
                        className="mt-7 w-full"
                        onClick={() => openWhatsapp(service.id)}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Pedir orçamento
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="border-t border-white/10 bg-[#0b2032]/35 py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#FCEEA8]/70">
                Como funciona
              </p>

              <h2 className="mt-3 text-3xl font-medium text-white sm:text-4xl">
                Rápido, simples e pensado no seu resultado.
              </h2>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                [
                  "01",
                  "Você me conta sua demanda",
                  "Escolha um serviço e envie sua necessidade direto no WhatsApp.",
                ],
                [
                  "02",
                  "Recebe orientações e proposta",
                  "Nossa equipe analisa seu consumo e mostra a melhor solução para seu caso.",
                ],
                [
                  "03",
                  "Sua energia começa a gerar retorno",
                  "Instalação, otimização e acompanhamento para você economizar de verdade.",
                ],
              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className="rounded-[1.75rem] border border-[#FCEEA8]/10 bg-[#0d4d6c]/70 p-6"
                >
                  <span className="font-display text-5xl font-medium text-[#FCEEA8]/20">
                    {step}
                  </span>

                  <h3 className="mt-5 text-xl font-medium text-white">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#FCEEA8]/65">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[radial-gradient(circle_at_top,_#f7e7ae_0%,_#f4d67a_28%,_#f3d06f_100%)] py-24 text-[#094360]">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#094360]/70">
                Energia que vale a pena
              </p>

              <h2 className="mt-5 text-3xl font-medium sm:text-5xl">
                Mais economia. Mais liberdade. Mais valor para o seu dinheiro.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#094360]/80">
                Fale com a {COMPANY.name} e descubra como transformar sua conta
                de energia em uma vantagem real para sua casa ou empresa.
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#094360]/85">
                {[
                  "Resposta ágil",
                  "Visita técnica sem custo",
                  "Equipe especializada",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-full bg-[#094360]/5 px-4 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                size="xl"
                className="mt-10 bg-[#094360] text-[#FCEEA8] hover:bg-[#094360]/90"
                onClick={() => openWhatsapp()}
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </Button>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#094360]/10 bg-[#094360] shadow-[0_25px_70px_rgba(9,67,96,0.2)]">
              <Image
                src="/hero-solar.png"
                alt="Casa com energia solar"
                width={800}
                height={560}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-[#FCEEA8]/60 sm:flex-row">
          <p className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-[#FCEEA8]" />
            {COMPANY.name} — {COMPANY.tagline}
          </p>

          <p>{COMPANY.email}</p>
        </div>
      </footer>
    </div>
  );
}
