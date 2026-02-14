import { Metadata } from 'next'
import { pages } from '@/lib/metadata'

export const metadata: Metadata = {
  title: pages.contato.title,
  description: pages.contato.description,
  keywords: pages.contato.keywords,
  openGraph: {
    title: pages.contato.title,
    description: pages.contato.description,
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
