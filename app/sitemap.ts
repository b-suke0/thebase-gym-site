import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/posts'

const BASE = 'https://thebase-gym.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()

  const staticPages: MetadataRoute.Sitemap = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'price', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: 'blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: 'privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE}/${path}/` : `${BASE}/`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...postPages]
}
