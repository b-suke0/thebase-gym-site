'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xpwzgkjz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-400 text-sm font-bold tracking-widest mb-3">CONTACT</p>
          <h1 className="text-3xl md:text-4xl font-bold">予約・お問い合わせ</h1>
          <p className="mt-4 text-gray-300">初回体験のご予約やご質問はこちらから</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f9f7f4]">
        <div className="max-w-2xl mx-auto">
          {/* Direct contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
            <h2 className="text-lg font-bold text-navy mb-4">直接ご連絡も歓迎です</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                📞{' '}
                <a href="tel:090-9234-6711" className="font-bold text-navy hover:underline">
                  090-9234-6711
                </a>
              </p>
              <p>
                ✉{' '}
                <a href="mailto:the-base-gym@ymail.ne.jp" className="text-navy hover:underline">
                  the-base-gym@ymail.ne.jp
                </a>
              </p>
              <p>
                📷{' '}
                <a
                  href="https://www.instagram.com/the_basegym/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  Instagram @the_basegym
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-lg font-bold text-navy mb-6">お問い合わせフォーム</h2>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-700 font-bold text-lg mb-2">送信完了しました！</p>
                <p className="text-green-600 text-sm">
                  お問い合わせいただきありがとうございます。<br />
                  2営業日以内にご返信いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-navy mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="山田 太郎"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@email.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-1">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="090-0000-0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-1">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="初回体験予約">初回体験予約（1,000円）</option>
                    <option value="ベーシックプラン予約">ベーシックプラン予約（3,000円/60分）</option>
                    <option value="ライトプラン予約">ライトプラン予約（500円/60分）</option>
                    <option value="サクセスプラン">サクセスプランについて</option>
                    <option value="その他">その他・ご質問</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-1">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="ご希望の日時や、ご質問があればお気軽にどうぞ。"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">
                    送信に失敗しました。お手数ですが、お電話またはメールにてご連絡ください。
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-yellow-400 text-navy py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition disabled:opacity-60"
                >
                  {status === 'sending' ? '送信中...' : '送信する →'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  送信後、2営業日以内にご返信いたします。
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
