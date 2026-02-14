import { Metadata } from 'next'
import { pages } from '@/lib/metadata'

export const metadata: Metadata = {
  title: pages.portfolio.title,
  description: pages.portfolio.description,
  keywords: pages.portfolio.keywords,
  openGraph: {
    title: pages.portfolio.title,
    description: pages.portfolio.description,
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
