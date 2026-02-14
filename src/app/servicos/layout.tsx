import { Metadata } from 'next'
import { pages } from '@/lib/metadata'

export const metadata: Metadata = {
  title: pages.servicos.title,
  description: pages.servicos.description,
  keywords: pages.servicos.keywords,
  openGraph: {
    title: pages.servicos.title,
    description: pages.servicos.description,
  },
}

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
