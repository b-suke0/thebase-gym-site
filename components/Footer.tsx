import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">THE BASE GYM</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              レンタルトレーニングルーム／パーソナルトレーニング<br />
              完全予約制・完全貸切<br />
              「ダサくてもいいじゃない！」
            </p>
          </div>

          {/* Access */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-yellow-400">アクセス・お問い合わせ</h3>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              福井県鯖江市杉本町<br />
              完全予約制 / 駐車場2台完備<br />
              <br />
              <a
                href="https://lin.ee/xVgylZJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 font-bold"
              >
                📲 LINE公式アカウント
              </a><br />
              <span className="text-xs text-gray-400">ジムに来られない方もLINEで無料相談・情報受信できます</span><br />
              <br />
              <a
                href="https://www.instagram.com/the_basegym/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-300"
              >
                Instagram @the_basegym
              </a>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-yellow-400">リンク</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href="/" className="hover:text-yellow-300 transition">トップ</Link>
              <Link href="/price/" className="hover:text-yellow-300 transition">料金</Link>
              <Link href="/faq/" className="hover:text-yellow-300 transition">よくある質問</Link>
              <Link href="/blog/" className="hover:text-yellow-300 transition">ブログ</Link>
              <Link href="/contact/" className="hover:text-yellow-300 transition">お問い合わせ</Link>
              <Link href="/privacy/" className="hover:text-yellow-300 transition">プライバシーポリシー</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} THE BASE GYM. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
