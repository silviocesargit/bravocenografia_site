'use client'

import Image from 'next/image'
import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { HERO_TEXT, ABOUT_TEXT, SERVICES, CTA_FINAL, CONTACT_INFO } from '@/lib/constants'
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <Section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <Image
            src="/images/hero/hero-bg.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center max-w-3xl relative z-10">
          <FadeIn direction="up" duration={0.8}>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {HERO_TEXT.headline}
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {HERO_TEXT.subheadline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} duration={0.8}>
            <p className="text-lg text-muted-foreground mb-12">
              {HERO_TEXT.description}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} duration={0.8}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
              >
                {HERO_TEXT.cta_budget}
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                {HERO_TEXT.cta_portfolio}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CASOS DESTACADOS */}
      <Section id="destaque" className="bg-card py-20">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-4">Projetos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos mais impactantes
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2}>
              <div className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-end">
                  <div className="w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="text-center mt-12">
          <Button href="/portfolio" size="lg" variant="secondary">
            Ver todos os projetos →
          </Button>
        </FadeIn>
      </Section>

      {/* SOBRE SECTION */}
      <Section id="sobre" className="bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-8">{ABOUT_TEXT.title}</h2>
          </FadeIn>

          <div className="space-y-6 text-muted-foreground">
            {ABOUT_TEXT.description.split('\n\n').map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <p className="text-lg leading-relaxed">{paragraph}</p>
              </FadeIn>
            ))}

            <FadeIn delay={0.6}>
              <p className="text-xl font-semibold text-primary border-l-4 border-primary pl-6">
                {ABOUT_TEXT.impact}
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* SERVIÇOS SECTION */}
      <Section id="servicos" className="bg-card">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-4">O que fazemos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Na Bravo, cuidamos de todo o processo. Do primeiro briefing à instalação final.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.2}>
              <div className="bg-background rounded-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section id="contato" className="bg-background text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold text-foreground mb-6">{CTA_FINAL.title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{CTA_FINAL.description}</p>
          <Button
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="primary"
          >
            {CTA_FINAL.cta}
          </Button>
        </FadeIn>
      </Section>
    </div>
  )
}