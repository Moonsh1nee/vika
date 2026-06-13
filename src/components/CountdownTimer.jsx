import { useEffect, useState } from 'react'
import { wedding } from '../data/wedding'

function pad(n) {
  return String(n).padStart(2, '0')
}

const TORN_PATH =
  'M0,50 L0,32 L35,42 L70,25 L105,38 L140,18 L175,35 L210,22 L245,40 L280,12 L315,30 L350,20 L385,38 L420,10 L455,28 L490,38 L525,18 L560,32 L595,22 L630,40 L665,8 L700,26 L735,38 L770,18 L805,30 L840,22 L875,40 L910,12 L945,28 L980,38 L1015,18 L1050,30 L1085,22 L1120,40 L1155,10 L1190,28 L1225,38 L1260,18 L1295,30 L1330,22 L1365,40 L1400,12 L1440,25 L1440,50 Z'

export default function CountdownTimer() {
  const target = new Date(wedding.date.iso).getTime()
  const [t, setT] = useState(null)

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  if (!t) return null

  const units = [
    { value: t.days, label: 'Дней' },
    { value: t.hours, label: 'Часов' },
    { value: t.minutes, label: 'Минут' },
    { value: t.seconds, label: 'Секунд' },
  ]

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <p
        className="mb-12 text-center font-sans font-bold uppercase text-charcoal md:mb-16"
        style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', letterSpacing: '0.06em' }}
      >
        ДО НАШЕЙ СВАДЬБЫ ОСТАЛОСЬ
      </p>

      <div className="relative mx-auto max-w-3xl">
        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 top-0 z-10 h-10 w-full rotate-x-180"
          style={{ fill: 'var(--color-white)' }}
        >
          <path d={TORN_PATH} />
        </svg>

        <div className="bg-paper px-6 pt-14 pb-14 md:px-16">
          <div className="grid grid-cols-4 gap-2 text-center md:gap-8">
            {units.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 md:gap-3">
                <span
                  className="font-sans font-bold tabular-nums leading-none text-charcoal"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
                >
                  {label === 'Дней' ? value : pad(value)}
                </span>
                <span
                  className="font-script text-charcoal"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <svg
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 right-0 z-10 h-10 w-full"
          style={{ fill: 'var(--color-white)' }}
        >
          <path d={TORN_PATH} />
        </svg>
      </div>
    </section>
  )
}