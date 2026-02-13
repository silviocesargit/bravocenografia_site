'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
}

export default function VideoModal({ isOpen, onClose, videoSrc, title }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Vídeo */}
        <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>

        {/* Título */}
        {title && (
          <div className="mt-4 text-white text-center">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        )}
      </div>
    </div>
  )
}
