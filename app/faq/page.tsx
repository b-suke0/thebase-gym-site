import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'よくある質問',
  description: 'THE BASE GYMへのよくある質問。予約方法・料金・駐車場・持ち物・体験トレーニングについてまとめています。',
}

const faqs = [
  {
    category: '予約について',
    items: [
      {
        q: '予約はどうすればいいですか？',
        a: 'お問い合わせフォーム、またはLINE・お電話にてご希望の日時をお知らせください。空き状況を確認のうえ、折り返しご連絡いたします。',
      },
      {
        q: '当日予約はできますか？',
        a: '空きがあれば当日予約も承ります。お電話（090-9234-6711）かお問い合わせフォームよりお早めにご連絡ください。',
      },
      {
        q: 'キャンセルはできますか？',
        a: 'ご予約の変更・キャンセルはお早めにご連絡ください。当日キャンセルはできるだけお控えいただけますようお願いいたします。',
      },
      {
        q: '営業時間を教えてください。',
        a: '完全予約制のため、固定の営業時間はございません。ご希望の日時をお気軽にご相談ください。早朝・夜間も対応可能な場合があります。',
      },
    ],
  },
  {
    category: '料金について',
    items: [
      {
        q: '入会金や年会費はかかりますか？',
        a: '入会金・年会費・解約金は一切かかりません。ご利用分だけお支払いいただく、シンプルな料金体系です。',
      },
      {
        q: '支払い方法は何がありますか？',
        a: '現金・PayPayに対応しています。お支払いはご利用当日にお願いいたします。',
      },
      {
        q: '初回体験とはどんな内容ですか？',
        a: '初回体験（1,000円・60分）では、現在のお体の状態や目標をヒアリングし、パーソナルトレーナーが一緒にトレーニングします。フォームの確認や器具の使い方もお伝えします。',
      },
      {
        q: 'サクセスプランは途中解約できますか？',
        a: 'はい、いつでも解約できます。解約金は一切かかりません。',
      },
    ],
  },
  {
    category: '施設・設備について',
    items: [
      {
        q: '駐車場はありますか？',
        a: '2台分の無料駐車場をご用意しています。',
      },
      {
        q: 'どんな器具がありますか？',
        a: 'スミスマシン、各種ダンベル、ストレッチポール、腹筋ローラー、筋膜リリースツール、バランスボールなどを完備しています。',
      },
      {
        q: '更衣室やシャワーはありますか？',
        a: '着替えスペースはございますが、シャワー設備はございません。近隣の施設をご利用いただくか、トレーニング後にそのままお帰りいただく方も多いです。',
      },
      {
        q: '動画撮影はできますか？',
        a: 'はい、ライトプラン・ベーシックプランともに動画撮影OKです。フォームチェックや記録にご活用ください。',
      },
      {
        q: '何人まで利用できますか？',
        a: '1枠1組限定の完全貸切です。他のお客様と会うことはありません。',
      },
    ],
  },
  {
    category: 'トレーニングについて',
    items: [
      {
        q: '運動初心者でも大丈夫ですか？',
        a: 'もちろん大歓迎です！THE BASE GYMは「まずやってみる」人の味方です。フォームが完璧でなくても、体力に自信がなくても、一緒に無理なく始めましょう。',
      },
      {
        q: 'どんな目的に対応していますか？',
        a: 'ダイエット・体力づくり・筋力アップ・姿勢改善・健康維持など、あなたの目標に合わせたメニューをご提案します。',
      },
      {
        q: '持ち物は何が必要ですか？',
        a: '動きやすい服装、室内用の運動靴、タオル、飲み物をご持参ください。初回は特別な準備は不要です。',
      },
      {
        q: '高齢者でも通えますか？',
        a: 'はい、シニア世代の方にも多くご利用いただいています。無理のないペースで、体に合ったメニューを一緒に考えます。',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold">よくある質問</h1>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-lg font-bold text-navy border-l-4 border-yellow-400 pl-4 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-xl shadow-sm group"
                  >
                    <summary className="flex items-start gap-4 p-6 cursor-pointer list-none">
                      <span className="text-yellow-500 font-bold text-lg shrink-0">Q</span>
                      <span className="font-bold text-navy text-sm leading-relaxed pt-0.5 flex-1">
                        {item.q}
                      </span>
                      <span className="text-gray-400 shrink-0 transition-transform group-open:rotate-180">▼</span>
                    </summary>
                    <div className="flex items-start gap-4 px-6 pb-6">
                      <span className="text-navy font-bold text-lg shrink-0">A</span>
                      <p className="text-gray-600 text-sm leading-relaxed pt-0.5">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-14 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">その他のご質問はお気軽に</h2>
        <p className="text-gray-300 mb-8">お問い合わせフォームまたはお電話にてお気軽にどうぞ。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact/"
            className="bg-yellow-400 text-navy px-10 py-4 rounded font-bold text-lg hover:bg-yellow-300 transition"
          >
            お問い合わせフォーム →
          </Link>
          <a
            href="tel:090-9234-6711"
            className="border border-white text-white px-10 py-4 rounded font-bold text-lg hover:bg-white hover:text-navy transition"
          >
            090-9234-6711
          </a>
        </div>
      </section>
    </>
  )
}
