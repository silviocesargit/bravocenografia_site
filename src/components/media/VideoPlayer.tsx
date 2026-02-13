'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  thumbnail?: string
  title?: string
  onPlay?: () => void
}

export default function VideoPlayer({ src, thumbnail, title, onPlay }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    onPlay?.()
  }

  if (isPlaying) {
    return (
      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video
          src={src}
          controls
          autoPlay
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden cursor-pointer group"
      onClick={handlePlay}
    >
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={title || 'Video thumbnail'}
          fill
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      )}

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Play className="w-8 h-8 text-primary-foreground fill-current" />
        </div>
      </div>

      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <p className="text-white font-semibold">{title}</p>
        </div>
      )}
    </div>
  )
}
