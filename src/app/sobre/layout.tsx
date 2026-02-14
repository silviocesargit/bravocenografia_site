import { Metadata } from 'next'
import { pages } from '@/lib/metadata'

export const metadata: Metadata = {
  title: pages.sobre.title,
  description: pages.sobre.description,
  keywords: pages.sobre.keywords,
  openGraph: {
    title: pages.sobre.title,
    description: pages.sobre.description,
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
