'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const images = ['/gym-training.webp', '/gym-smith.webp', '/gym-equipment.webp', '/gym-main.webp']

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative text-white py-20 px-4 overflow-hidden min-h-[480px] flex items-center">
      {/* Background images */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center w-full">
        <p className="text-yellow-400 text-sm font-bold tracking-widest mb-4">福井県鯖江市の完全貸切パーソナルジム</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          「ダサくても<br className="md:hidden" />いいじゃない！」
        </h1>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          動きたいけど、踏み出せないあなたへ。<br />
          誰にも見られない、自分だけの空間で<br />
          あなただけのペースで始めよう。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact/"
            className="bg-yellow-400 text-navy px-8 py-4 rounded font-bold text-lg hover:bg-yellow-300 transition"
          >
            初回体験 1,000円 →
          </Link>
          <Link
            href="/price/"
            className="border border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-navy transition"
          >
            料金を見る
          </Link>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-yellow-400 w-6' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
