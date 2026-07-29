import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  const posts = getSortedPostsData().slice(0, 3)

  return (
    <>
      <HeroSection />

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

      {/* Trainer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">TRAINER</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">トレーナー紹介</h2>
          <div className="bg-[#f9f7f4] rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src="/trainer.png"
                  alt="トレーナー"
                  className="w-52 h-64 md:w-64 md:h-80 object-cover object-[center_15%] rounded-2xl shadow-md"
                />
                <p className="text-center text-navy font-bold mt-3">びーすけ</p>
                <p className="text-center text-gray-500 text-sm mt-1">専属トレーナー</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 leading-snug">
                  15年の継続が作る、<br className="md:hidden" />理にかなったボディメイク
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    小学校から大学までの16年間、野球一筋で白球を追い続けてきました。その現役時代に培った身体作りの基礎をベースに、16歳から本格的にウエイトトレーニングを開始。以来15年以上、欠かすことなくトレーニングを継続しています。
                  </p>
                  <p>
                    現在は「仕事や家庭と両立しながら、いかに効率よく理想の身体を作るか」をテーマに、自宅にスミスマシンや可変式ダンベルを備えたこだわりのホームジムを構築し、日々研究を重ねています。
                  </p>
                  <p>
                    長年のスポーツ経験と、15年の筋トレキャリアで得た「身体を変えるための本質」を、自身のYouTubeチャンネル等でも発信しています。
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.youtube.com/@thebase-gym/videos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition"
                  >
                    ▶ YouTubeチャンネルを見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Nutrition (全国対応・申し込み) */}
      <section id="nutrition" className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">ONLINE NUTRITION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-3">オンライン栄養管理</h2>
          <p className="text-center text-gray-600 mb-10">
            ジムに来られない方も、全国どこからでも。<br className="md:hidden" />
            <strong className="text-navy">3ヶ月後、自分で回せるように。</strong>
          </p>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* 内容 */}
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-navy text-lg mb-5">サポートの内容</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>あなた専用のカロリー・PFC設計</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>毎日の食事フィードバック（3ヶ月間）</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>毎週の振り返りレポート（全12回）</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>修了時にあなた専用の食事ルールを1枚</li>
                  <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>質問は期間中無制限・返信は24時間以内</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="bg-[#f9f7f4] text-navy rounded-full px-3 py-1 font-medium">禁酒なし</span>
                  <span className="bg-[#f9f7f4] text-navy rounded-full px-3 py-1 font-medium">外食OK</span>
                  <span className="bg-[#f9f7f4] text-navy rounded-full px-3 py-1 font-medium">自炊なしOK</span>
                  <span className="bg-[#f9f7f4] text-navy rounded-full px-3 py-1 font-medium">来店不要</span>
                  <span className="bg-[#f9f7f4] text-navy rounded-full px-3 py-1 font-medium">通話なし</span>
                </div>
              </div>

              {/* 申し込み */}
              <div className="bg-navy text-white p-8 md:p-10 flex flex-col justify-center">
                <p className="text-yellow-400 text-xs font-bold tracking-widest mb-3">APPLY</p>
                <h3 className="font-bold text-xl mb-3 leading-snug">
                  オンラインで、<br />一緒に減量を設計します
                </h3>
                <div className="mb-5">
                  <p className="text-xs text-gray-400 mb-1">3ヶ月プログラム</p>
                  <p className="text-3xl font-bold text-yellow-400">
                    月15,000<span className="text-base font-normal">円</span>
                    <span className="text-base font-normal text-gray-300"> × 3ヶ月</span>
                  </p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  公式LINEから「食事サポート希望」とメッセージを送ってください。ご相談だけでも大丈夫です。
                </p>
                <a
                  href="https://lin.ee/xVgylZJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06C755] text-white text-center px-6 py-4 rounded font-bold hover:bg-[#05b34c] transition"
                >
                  公式LINEで申し込む →
                </a>
                <Link
                  href="/nutrition/"
                  className="mt-3 text-center text-yellow-400 underline hover:text-yellow-300 transition text-sm"
                >
                  サービスの詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Menu */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-yellow-400 text-sm font-bold tracking-widest mb-2">COURSE MENU</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">コース紹介</h2>
          <p className="text-center text-gray-400 mb-6">〜完全予約制〜</p>
          <div className="bg-red-500 text-white text-center font-bold py-4 px-4 rounded-xl mb-8 text-base md:text-lg tracking-wide shadow-md">
            🎉 入会金・年会費・解約金すべて無料！
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'セルフ利用',
                regular: '2,000円',
                price: '1,500円',
                unit: '/60分',
                sub: 'オープン記念価格（期間限定）',
                features: ['完全予約・貸切', 'セルフ利用'],
                recommended: false,
              },
              {
                name: 'パーソナル',
                regular: '',
                price: '5,500円',
                unit: '/60分',
                sub: '4回券 20,000円（1回あたり5,000円）',
                features: ['マンツーマン指導', 'フォーム指導'],
                recommended: true,
              },
              {
                name: 'サクセスプラン',
                regular: '',
                price: '30,000円',
                unit: '/1ヵ月',
                sub: '週1パーソナル＋LINE食事サポート',
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
                {plan.regular && (
                  <p className={`text-sm line-through ${plan.recommended ? 'text-gray-400' : 'text-gray-500'}`}>{plan.regular}</p>
                )}
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
                <p>福井県鯖江市杉本町</p>
                <p className="mt-3 text-sm text-gray-500">完全予約制 / 駐車場2台完備</p>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                  <p className="text-sm font-bold text-green-800 mb-1">📲 LINE公式アカウント（無料）</p>
                  <p className="text-xs text-green-700 mb-2">ジムに来られない方も、トレーニング情報・食事アドバイスを無料で受け取れます</p>
                  <a
                    href="https://lin.ee/xVgylZJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded font-bold text-sm hover:bg-green-600 transition"
                  >
                    LINEで友だち追加 →
                  </a>
                </div>
              </address>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://lin.ee/xVgylZJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#06C755] text-white px-6 py-3 rounded font-bold hover:bg-[#05b34c] transition text-sm"
                >
                  公式LINEで予約
                </a>
                <a
                  href="https://www.google.com/maps?q=福井県鯖江市杉本町"
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
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">COLUMN</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">新着コラム</h2>
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
              コラム一覧を見る →
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
          <p className="mb-2 text-gray-400 line-through text-lg">3,000円</p>
          <p className="text-4xl font-bold text-yellow-400 mb-2">1,500<span className="text-xl">円</span></p>
          <p className="text-yellow-400 text-sm font-bold mb-8">オープン記念価格（期間限定・予告なく終了する場合があります）</p>
          <a
            href="https://lin.ee/xVgylZJ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06C755] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#05b34c] transition"
          >
            公式LINEで予約する →
          </a>
        </div>
      </section>
    </>
  )
}
