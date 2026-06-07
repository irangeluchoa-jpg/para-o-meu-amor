import { useEffect, useRef } from 'react'

interface Props {
  accentColor: string
  isPlaying: boolean
}

const HEART_SVG = (color: string, size: number) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
             2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
             C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
             c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
`

export function FloatingHearts({ accentColor, isPlaying }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const spawnHeart = () => {
      const heart = document.createElement('div')
      heart.className = 'floating-heart'

      const size    = 10 + Math.random() * 18
      const left    = 5 + Math.random() * 90
      const dur     = 4 + Math.random() * 5
      const rise    = -(window.innerHeight * (0.55 + Math.random() * 0.45)) + 'px'
      const scaleEnd = 0.6 + Math.random() * 0.9
      const rotStart = (Math.random() * 30 - 15) + 'deg'
      const rotEnd   = (Math.random() * 60 - 30) + 'deg'

      // vary color slightly: accent or a softer pink
      const colors = [accentColor, '#ff6b8a', '#ffb3c1', '#ff8fab']
      const color  = colors[Math.floor(Math.random() * colors.length)]

      heart.style.cssText = `
        left: ${left}%;
        --rise: ${rise};
        --scale-end: ${scaleEnd};
        --rot-start: ${rotStart};
        --rot-end: ${rotEnd};
        animation-duration: ${dur}s;
        filter: drop-shadow(0 0 4px ${color}88);
      `
      heart.innerHTML = HEART_SVG(color, size)

      container.appendChild(heart)
      setTimeout(() => heart.remove(), dur * 1000)
    }

    const start = () => {
      spawnHeart()
      intervalRef.current = setInterval(spawnHeart, 900)
    }
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (isPlaying) start()
    else stop()

    return stop
  }, [isPlaying, accentColor])

  return <div ref={containerRef} className="hearts-container" />
}
