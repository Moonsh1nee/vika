import { wedding } from '../data/wedding'

function HeartPin({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21C12 21 5 14.5 5 9a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <path d="M14.5 8.5C13.8 7.8 12.8 7.8 12 8.7c-.8-.9-1.8-.9-2.5-.2-.7.7-.7 1.8 0 2.5L12 13.5l2.5-2.5c.7-.7.7-1.8 0-2.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Rings({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <circle cx="9" cy="12" r="4.5" />
      <circle cx="15" cy="12" r="4.5" />
    </svg>
  )
}

function Cake({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 14h16v4H4z" />
      <path d="M6 14V9a6 6 0 0 1 12 0v5" />
      <path d="M12 6v2" />
      <path d="M9.5 7.5c0-.8.7-1.5 2.5-1.5s2.5.7 2.5 1.5" />
      <path d="M14.5 4.5c.3.4.5.9.5 1.5 0 1.1-.9 2-2 2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Fireworks({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
      <circle cx="12" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      <path d="M8.5 16l-1.5 2.5M15.5 16l1.5 2.5" />
    </svg>
  )
}

const ICON_MAP = { HeartPin, Rings, Cloche: Cake, Cake, Fireworks }

export default function Schedule() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="relative mb-16 text-center md:mb-24">
          <h2
            className="font-sans font-light uppercase text-charcoal"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', letterSpacing: '0.2em' }}
          >
            ТАЙМИНГ
          </h2>
          <p
            className="font-script text-script-light"
            style={{
              fontSize: 'clamp(3.5rem, 9vw, 7rem)',
              marginTop: '-1.2rem',
              marginLeft: 'clamp(2rem, 12vw, 6rem)',
              lineHeight: 1,
            }}
          >
            Дня
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-34 w-px bg-charcoal md:left-44" />

          {wedding.schedule.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? HeartPin
            return (
              <div
                key={item.time}
                className={`relative flex items-start gap-6 md:gap-10 ${i < wedding.schedule.length - 1 ? 'mb-20 md:mb-28' : ''}`}
              >
                <div className="w-30 shrink-0 pr-5 text-right md:w-36 md:pr-8">
                  <span
                    className="font-sans font-bold tabular-nums text-charcoal"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    {item.time}
                  </span>
                </div>

                <div className="flex-1 pt-1 pl-2 md:pl-4">
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 shrink-0 text-charcoal md:h-7 md:w-7" />
                    <p
                      className="font-script text-script-light"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      {item.scriptTitle}
                    </p>
                  </div>

                  <div className="mt-2 h-px w-full max-w-sm bg-charcoal/15" />

                  <p className="mt-4 font-sans text-sm text-charcoal md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}