import { wedding } from '../data/wedding'

const TOP_ROW = ['#F2EBDD', '#E6D8C2', '#D6C3A6', '#C5AD8C', '#9A7048', '#5E3D24']
const BOT_ROW = ['#EDE2CC', '#DCC9AD', '#BFA080', '#8F623E', '#4A2E1A']

const HEX_W = 96
const HEX_H = Math.round(HEX_W * 0.866)
const HEX_GAP = 3
const ROW2_ML = (HEX_W + HEX_GAP) / 2
const ROW_OVERLAP = Math.round(HEX_H * 0.25)
const CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

function satinGradient(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 0xff
  const g = (n >> 8) & 0xff
  const b = n & 0xff
  const hi = `rgb(${Math.min(255, r + 42)}, ${Math.min(255, g + 38)}, ${Math.min(255, b + 32)})`
  const lo = `rgb(${Math.max(0, r - 28)}, ${Math.max(0, g - 26)}, ${Math.max(0, b - 22)})`
  return `linear-gradient(135deg, ${hi} 0%, ${hex} 38%, ${lo} 72%, ${hex} 100%)`
}

function Hex({ color }) {
  return (
    <div
      className="bg-white p-px"
      style={{
        width: HEX_W + 2,
        height: HEX_H + 2,
        flexShrink: 0,
        clipPath: CLIP,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          clipPath: CLIP,
          background: `${satinGradient(color)},
            linear-gradient(125deg, rgba(255,255,255,0.45) 0%, transparent 42%, rgba(0,0,0,0.08) 100%)`,
          backgroundBlendMode: 'soft-light, normal',
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

        <div className="mt-14 flex flex-col items-center overflow-x-auto">
          <div className="flex" style={{ gap: HEX_GAP }}>
            {TOP_ROW.map((c, i) => (
              <Hex key={i} color={c} />
            ))}
          </div>
          <div
            className="flex"
            style={{ gap: HEX_GAP, marginTop: -ROW_OVERLAP, marginLeft: ROW2_ML }}
          >
            {BOT_ROW.map((c, i) => (
              <Hex key={i} color={c} />
            ))}
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