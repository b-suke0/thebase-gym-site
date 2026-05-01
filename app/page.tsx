import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </section>

      {/* 3 Points */}
      <section id="about" className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">FEATURES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-12">THE BASE GYMの3つの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: '完全プライベート空間',
                body: 'ジムは自宅の一室。1枠1人限定の完全予約制だから、周囲を気にせず集中できます。誰かと比べることなく、自分のペースで"整える時間"を過ごせます。',
              },
              {
                num: '02',
                title: '続けやすい価格',
                body: '月1回〜のパーソナルや、セルフ利用だけでもOK。専属トレーナーが、無理なく継続できるメニューを提案します。',
              },
              {
                num: '03',
                title: 'ダサくても、やる。',
                body: '上手じゃなくていい。フォームが完璧じゃなくていい。THE BASE GYMは「まずやってみる」人の味方です。',
              },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-yellow-500 font-bold text-sm mb-2">POINT {item.num}</p>
                <h3 className="text-navy font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Menu */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-400 text-sm font-bold tracking-widest mb-2">COURSE MENU</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">コース紹介</h2>
          <p className="text-center text-gray-400 mb-10">〜完全予約制〜</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'ライトプラン',
                price: '500円',
                unit: '/60分',
                features: ['完全予約・貸切', 'セルフ利用'],
                recommended: false,
              },
              {
                name: 'ベーシックプラン',
                price: '3,000円',
                unit: '/60分',
                sub: '初回体験 1,000円',
                features: ['完全予約・貸切', 'フォーム指導'],
                recommended: true,
              },
              {
                name: 'サクセスプラン',
                price: '30,000円',
                unit: '/1ヵ月',
                sub: '50,000円/2ヵ月',
                features: ['週1回パーソナル', 'LINE食事アドバイス'],
                recommended: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 ${plan.recommended ? 'bg-white text-navy ring-2 ring-yellow-400' : 'bg-white/10 text-white'}`}
              >
                {plan.recommended && (
                  <p className="text-yellow-500 text-xs font-bold mb-2">◆ 人気No.1</p>
                )}
                <h3 className={`font-bold text-xl mb-3 ${plan.recommended ? 'text-navy' : ''}`}>{plan.name}</h3>
                <p className={`text-3xl font-bold mb-1 ${plan.recommended ? 'text-navy' : 'text-yellow-300'}`}>
                  {plan.price}<span className="text-sm font-normal">{plan.unit}</span>
                </p>
                {plan.sub && (
                  <p className={`text-sm mb-3 ${plan.recommended ? 'text-gray-500' : 'text-gray-400'}`}>{plan.sub}</p>
                )}
                <ul className={`text-sm space-y-1 ${plan.recommended ? 'text-gray-600' : 'text-gray-300'}`}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/price/"
              className="text-yellow-400 underline hover:text-yellow-300 transition text-sm"
            >
              料金詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">ACCESS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">アクセス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-bold text-lg text-navy mb-4">THE BASE GYM</p>
                <p>〒916-0005<br />福井県鯖江市杉本町17-8-8</p>
                <p className="mt-3">
                  📞 <a href="tel:090-9234-6711" className="text-navy font-bold hover:underline">090-9234-6711</a>
                </p>
                <p className="mt-1">
                  ✉ <a href="mailto:the-base-gym@ymail.ne.jp" className="text-navy hover:underline">the-base-gym@ymail.ne.jp</a>
                </p>
                <p className="mt-3 text-sm text-gray-500">完全予約制 / 駐車場2台完備</p>
              </address>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact/"
                  className="bg-navy text-white px-6 py-3 rounded font-bold hover:bg-navy-light transition text-sm"
                >
                  予約・お問い合わせ
                </Link>
                <a
                  href="https://www.google.com/maps?q=福井県鯖江市杉本町17-8-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-navy text-navy px-6 py-3 rounded font-bold hover:bg-gray-50 transition text-sm"
                >
                  Google Map
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d355.7893273939298!2d136.1680187873986!3d35.98095775022379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sja!2sjp!4v1745247398318!5m2!1sja!2sjp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">BLOG</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">新着ブログ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
              >
                <span className="text-xs bg-navy text-white px-2 py-0.5 rounded">{post.category}</span>
                <h3 className="mt-3 font-bold text-navy text-sm leading-snug group-hover:text-yellow-600 transition line-clamp-3">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-400 text-xs">{post.date}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog/"
              className="border border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition"
            >
              ブログ一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは初回体験から</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            60分パーソナルトレーニング体験。<br />
            トレーナーと一緒に、あなたに合ったメニューを見つけましょう。
          </p>
          <p className="text-4xl font-bold text-yellow-400 mb-8">1,000<span className="text-xl">円</span></p>
          <Link
            href="/contact/"
            className="bg-yellow-400 text-navy px-10 py-4 rounded font-bold text-lg hover:bg-yellow-300 transition"
          >
            予約・お問い合わせ →
          </Link>
        </div>
      </section>
    </>
  )
}
