import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostSlugs, getPostData, getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug)
  if (!post) notFound()

  const allPosts = getSortedPostsData()
  const currentIndex = allPosts.findIndex((p) => p.slug === params.slug)
  const prev = allPosts[currentIndex + 1] ?? null
  const next = allPosts[currentIndex - 1] ?? null

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="text-xs bg-yellow-400 text-navy px-3 py-1 rounded-full font-bold">
              {post.category}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">{post.title}</h1>
          <p className="mt-4 text-gray-400 text-sm">{post.date}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto">
          <article
            className="prose bg-white rounded-xl p-8 shadow-sm"
            dangerouslySetInnerHTML={{ __html: post.contentHtml ?? '' }}
          />

          {/* Prev / Next */}
          <nav className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/blog/${prev.slug}/`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
              >
                <p className="text-xs text-gray-400 mb-1">← 前の記事</p>
                <p className="text-sm font-bold text-navy group-hover:text-yellow-600 transition line-clamp-2">
                  {prev.title}
                </p>
              </Link>
            )}
            {next && (
              <Link
                href={`/blog/${next.slug}/`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group md:text-right"
              >
                <p className="text-xs text-gray-400 mb-1">次の記事 →</p>
                <p className="text-sm font-bold text-navy group-hover:text-yellow-600 transition line-clamp-2">
                  {next.title}
                </p>
              </Link>
            )}
          </nav>

          <div className="mt-8 text-center">
            <Link
              href="/blog/"
              className="border border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition text-sm"
            >
              ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">まずは初回体験から</h2>
        <p className="text-gray-300 mb-8">60分パーソナルトレーニング体験 1,000円</p>
        <Link
          href="/contact/"
          className="bg-yellow-400 text-navy px-10 py-4 rounded font-bold text-lg hover:bg-yellow-300 transition"
        >
          予約・お問い合わせ →
        </Link>
      </section>
    </>
  )
}
