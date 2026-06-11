import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://thebase-gym.com/sitemap.xml',
    host: 'https://thebase-gym.com',
  }
}
