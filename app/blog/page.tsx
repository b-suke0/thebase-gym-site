import type { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'ブログ',
  description: 'THE BASE GYMのブログ。パーソナルトレーニング・ダイエット・健康に関する情報を発信しています。',
}

const CATEGORIES = ['すべて', 'トレーニング', '栄養・食事', 'ダイエット', 'ジムについて', 'お知らせ']

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">BLOG</p>
          <h1 className="text-3xl md:text-4xl font-bold">ブログ</h1>
          <p className="mt-4 text-gray-300">トレーニング・栄養・健康に関する情報を発信中</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">記事を準備中です。しばらくお待ちください。</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
                >
                  <span className="text-xs bg-navy text-white px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-bold text-navy text-sm leading-snug group-hover:text-yellow-600 transition line-clamp-3">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-gray-500 text-xs leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}
                  <p className="mt-3 text-gray-400 text-xs">{post.date}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
