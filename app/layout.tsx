import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'THE BASE GYM｜鯖江市の完全貸切ジム・パーソナルトレーニング',
    template: '%s｜THE BASE GYM',
  },
  description: '鯖江市の完全貸切ジム「THE BASE GYM」。1,000円/60分〜のセルフ利用から、初回体験1,500円のパーソナルトレーニングまで。入会金・月額不要で通えます。',
  keywords: ['鯖江市', '鯖江', 'ジム', 'パーソナルトレーニング', 'パーソナルジム', '完全貸切', '個室', 'THE BASE GYM'],
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    siteName: 'THE BASE GYM',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://thebase-gym.com/og-trainer.png',
        width: 951,
        height: 1267,
        alt: 'THE BASE GYM トレーナー びーすけ｜福井県鯖江市の完全貸切パーソナルジム',
      },
    ],
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
