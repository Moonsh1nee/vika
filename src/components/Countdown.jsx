import { wedding } from '../data/wedding'

const MONTHS_SCRIPT = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
]

function OutlineHeart() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-400" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  )
}

function CalendarWidget({ weddingDate }) {
  const year = weddingDate.getFullYear()
  const month = weddingDate.getMonth()
  const day = weddingDate.getDate()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  let firstDow = new Date(year, month, 1).getDay()
  firstDow = firstDow === 0 ? 6 : firstDow - 1

  const cells = []
  for (let i = 0; i < firstDow; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div className="border border-charcoal/15 bg-white px-5 py-5 md:px-7 md:py-6">
      <p
        className="mb-5 text-center font-script text-script-light"
        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
      >
        {MONTHS_SCRIPT[month]}
      </p>

      <div className="grid grid-cols-7 gap-x-1 gap-y-2 text-center">
        {cells.map((cell, i) => (
          <div key={i} className="flex h-7 items-center justify-center">
            {cell === null ? null : cell === day ? (
              <span className="relative flex items-center justify-center">
                <OutlineHeart />
                <span className="absolute font-sans text-[10px] font-semibold text-red-400">
                  {cell}
                </span>
              </span>
            ) : (
              <span className="font-sans text-sm text-charcoal/70">{cell}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Countdown() {
  const weddingDate = new Date(wedding.date.iso)
  const monthNum = String(weddingDate.getMonth() + 1).padStart(2, '0')
  const yearShort = weddingDate.getFullYear().toString().slice(-2)

  return (
    <section className="section-frame bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">

        {/* Заголовок на одной строке */}
        <div className="mb-14 text-center md:mb-18">
          <h2>
            <span
              className="font-sans font-light uppercase text-charcoal"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', letterSpacing: '0.1em' }}
            >
              МЫ ЖДЕМ{' '}
            </span>
            <span
              className="font-script text-script-light"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.8rem)' }}
            >
              Вас
            </span>
          </h2>
        </div>

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
          {/* Числа даты */}
          <div className="flex shrink-0 flex-col items-center leading-none">
            {[wedding.date.day, monthNum, yearShort].map((val, i) => (
              <span
                key={i}
                className="block font-sans font-bold text-charcoal tabular-nums"
                style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', lineHeight: 0.92 }}
              >
                {val}
              </span>
            ))}
          </div>

          {/* Календарь */}
          <div className="w-full max-w-md flex-1 md:max-w-lg">
            <CalendarWidget weddingDate={weddingDate} />
          </div>
        </div>
      </div>
    </section>
  )
}
