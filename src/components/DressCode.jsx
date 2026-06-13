import Reveal from './Reveal'

// Honeycomb palette: champagne → dark chocolate
const TOP_ROW = ['#F5E2C0', '#E8CC9A', '#CEAA78', '#A87C50', '#7C5030', '#3C1E0A']
const BOT_ROW = ['#EDD8A8', '#D8BC88', '#BE9868', '#987040', '#6A4828', '#2E1408']

// Flat-top hexagon
const HEX_W = 96
const HEX_H = Math.round(HEX_W * 0.866)
const HEX_GAP = 4
const ROW2_ML = (HEX_W + HEX_GAP) / 2
const ROW_OVERLAP = Math.round(HEX_H * 0.25)

const CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

function lighten(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = Math.min(255, (n >> 16) + 50)
  const g = Math.min(255, ((n >> 8) & 0xff) + 50)
  const b = Math.min(255, (n & 0xff) + 50)
  return `rgb(${r},${g},${b})`
}

function darken(hex) {
  const n = parseInt(hex.slice(1), 16)
  const r = Math.max(0, (n >> 16) - 30)
  const g = Math.max(0, ((n >> 8) & 0xff) - 30)
  const b = Math.max(0, (n & 0xff) - 30)
  return `rgb(${r},${g},${b})`
}

function Hex({ color }) {
  return (
    <div
      style={{
        width: HEX_W,
        height: HEX_H,
        flexShrink: 0,
        clipPath: CLIP,
        background: `linear-gradient(135deg, ${lighten(color)} 0%, ${color} 45%, ${darken(color)} 100%)`,
      }}
    />
  )
}

export default function DressCode() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">

        <Reveal>
          <p className="font-script text-5xl text-taupe md:text-6xl">Dress Code</p>
          <h2 className="mt-3 font-sans text-2xl font-bold tracking-[0.3em] text-charcoal md:text-3xl">
            ПАЛИТРА МЕРОПРИЯТИЯ
          </h2>
        </Reveal>

        {/* Honeycomb */}
        <Reveal delay={0.15}>
          <div className="mt-14 flex flex-col items-center overflow-x-auto">
            <div className="flex" style={{ gap: HEX_GAP }}>
              {TOP_ROW.map((c, i) => <Hex key={i} color={c} />)}
            </div>
            <div
              className="flex"
              style={{ gap: HEX_GAP, marginTop: -ROW_OVERLAP, marginLeft: ROW2_ML }}
            >
              {BOT_ROW.map((c, i) => <Hex key={i} color={c} />)}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-12 max-w-xl font-sans text-sm leading-relaxed text-charcoal/70 md:text-base">
            Мы очень ждём и готовимся к нашему незабываемому дню! Поддержите
            нас Вашими улыбками, а также красивыми нарядами в палитре
            мероприятия
          </p>
        </Reveal>

      </div>
    </section>
  )
}
