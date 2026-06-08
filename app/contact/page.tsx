'use client'
import { useEffect } from 'react'

const LINE_URL = 'https://lin.ee/xVgylZJ'

export default function ContactPage() {
  useEffect(() => {
    window.location.replace(LINE_URL)
  }, [])

  return (
    <section className="bg-[#f9f7f4] py-20 px-4 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-4">📲</div>
        <h1 className="text-xl font-bold text-navy mb-3">公式LINEへ移動しています...</h1>
        <p className="text-gray-600 text-sm mb-6">
          THE BASE GYMの予約・お問い合わせは公式LINEで承っています。<br />
          自動で移動しない場合は下のボタンを押してください。
        </p>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#06C755] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#05b34c] transition"
        >
          公式LINEを開く →
        </a>
      </div>
    </section>
  )
}
