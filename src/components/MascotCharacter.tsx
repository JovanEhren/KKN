export type MascotTheme = 'red' | 'teal' | 'yellow' | 'green'

interface Props {
  theme: MascotTheme
  talking: boolean
}

const THEME_COLORS: Record<MascotTheme, { hat: string; scarf: string }> = {
  red:    { hat: '#FF6B6B', scarf: '#FFA09B' },
  teal:   { hat: '#3EBDB3', scarf: '#7ADDD8' },
  yellow: { hat: '#FFC000', scarf: '#FFD93D' },
  green:  { hat: '#4BB857', scarf: '#6BCB77' },
}

export function MascotCharacter({ theme, talking }: Props) {
  const c = THEME_COLORS[theme]

  return (
    <svg viewBox="0 0 200 220" className="mascot-svg" role="img" aria-hidden="true">
      <g className="mascot-bob">
        <path d="M30,206 Q100,158 170,206 L170,222 L30,222 Z" fill={c.scarf} />
        <rect x="84" y="148" width="32" height="34" fill="#FFD9B3" />
        <circle cx="42" cy="112" r="9" fill="#FFD9B3" />
        <circle cx="158" cy="112" r="9" fill="#FFD9B3" />
        <circle cx="100" cy="108" r="58" fill="#FFD9B3" />
        <path d="M44,94 A56,56 0 0 1 156,94 L156,78 Q100,50 44,78 Z" fill={c.hat} />
        <rect x="41" y="76" width="118" height="15" rx="7.5" fill={c.hat} />
        <circle cx="80" cy="106" r="6.5" fill="#28324a" className="mascot-eye" />
        <circle cx="120" cy="106" r="6.5" fill="#28324a" className="mascot-eye" />
        <circle cx="67" cy="126" r="7.5" fill="#FF9E9E" opacity=".55" />
        <circle cx="133" cy="126" r="7.5" fill="#FF9E9E" opacity=".55" />
        {talking ? (
          <ellipse cx="100" cy="134" rx="13" ry="7" fill="#28324a" className="mascot-mouth-talk" />
        ) : (
          <path d="M82,130 Q100,144 118,130" stroke="#28324a" strokeWidth="5" fill="none" strokeLinecap="round" />
        )}
      </g>
    </svg>
  )
}
