import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '予約・お問い合わせ',
  description: 'THE BASE GYMへのご予約・お問い合わせはこちら。初回体験1,000円のご予約も受け付けています。',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
