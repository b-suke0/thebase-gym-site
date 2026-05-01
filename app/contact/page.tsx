export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">CONTACT</p>
          <h1 className="text-3xl md:text-4xl font-bold">予約・お問い合わせ</h1>
          <p className="mt-4 text-gray-300">LINEから気軽にご連絡ください</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-2xl mx-auto">

          {/* LINE CTA */}
          <div className="bg-white rounded-xl p-8 shadow-sm text-center mb-8">
            <div className="text-5xl mb-4">📲</div>
            <h2 className="text-xl font-bold text-navy mb-3">LINEで友だち追加</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              予約・ご質問はLINEからどうぞ。<br />
              ジムに来られない方も、トレーニング情報や<br />
              食事アドバイスを<span className="font-bold text-green-600">無料</span>で受け取れます。
            </p>
            <a
              href="https://lin.ee/xVgylZJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
            >
              LINEで友だち追加（無料）→
            </a>
          </div>

          {/* How to use LINE */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h3 className="text-base font-bold text-navy mb-4">LINEでできること</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                '初回体験（1,000円）のご予約',
                'プランについてのご質問',
                'トレーニング・食事に関する相談',
                '最新情報・キャンペーンの受け取り',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-sm text-gray-500 mb-2">Instagramもフォローお願いします</p>
            <a
              href="https://www.instagram.com/the_basegym/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-bold hover:underline text-sm"
            >
              📷 @the_basegym
            </a>
          </div>

        </div>
      </section>
    </>
  )
}
