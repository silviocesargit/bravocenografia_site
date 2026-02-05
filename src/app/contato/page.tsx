'use client'

import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'

export default function Contato() {
  return (
    <div>
      <Section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold text-foreground mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground">
              Pronto para transformar sua ideia em cenografia? Fale conosco!
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {/* Contato */}
          <FadeIn>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Informações</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📍 ENDEREÇO</p>
                  <p className="text-foreground mt-1">{CONTACT_INFO.address.full}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📱 WHATSAPP</p>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    className="text-primary hover:underline mt-1"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📸 INSTAGRAM</p>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-1"
                  >
                    @bravocenografia
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center">
              <Button
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
                className="mb-4 h-auto py-4"
              >
                💬 Falar no WhatsApp
              </Button>
              <p className="text-center text-muted-foreground text-sm">Resposta rápida garantida!</p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  )
}