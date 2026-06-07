import { Track } from '../data/tracklist'
import { X, Heart, Disc3, Feather } from 'lucide-react'

interface Props { track: Track; onClose: () => void }

export function Encarte({ track, onClose }: Props) {
  const paragraphs = track.letter.split('\n')

  return (
    <div
      className="anim-slide-right h-full flex flex-col overflow-hidden rounded-xl encarte-glow"
      style={{
        border: `1px solid ${track.color}33`,
        background: 'var(--surface)',
        '--enc-glow':     track.color + '0a',
        '--enc-glow-far': track.color + '05',
      } as React.CSSProperties}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{
          borderBottom: `1px solid ${track.color}22`,
          background: `linear-gradient(90deg, ${track.color}08 0%, transparent 100%)`,
        }}
      >
        <div className="flex items-center gap-2">
          <Heart size={11} fill={track.color} style={{ color: track.color }} />
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 13, letterSpacing: '0.2em',
            color: track.color,
          }}>
            ENCARTE
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 9,
            color: 'var(--fg-faint)', letterSpacing: '0.06em',
          }}>
            {String(track.id).padStart(2,'0')} · {track.title}
          </span>
        </div>
        <button
          onClick={onClose}
          className="btn-icon w-7 h-7 transition-colors hover:opacity-80"
          style={{ color: 'var(--fg-faint)' }}
        >
          <X size={14} />
        </button>
      </div>

      {/* Decorative color strip */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${track.color}, ${track.color}44, transparent)` }} />

      {/* Paper area */}
      <div className="flex-1 overflow-y-auto ruled-paper relative">
        {/* Margin line */}
        <div
          className="absolute left-12 top-0 bottom-0 w-px pointer-events-none"
          style={{ background: `${track.color}22` }}
        />
        {/* Feather icon watermark */}
        <div
          className="absolute right-4 top-4 pointer-events-none"
          style={{ opacity: 0.04 }}
        >
          <Feather size={80} style={{ color: track.color }} />
        </div>

        <div className="px-5 py-5 pl-14 relative">
          {paragraphs.map((line, i) => {
            const isSignature = line.startsWith('Seu') || line.startsWith('Com') ||
              line.startsWith('Sempre') || line.startsWith('Ardente') ||
              line.startsWith('Escrevendo') || line.startsWith('Beijos') ||
              line.startsWith('Completamente') || line.startsWith('Amando') ||
              line.startsWith('Enfeitiçado') || line.startsWith('Amo cada') ||
              line.startsWith('Te amo') || line.startsWith('Minha') ||
              line.startsWith('Seu eterno') || line.startsWith('💛') ||
              line.startsWith('❤️') || line.startsWith('💋') || line.startsWith('📱')
            return (
              <p
                key={i}
                className="ink-line"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  lineHeight: '28px',
                  minHeight: '28px',
                  color: line === '' ? 'transparent'
                    : isSignature ? track.color
                    : '#d4d4d4',
                  fontStyle: isSignature ? 'italic' : 'normal',
                  fontWeight: isSignature ? 600 : 400,
                  animationDelay: `${i * 18}ms`,
                  textShadow: isSignature ? `0 0 20px ${track.color}55` : 'none',
                }}
              >
                {line || '\u00A0'}
              </p>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{
          borderTop: `1px solid ${track.color}18`,
          background: `linear-gradient(90deg, transparent, ${track.color}06)`,
        }}
      >
        <div className="flex items-center gap-1.5">
          <Disc3 size={10} style={{ color: 'var(--fg-faint)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--fg-faint)', letterSpacing: '0.12em' }}>
            ℗ NOSSA PLAYLIST · PRODUZIDO COM AMOR
          </span>
        </div>
        <div className="flex gap-1.5">
          {[track.color, track.color + '66', track.color + '33'].map((c, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
    </div>
  )
}
