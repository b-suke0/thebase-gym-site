'use client'

import { useEffect } from 'react'

// サイト内のあらゆる「LINEリンク」のクリックを GA4 のイベントとして記録する。
// 個別ボタンを書き換えなくても、lin.ee / line.me 宛てのリンクなら自動で計測される。
export default function LineClickTracker() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.href || ''
      if (!/lin\.ee|line\.me/.test(href)) return

      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
      if (typeof gtag !== 'function') return

      // クリック位置（どのボタンか）を一緒に送る
      gtag('event', 'line_click', {
        link_url: href,
        link_text: (anchor.textContent || '').trim().slice(0, 50),
        page_path: window.location.pathname,
        // ページ遷移前に確実に送る
        transport_type: 'beacon',
      })
    }

    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return null
}
