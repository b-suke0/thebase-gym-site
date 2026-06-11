import Script from 'next/script'

// THE BASE GYM 専用 GA4 プロパティ（thebase-gym.com）の測定ID
const GA_ID = 'G-2B0THFKLF9'

export default function GoogleAnalytics() {
  // 測定IDが未設定（プレースホルダーのまま）の間は何も出力しない
  if (!GA_ID || GA_ID.includes('XXXX')) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
