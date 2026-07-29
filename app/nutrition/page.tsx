import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'オンライン栄養管理（食事サポート）｜4週間・全国どこからでも',
  description: '全国どこからでも受けられるオンライン栄養管理。毎日の食事にフィードバックし、あなた専用のカロリー・PFC設計を4週間サポート。禁酒も外食禁止もしません。通話・対面なし、テキストのみで完結。終わった後も自分で続けられる状態を目指します。',
}

const flow = [
  {
    num: '01',
    title: '事前ヒアリング',
    body: '身長・体重・活動量・今の食生活・目標をお伺いします。今の食事を否定することはしません。まず現状を把握するところから始めます。',
  },
  {
    num: '02',
    title: 'あなた専用のカロリー / PFC設計',
    body: '極端な糖質制限はしません。今の生活（仕事・家庭・外食の頻度）に合わせて、回せる範囲で組みます。',
  },
  {
    num: '03',
    title: '毎日の食事フィードバック（4週間）',
    body: '食べたものを写真か文章で送っていただき、その日のうちに改善点をお返しします。写真1枚でOK。凝った記録は求めません。',
  },
  {
    num: '04',
    title: '週末の振り返りレポート（全4回）',
    body: 'その週の体重推移・平均摂取カロリー・良かった点・崩れやすかった場面・翌週の調整方針を、数字と文章でお渡しします。',
  },
  {
    num: '05',
    title: '卒業後も自分で続けられる状態にする',
    body: '週が進むごとに「自分で判断できる範囲」を増やします。最終日には、あなた専用の食事ルールを1枚にまとめてお渡しします。',
  },
]

