import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bravocenografia-site.vercel.app' // Atualize com seu domínio real
  
  const routes = ['', '/portfolio', '/servicos', '/sobre', '/contato'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
