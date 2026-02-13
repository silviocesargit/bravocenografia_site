'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'
import Section from '@/components/sections/Section'
import FadeIn from '@/components/animations/FadeIn'
import Button from '@/components/ui/Button'
import VideoModal from '@/components/media/VideoModal'
import { CONTACT_INFO } from '@/lib/constants'
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data'

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string } | null>(null)

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
              <div
                className="group cursor-pointer"
                onClick={() => project.video && setSelectedVideo({ src: project.video, title: project.title })}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-all">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Video Play Button */}
                  {project.video && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-6 h-6 text-primary-foreground fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="w-full p-4">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.category}</p>
                      {project.video && <p className="text-xs text-primary mt-1">▶ Assista ao vídeo</p>}
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

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoSrc={selectedVideo?.src || ''}
        title={selectedVideo?.title}
      />
    </div>
  )
}