export default function NutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">ONLINE NUTRITION</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            オンライン栄養管理
          </h1>
          <p className="mt-5 text-lg text-yellow-300 font-bold">
            何を食べるか迷わなくなる4週間。
          </p>
          <p className="mt-2 text-gray-300">
            禁酒も、外食禁止も、しません。
          </p>
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 text-xs">
            <span className="bg-white/10 rounded-full px-4 py-1.5">全国どこからでもOK</span>
            <span className="bg-white/10 rounded-full px-4 py-1.5">テキストのみ・通話なし</span>
            <span className="bg-white/10 rounded-full px-4 py-1.5">来店不要</span>
          </div>
        </div>
      </section>

      {/* 前提 */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-navy text-center mb-8 leading-snug">
            痩せられない原因は、<br className="md:hidden" />意志の弱さではありません
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm space-y-4 text-gray-700 leading-relaxed">
            <p>
              私自身が毎日の食事とPFCバランスを記録し続けて分かったのは、
              <strong className="text-navy">痩せられない原因の多くは「何をどれだけ食べているか把握できていないこと」</strong>だということでした。
            </p>
            <p>
              食事は、我慢の量ではなく仕組みで決まります。コンビニでも外食でも、選び方さえ分かれば体は変わっていきます。
            </p>
            <p>
              私は仕事と家庭がある中で10年トレーニングを続けてきました。だから「時間がない」「自炊できない」という状況は、
              例外ではなく<strong className="text-navy">前提として</strong>組みます。
            </p>
          </div>
        </div>
      </section>

      {/* こんな方へ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">FOR YOU</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">こんな方へ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '自己流のダイエットが続かなかった',
              '何を食べていいか分からない',
              '仕事が忙しく自炊が難しい',
              '健康診断の数値が気になってきた',
              'ジムに通っているが体重が落ちない',
              'お酒や外食をやめたくない',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#f9f7f4] rounded-lg px-5 py-4">
                <span className="text-yellow-500 font-bold mt-0.5">✓</span>
                <p className="text-gray-700 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 内容（5ステップ） */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">CONTENTS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">サポートの内容</h2>
          <div className="space-y-4">
            {flow.map((step) => (
              <div key={step.num} className="bg-white rounded-xl p-6 shadow-sm flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-navy text-yellow-400 font-bold flex items-center justify-center text-sm">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 差別化 */}
          <div className="mt-8 bg-navy text-white rounded-xl p-8">
            <p className="text-yellow-400 text-sm font-bold mb-3">◆ 一番大事にしていること</p>
            <h3 className="text-xl font-bold mb-4">献立表を渡して終わり、にしません</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              4週間ずっと私が指摘し続けても、終わった後にご自身で判断できなければ元に戻ってしまいます。
              だから週が進むごとに、意図的に私の口出しを減らしていきます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/10 rounded-lg px-4 py-3">
                <p className="text-yellow-300 font-bold mb-1">週1〜2</p>
                <p className="text-gray-300 text-xs">私が細かくフィードバック</p>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-3">
                <p className="text-yellow-300 font-bold mb-1">週3</p>
                <p className="text-gray-300 text-xs">ご自身で予測 → 答え合わせ</p>
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-3">
                <p className="text-yellow-300 font-bold mb-1">週4</p>
                <p className="text-gray-300 text-xs">ご自身で判断 → 最終確認のみ</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-5">
              最終日には、<strong className="text-white">あなた専用の食事ルールを1枚</strong>にまとめてお渡しします。
              これ1枚あれば続けられる状態が目標です。
            </p>
          </div>
        </div>
      </section>

      {/* 私の記録 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">MY RECORD</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-4">私自身の実践記録</h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            人に勧める前に、自分の体で試しています。現在も減量を実践中です。
          </p>

          <div className="bg-[#f9f7f4] rounded-xl p-6 md:p-8">
            <p className="text-xs text-gray-500 mb-4">
              対象期間：2026年6月27日〜7月28日（日計が確定している記録22日分）
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">平均摂取カロリー</p>
                <p className="text-2xl font-bold text-navy">1,688<span className="text-sm font-normal">kcal</span></p>
                <p className="text-xs text-yellow-600 font-bold mt-1">設計値1,700との差 12kcal</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">体重</p>
                <p className="text-2xl font-bold text-navy">70.6 → 68.1<span className="text-sm font-normal">kg</span></p>
                <p className="text-xs text-gray-400 mt-1">※68.1kgは期間中の最低値</p>
              </div>
              <div className="bg-white rounded-lg px-5 py-4 text-center">
                <p className="text-xs text-gray-500 mb-1">記録の粒度</p>
                <p className="text-2xl font-bold text-navy">1品目<span className="text-sm font-normal">単位</span></p>
                <p className="text-xs text-gray-400 mt-1">目分量も明記</p>
              </div>
            </div>
            <div className="bg-white rounded-lg px-5 py-4">
              <p className="text-navy font-bold text-sm mb-2">この期間、ビールを3L飲んだ日もあります。</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                禁酒も外食禁止もしていません。その日だけを見るのではなく、週単位で帳尻を合わせる方法をお伝えします。
              </p>
            </div>
          </div>

          {/* 自分の失敗も出す */}
          <div className="mt-6 bg-white border-l-4 border-yellow-400 rounded-r-xl p-6 shadow-sm">
            <p className="font-bold text-navy mb-2">うまくいっていない点も書いておきます</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              同じ期間、私のタンパク質は平均106.8g。自分で設定した150gに対して慢性的に不足していました。
              体重は落ちても、タンパク質が足りなければ落としたくないものまで落ちている可能性があります。
              対策はシンプルで、夜のプロテインを固定化するだけで20g前後は戻せます。
              <strong className="text-navy">自分の記録にこうしてツッコミを入れられるかどうかが、食事管理の質そのものだと思っています。</strong>
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog/real-genryo-log/"
              className="inline-block border border-navy text-navy px-8 py-3 rounded font-bold hover:bg-navy hover:text-white transition text-sm"
            >
              減量記録の連載を読む →
            </Link>
          </div>
        </div>
      </section>

      {/* 進め方・条件 */}
      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">HOW IT WORKS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">やり取りの流れ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-4">1日のイメージ</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3"><span className="text-yellow-500 font-bold flex-shrink-0">朝〜夜</span><span>食べたものをその都度、写真か文章で送る</span></li>
                <li className="flex gap-3"><span className="text-yellow-500 font-bold flex-shrink-0">夜</span><span>私からその日のまとめと改善点を返信</span></li>
                <li className="flex gap-3"><span className="text-yellow-500 font-bold flex-shrink-0">週末</span><span>振り返りレポートをお渡し</span></li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">基本はこれの繰り返しです。</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-navy mb-4">お約束</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>返信は24時間以内</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>期間中の質問は無制限</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>やり取りはテキストのみ・通話や対面なし</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>サプリ・商品の販売は一切しません</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500 mt-0.5">✓</span>サボった日を責めることはしません</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">※まれに終日返信できない日があります。その場合は事前にお伝えします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-yellow-600 text-sm font-bold tracking-widest mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-10">よくあるご質問</h2>
          <div className="space-y-4">
            {[
              {
                q: '毎日の報告が大変そうです',
                a: '写真1枚で構いません。文章も「朝：食べてない」の一言でOKです。凝った記録は続かないので求めません。',
              },
              {
                q: 'サボってしまった日はどうすれば？',
                a: 'そのまま報告してください。責めることはしません。なぜそうなったかを一緒に探すだけです。崩れた日のデータの方が、改善のヒントになります。',
              },
              {
                q: '自炊がほとんどできません／外食が多いです',
                a: '問題ありません。コンビニ・外食・冷凍食品を前提に組みます。自炊できる人向けの提案しかできないなら、仕事をしている方の役に立てません。',
              },
              {
                q: 'お酒はやめないといけませんか？',
                a: 'いいえ。全面禁止にはしません。その日だけを見るのではなく、1週間の合計で調整する考え方をお伝えします。',
              },
              {
                q: '途中で体重が止まったらどうなりますか？',
                a: '停滞は来る前提で組みます。記録が残っているので、摂取量・水分・便通などの要因を1つずつ切り分けて対処します。',
              },
              {
                q: '4週間終わったら、また申し込む必要がありますか？',
                a: 'ありません。むしろ「一人で続けられる状態」で終わることを目標にしています。継続をご希望の場合のみ、ご相談ください。',
              },
              {
                q: '筋トレもやらないといけませんか？',
                a: '不要です。このサポートは食事のみです。運動されている方には、それに合わせた設計をします。',
              },
              {
                q: 'ジムに行かないと受けられませんか？',
                a: 'いいえ。全国どこからでも受けられます。来店は不要で、やり取りはすべてオンラインのテキストで完結します。',
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#f9f7f4] rounded-xl p-6">
                <p className="font-bold text-navy mb-2">Q. {item.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="bg-navy text-white py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">APPLY</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">オンラインで、一緒に減量を設計します</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
            まずは公式LINEから「食事サポート希望」とメッセージを送ってください。<br />
            今の生活を伺ったうえで、無理のない進め方をご案内します。<br />
            ご相談だけでも大丈夫です。
          </p>
          <a
            href="https://lin.ee/xVgylZJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#06C755] text-white px-10 py-4 rounded font-bold text-lg hover:bg-[#05b34c] transition"
          >
            公式LINEで申し込む →
          </a>
          <p className="text-gray-400 text-xs mt-6 leading-relaxed">
            ※本サポートは医療行為ではありません。効果を保証するものではありません。<br />
            持病がある方・通院中の方は、必ず主治医にご相談ください。
          </p>
        </div>
      </section>
    </>
  )
}
