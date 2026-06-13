import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '料金プラン',
  description: 'THE BASE GYMの料金プラン一覧。セルフ利用2,000円→オープン記念価格1,500円/60分、初回体験3,000円→記念価格1,500円、パーソナル単発5,500円・4回券20,000円、サクセスプラン30,000円/月。完全予約制・完全貸切。',
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

      {/* Trial & Self (オープン記念価格) */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-500 text-white text-center font-bold py-4 px-4 rounded-xl mb-8 text-base md:text-lg tracking-wide shadow-md">
            🎉 入会金・年会費・解約金すべて無料！いまだけオープン記念価格
          </div>
          <h2 className="text-xl font-bold text-navy text-center mb-8">まずはここから</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Trial */}
            <div className="bg-white rounded-xl p-8 shadow-sm ring-2 ring-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-navy text-xs font-bold px-4 py-1 rounded-full">
                初めての方はこちら
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">初回体験（パーソナル）</h3>
              <p className="text-gray-400 text-lg line-through">3,000円</p>
              <p className="text-4xl font-bold text-navy mb-1">1,500<span className="text-base font-normal">円</span></p>
              <p className="text-yellow-600 text-sm font-bold mb-1">オープン記念価格（期間限定）</p>
              <p className="text-gray-500 text-sm mb-6">/60分</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>トレーナーとマンツーマン</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>器具の使い方・フォーム指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>目標に合わせたメニュー相談</li>
              </ul>
            </div>

            {/* Self */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">セルフ利用（完全貸切）</h3>
              <p className="text-gray-400 text-lg line-through">2,000円</p>
              <p className="text-4xl font-bold text-navy mb-1">1,500<span className="text-base font-normal">円</span></p>
              <p className="text-yellow-600 text-sm font-bold mb-1">オープン記念価格（期間限定）</p>
              <p className="text-gray-500 text-sm mb-6">/60分</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>セルフ利用（器具使い放題）</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>スミスマシン・ダンベル等完備</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>動画撮影OK</li>
              </ul>
              <p className="mt-6 text-xs text-gray-400">※トレーナー指導なし</p>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            ※オープン記念価格は予告なく終了する場合があります　※2人でのご利用は1人あたりの料金です
          </p>
        </div>
      </section>

      {/* Personal training plans */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-navy text-center mb-8">パーソナルトレーニング</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Single */}
            <div className="bg-[#f9f7f4] rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">パーソナル単発</h3>
              <p className="text-4xl font-bold text-navy mb-1">5,500<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-6">/60分</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>マンツーマン指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>フォームチェック・指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>行きたい時だけ・都度払い</li>
              </ul>
            </div>

            {/* 4-ticket */}
            <div className="bg-[#f9f7f4] rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy mb-2">パーソナル4回券</h3>
              <p className="text-4xl font-bold text-navy mb-1">20,000<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-1">/4回分</p>
              <p className="text-yellow-600 text-sm font-bold mb-6">1回あたり5,000円</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>完全予約・貸切</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>マンツーマン指導</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>単発より1回500円おトク</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>自分のペースで消化OK</li>
              </ul>
            </div>

            {/* Success */}
            <div className="bg-white rounded-xl p-8 shadow-sm ring-2 ring-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-navy text-xs font-bold px-4 py-1 rounded-full">
                本気で変わるなら
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">サクセスプラン</h3>
              <p className="text-4xl font-bold text-navy mb-1">30,000<span className="text-base font-normal">円</span></p>
              <p className="text-gray-500 text-sm mb-1">/1ヵ月</p>
              <p className="text-gray-400 text-sm mb-6">50,000円/2ヵ月</p>
              <ul className="space-y-3 text-sm text-gray-600 border-t pt-6">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>週1回パーソナルトレーニング</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>LINEで毎日の食事アドバイス</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>体組成測定・記録</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>トレーニングプログラム作成</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            ※2人でのご利用は1人あたりの料金です
          </p>
        </div>
      </section>

      {/* Payment */}
      <section className="py-12 px-4 bg-[#f9f7f4]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-6">お支払い方法</h2>
          <div className="flex justify-center gap-6">
            <div className="bg-white rounded-xl px-8 py-4 text-center">
              <p className="text-2xl mb-1">💴</p>
              <p className="font-bold text-navy text-sm">現金</p>
            </div>
            <div className="bg-white rounded-xl px-8 py-4 text-center">
              <p className="text-2xl mb-1">📱</p>
              <p className="font-bold text-navy text-sm">PayPay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-navy mb-8">設備・器具</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['スミスマシン', 'ダンベル各種', 'ストレッチポール', '腹筋ローラー', '筋膜リリースツール', 'バランスボール'].map((item) => (
              <div key={item} className="bg-[#f9f7f4] rounded-lg py-3 px-4 text-sm text-navy font-medium shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-2">まずは初回体験から</h2>
        <p className="text-gray-300 mb-4">60分のパーソナルトレーニング体験。お気軽にどうぞ。</p>
        <p className="text-lg mb-8">
          <span className="text-gray-400 line-through">3,000円</span>
          <span className="text-yellow-400 font-bold text-2xl ml-3">→ オープン記念価格 1,500円</span>
          <span className="block text-xs text-gray-400 mt-2">※記念価格は予告なく終了する場合があります</span>
        </p>
        <a
          href="https://lin.ee/xVgylZJ"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#06C755] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#05b34c] transition"
        >
          公式LINEで予約する →
        </a>
      </section>
    </>
  )
}
