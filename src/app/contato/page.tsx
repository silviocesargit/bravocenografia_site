'use client'

import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import ContactForm from '@/components/forms/ContactForm'
import { CONTACT_INFO } from '@/lib/constants'

export default function Contato() {
  return (
    <div>
      <Section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold text-foreground mb-6">Entre em Contato</h1>
            <p className="text-xl text-muted-foreground">
              Pronto para transformar sua ideia em cenografia? Fale conosco!
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Informações - Coluna 1 */}
          <FadeIn>
            <div className="bg-card p-8 rounded-lg border border-border h-fit">
              <h2 className="text-2xl font-bold text-foreground mb-6">Informações</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📍 ENDEREÇO</p>
                  <p className="text-foreground mt-2">{CONTACT_INFO.address.full}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📱 WHATSAPP</p>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    className="text-primary hover:underline mt-2 block font-semibold"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">📸 INSTAGRAM</p>
                  <a
                    href="https://instagram.com/bravocenografia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 block font-semibold"
                  >
                    @bravocenografia
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">⏰ HORÁRIO</p>
                  <p className="text-foreground mt-2">Seg - Sex: 9h às 18h</p>
                </div>
              </div>

              <Button
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
                className="w-full mt-8"
              >
                💬 WhatsApp
              </Button>
            </div>
          </FadeIn>

          {/* Formulário - Colunas 2-3 */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8">Envie sua Mensagem</h2>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  )
}