'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider hover:opacity-80 transition">
          THE BASE GYM
        </Link>

        {/* PC Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#about" className="hover:text-yellow-300 transition">ジムについて</Link>
          <Link href="/price/" className="hover:text-yellow-300 transition">料金</Link>
          <Link href="/faq/" className="hover:text-yellow-300 transition">よくある質問</Link>
          <Link href="/blog/" className="hover:text-yellow-300 transition">ブログ</Link>
          <Link
            href="/contact/"
            className="bg-yellow-400 text-navy px-4 py-2 rounded font-bold hover:bg-yellow-300 transition"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-navy-light px-4 pb-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/#about" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>ジムについて</Link>
          <Link href="/price/" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>料金</Link>
          <Link href="/faq/" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>よくある質問</Link>
          <Link href="/blog/" className="hover:text-yellow-300 transition" onClick={() => setIsOpen(false)}>ブログ</Link>
          <Link
            href="/contact/"
            className="bg-yellow-400 text-navy px-4 py-2 rounded font-bold text-center hover:bg-yellow-300 transition"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  )
}
