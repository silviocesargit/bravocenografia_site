'use client'

import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import { SERVICES } from '@/lib/constants'

export default function Servicos() {
  return (
    <div>
      <Section className="pt-32 pb-20">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold text-foreground mb-6">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em cenografia, do conceito ao resultado final.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.2}>
              <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors">
                <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="text-primary font-bold text-lg">▪</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  )
}