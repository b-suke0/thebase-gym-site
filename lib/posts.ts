import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'content/posts')

// Internal hosts that should NOT open in a new tab
const INTERNAL_HOSTS = ['thebase-gym.com', 'www.thebase-gym.com']

export interface PostData {
  slug: string
  title: string
  date: string
  category: string
  description: string
  draft?: boolean
  contentHtml?: string
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        slug,
        title: matterResult.data.title as string,
        date: matterResult.data.date as string,
        category: matterResult.data.category as string,
        description: matterResult.data.description as string,
        draft: matterResult.data.draft as boolean ?? false,
      }
    })
    .filter((post) => !post.draft)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .filter((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return !matterResult.data.draft
    })
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeExternalLinks, {
      // Open external links in new tab + security/SEO-friendly rel
      target: '_blank',
      rel: ['noopener', 'noreferrer'],
      // Treat these hosts as internal (= open in same tab)
      test: (element) => {
        const href = element.properties?.href
        if (typeof href !== 'string') return false
        // Skip mailto/tel/anchor/internal-path links
        if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('/')) {
          return false
        }
        try {
          const url = new URL(href)
          return !INTERNAL_HOSTS.includes(url.hostname)
        } catch {
          return false
        }
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content)

  const contentHtml = processedContent.toString()
  return {
    slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    category: matterResult.data.category as string,
    description: matterResult.data.description as string,
    contentHtml,
  }
}
