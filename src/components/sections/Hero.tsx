"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2400&auto=format&fit=crop"
        alt="Crianças brincando ao ar livre em um dia de sol, em um momento de convivência e descoberta"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-paper/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/30" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-20 w-20 overflow-hidden rounded-full shadow-soft ring-4 ring-paper/70 sm:h-24 sm:w-24"
        >
          <Image src="/logo.jpg" alt={`Logo ${SITE.name}`} fill sizes="96px" className="object-cover" priority />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-4xl font-light tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl"
        >
          {SITE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg font-medium text-primary-700 sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-base font-light leading-relaxed text-ink-soft sm:text-lg"
        >
          Plantamos oportunidades no presente para construir um futuro mais humano,
          criativo e cheio de possibilidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#sobre"
            className="rounded-full bg-primary-700 px-7 py-3.5 text-sm font-medium text-paper shadow-soft transition-transform hover:scale-[1.03]"
          >
            Conheça nossa história
          </a>
          <a
            href="#missao"
            className="rounded-full border border-ink/15 bg-paper/60 px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-xs transition-colors hover:bg-paper"
          >
            Nossa missão
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-ink/15 bg-paper/60 p-2.5 backdrop-blur-xs"
      >
        <ArrowDown size={18} className="text-ink-soft" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
