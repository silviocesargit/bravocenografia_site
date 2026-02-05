'use client'

import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import { ABOUT_TEXT, MISSION_VISION_VALUES } from '@/lib/constants'

export default function Sobre() {
  return (
    <div>
      <Section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="text-5xl font-bold text-foreground mb-8">Sobre a Bravo Cenografia</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {ABOUT_TEXT.description.split('\n\n')[0]}
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{MISSION_VISION_VALUES.mission.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {MISSION_VISION_VALUES.mission.description}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{MISSION_VISION_VALUES.vision.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {MISSION_VISION_VALUES.vision.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section className="bg-background py-20">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Nossos Valores</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {MISSION_VISION_VALUES.values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-lg font-semibold text-primary">{value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}