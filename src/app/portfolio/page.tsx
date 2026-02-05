'use client'

import Image from 'next/image'
import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

export default function Portfolio() {
  return (
    <div>
      <Section className="pt-32 pb-20">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold text-foreground mb-6">Nosso Portfólio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Veja os projetos que transformamos em experiências marcantes.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <p className="text-muted-foreground mb-6">Quer saber mais sobre um case específico?</p>
            <Button
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
            >
              Fale conosco
            </Button>
          </div>
        </FadeIn>
      </Section>
    </div>
  )
}