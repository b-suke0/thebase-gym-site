import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '料金プラン',
  description: 'THE BASE GYMの料金プラン一覧。ライト500円/60分〜、ベーシック3,000円/60分（初回体験1,000円）、サクセスプラン30,000円/月。完全予約制・完全貸切。',
}

export default function PricePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">PRICE</p>
          <h1 className="text-3xl md:text-4xl font-bold">料金プラン</h1>
          <p className="mt-4 text-gray-300">〜完全予約制〜</p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Light */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-2">ライトプラン</h2>
              <p className="text-4xl font-bold text-navy mb-1">500<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-6">/60分</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>セルフ利用（器具使い放題）</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>スミスマシン・ダンベル等完備</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>動画撮影OK</li>
              </ul>
              <p className="mt-6 text-xs text-gray-400">※トレーナー指導なし</p>
            </div>

            {/* Basic */}
            <div className="bg-white rounded-xl p-8 shadow-sm ring-2 ring-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-navy text-xs font-bold px-4 py-1 rounded-full">
                人気No.1
              </div>
              <h2 className="text-xl font-bold text-navy mb-2">ベーシックプラン</h2>
              <p className="text-4xl font-bold text-navy mb-1">3,000<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-1">/60分</p>
              <p className="text-yellow-600 text-sm font-bold mb-6">初回体験 1,000円</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>パーソナルトレーナー指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>フォームチェック・指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>目標に合わせたメニュー提案</li>
              </ul>
            </div>

            {/* Success */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-2">サクセスプラン</h2>
              <p className="text-4xl font-bold text-navy mb-1">30,000<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-1">/1ヵ月</p>
              <p className="text-gray-400 text-sm mb-6">50,000円/2ヵ月</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>週1回パーソナルトレーニング</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>LINEで食事アドバイス</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>体組成測定・記録</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>トレーニングプログラム作成</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-6">お支払い方法</h2>
          <div className="flex justify-center gap-6">
            <div className="bg-[#f9f7f4] rounded-xl px-8 py-4 text-center">
              <p className="text-2xl mb-1">💴</p>
              <p className="font-bold text-navy text-sm">現金</p>
            </div>
            <div className="bg-[#f9f7f4] rounded-xl px-8 py-4 text-center">
              <p className="text-2xl mb-1">📱</p>
              <p className="font-bold text-navy text-sm">PayPay</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">入会金・年会費・解約金は一切かかりません。</p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-12 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-8">設備・器具</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['スミスマシン', 'ダンベル各種', 'ストレッチポール', '腹筋ローラー', '筋膜リリースツール', 'バランスボール'].map((item) => (
              <div key={item} className="bg-white rounded-lg py-3 px-4 text-sm text-navy font-medium shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">まずは初回体験 1,000円から</h2>
        <p className="text-gray-300 mb-8">60分のパーソナルトレーニング体験。お気軽にどうぞ。</p>
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
