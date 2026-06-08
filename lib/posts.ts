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

// Affiliate hosts → auto-add rel="sponsored"
const AFFILIATE_HOSTS = [
  'a.r10.to',        // 楽天アフィリエイト
  'hb.afl.rakuten.co.jp',
  'amzn.to',         // Amazon短縮
  'amzn.asia',
  'www.amazon.co.jp',
  'amazon.co.jp',
  'px.a8.net',       // A8.net
  'h.accesstrade.net',
  'af.moshimo.com',  // もしもアフィリエイト
  'ck.jp.ap.valuecommerce.com', // バリューコマース
]

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
      // rel: auto-add "sponsored" for affiliate hosts, else just noopener/noreferrer
      rel: (element) => {
        const href = element.properties?.href
        const base = ['noopener', 'noreferrer']
        if (typeof href !== 'string') return base
        try {
          const url = new URL(href)
          if (AFFILIATE_HOSTS.includes(url.hostname)) {
            return [...base, 'sponsored']
          }
        } catch {
          // ignore invalid URL
        }
        return base
      },
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
