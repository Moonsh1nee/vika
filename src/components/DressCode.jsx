import { wedding } from '../data/wedding'

const TOP_ROW = ['#F2EBDD', '#E6D8C2', '#D6C3A6', '#C5AD8C', '#9A7048', '#5E3D24']
const BOT_ROW = ['#EDE2CC', '#DCC9AD', '#BFA080', '#8F623E', '#4A2E1A']
const CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
const GAP = 3

function satinGradient(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 0xff
  const g = (n >> 8) & 0xff
  const b = n & 0xff
  const hi = `rgb(${Math.min(255, r + 42)},${Math.min(255, g + 38)},${Math.min(255, b + 32)})`
  const lo = `rgb(${Math.max(0, r - 28)},${Math.max(0, g - 26)},${Math.max(0, b - 22)})`
  return `linear-gradient(135deg,${hi} 0%,${hex} 38%,${lo} 72%,${hex} 100%)`
}

function Hex({ color }) {
  return (
    <div
      style={{
        width: 'var(--hw)',
        height: 'calc(var(--hw) * 0.866)',
        flexShrink: 0,
        clipPath: CLIP,
        background: satinGradient(color),
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(125deg,rgba(255,255,255,0.35) 0%,transparent 45%,rgba(0,0,0,0.06) 100%)',
        }}
      />
    </div>
  )
}

export default function DressCode() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-serif text-5xl italic text-[#6B4528] md:text-6xl">Dress Code</p>
        <h2 className="mt-3 font-sans text-2xl font-light tracking-[0.3em] text-charcoal md:text-3xl">
          ПАЛИТРА МЕРОПРИЯТИЯ
        </h2>

        {/* --hw масштабируется от ширины экрана, 6 шестиугольников в ряд без overflow */}
        <div
          className="mt-14 flex flex-col items-center"
          style={{ '--hw': 'clamp(36px, calc((100vw - 64px) / 6.8), 96px)' }}
        >
          <div className="flex" style={{ gap: GAP }}>
            {TOP_ROW.map((c, i) => <Hex key={i} color={c} />)}
          </div>
          <div
            className="flex"
            style={{
              gap: GAP,
              marginTop: 'calc(var(--hw) * -0.2165)',
              marginLeft: `calc((var(--hw) + ${GAP}px) / 2)`,
            }}
          >
            {BOT_ROW.map((c, i) => <Hex key={i} color={c} />)}
          </div>

          <p className="mt-10 font-serif text-lg italic tracking-[0.35em] text-[#6B4528] uppercase md:text-xl">
            Dress Code
          </p>
        </div>

        <p className="mx-auto mt-12 max-w-xl font-sans text-sm leading-relaxed text-charcoal/70 md:text-base">
          {wedding.dressCode.text}
        </p>
      </div>
    </section>
  )
}
