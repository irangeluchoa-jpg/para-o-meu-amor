import { useEffect, useRef } from 'react'

interface Props { accentColor: string; isPlaying: boolean }

const SHAPES = ['★', '✦', '·', '◆', '✿', '♡']

export function Sparkles({ accentColor, isPlaying }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const spawn = () => {
      const el = document.createElement('div')
      el.className = 'sparkle'
      const size  = 6 + Math.random() * 12
      const x     = Math.random() * window.innerWidth
      const y     = Math.random() * window.innerHeight
      const dur   = 1.2 + Math.random() * 2
      const angle = Math.random() * 360
      const dist  = 30 + Math.random() * 80
      const sx    = Math.cos(angle * Math.PI / 180) * dist + 'px'
      const sy    = Math.sin(angle * Math.PI / 180) * dist + 'px'
      const colors = [accentColor, '#ff6b8a', '#fff', '#ffb3c1', accentColor + 'cc']
      const color  = colors[Math.floor(Math.random() * colors.length)]
      const shape  = SHAPES[Math.floor(Math.random() * SHAPES.length)]

      el.style.cssText = `
        left:${x}px; top:${y}px;
        width:${size}px; height:${size}px;
        --sx:${sx}; --sy:${sy};
        animation-duration:${dur}s;
        font-size:${size}px;
        color:${color};
        display:flex; align-items:center; justify-content:center;
        border-radius:0;
        background:transparent;
        text-shadow: 0 0 6px ${color};
      `
      el.textContent = shape
      container.appendChild(el)
      setTimeout(() => el.remove(), dur * 1000)
    }

    const start = () => {
      spawn()
      timerRef.current = setInterval(spawn, 400)
    }
    const stop = () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
    }

    if (isPlaying) start(); else stop()
    return stop
  }, [isPlaying, accentColor])

  return <div ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 996 }} />
}
