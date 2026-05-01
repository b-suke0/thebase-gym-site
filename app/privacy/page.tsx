import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'THE BASE GYMのプライバシーポリシーページです。',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm">
          <div className="prose space-y-8 text-sm text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-base font-bold text-navy mb-3">個人情報の取り扱いについて</h2>
              <p>
                THE BASE GYM（以下「当施設」）は、お客様の個人情報の保護を重要な責務と認識し、
                以下の方針に基づいて適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">収集する個人情報</h2>
              <p>当施設では、以下の情報を収集することがあります。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>お問い合わせ内容</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">利用目的</h2>
              <p>収集した個人情報は、以下の目的で使用します。</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>ご予約・お問い合わせへの対応</li>
                <li>当施設からのご連絡・情報提供</li>
                <li>サービス改善のための分析</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">第三者への提供</h2>
              <p>
                当施設は、法令に基づく場合を除き、お客様の個人情報を事前の同意なく第三者に提供・
                開示することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">Cookieの使用</h2>
              <p>
                当サイトでは、アクセス解析のためにGoogle Analyticsを使用する場合があります。
                Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。
                このデータは匿名で収集されており、個人を特定するものではありません。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">個人情報の管理</h2>
              <p>
                当施設は、収集した個人情報の漏洩・紛失・改ざんを防ぐため、適切な安全管理措置を
                講じます。
              </p>
            </section>

            <section>
              <h2 className="text-base font-bold text-navy mb-3">お問い合わせ</h2>
              <p>
                個人情報の取り扱いに関するご質問・ご要望は、下記までご連絡ください。
              </p>
              <address className="not-italic mt-3 space-y-1">
                <p className="font-bold text-navy">THE BASE GYM</p>
                <p>〒916-0005 福井県鯖江市杉本町17-8-8</p>
                <p>TEL：<a href="tel:090-9234-6711" className="text-navy hover:underline">090-9234-6711</a></p>
                <p>MAIL：<a href="mailto:the-base-gym@ymail.ne.jp" className="text-navy hover:underline">the-base-gym@ymail.ne.jp</a></p>
              </address>
            </section>

            <p className="text-gray-400 text-xs pt-4 border-t">制定日：2024年1月</p>
          </div>
        </div>
      </section>
    </>
  )
}
