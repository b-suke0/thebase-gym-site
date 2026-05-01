import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'THE BASE GYM｜福井県鯖江市の完全貸切パーソナルジム',
    template: '%s｜THE BASE GYM',
  },
  description: '福井県鯖江市の完全貸切型パーソナルジム。500円/60分〜。完全予約制で他の利用者と会わない、あなただけのプライベート空間。初回体験1,000円。',
  keywords: ['福井', '鯖江', 'ジム', 'パーソナルトレーニング', '貸切', '個室', 'The Base GYM'],
  openGraph: {
    siteName: 'THE BASE GYM',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
