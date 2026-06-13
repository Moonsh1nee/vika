import { useState } from 'react'
import { wedding } from '../data/wedding'

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', attending: 'yes' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (wedding.rsvp.endpoint) {
      fetch(wedding.rsvp.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).then(() => setSubmitted(true))
    } else {
      setSubmitted(true)
    }
  }

  const deadline = wedding.rsvp.deadline ?? ['01', '07', '26']

  if (submitted) {
    return (
      <section className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-lg text-center">
          <h2
            className="font-sans font-bold uppercase text-charcoal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '0.08em' }}
          >
            Спасибо!
          </h2>
          <p className="mt-4 font-sans text-sm text-charcoal/65">
            Мы получили ваш ответ и с нетерпением ждём встречи!
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative mb-14 text-center md:mb-20">
          <h2
            className="font-sans font-bold uppercase text-charcoal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.06em' }}
          >
            БУДЕМ РАДЫ ВИДЕТЬ
          </h2>
          <p
            className="font-script text-script-light"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              marginTop: '-0.25rem',
              marginLeft: 'clamp(2rem, 18vw, 12rem)',
            }}
          >
            Вас
          </p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="relative shrink-0 md:w-48">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-charcoal md:left-8" />
            <div className="flex flex-col pl-14 leading-none md:pl-16">
              {deadline.map((val, i) => (
                <span
                  key={i}
                  className="font-sans font-bold tabular-nums text-charcoal"
                  style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', lineHeight: 0.95 }}
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 space-y-8 md:pt-4">
            <p className="font-sans text-sm text-charcoal/75">
              {wedding.rsvp.subtitle}
            </p>

            <div>
              <label className="mb-3 block font-sans text-sm text-charcoal">
                Имя и фамилия
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                className="w-full border-0 border-b border-charcoal/25 bg-transparent py-2 font-sans text-charcoal outline-none focus:border-charcoal"
              />
            </div>

            <div>
              <label className="mb-4 block font-sans text-sm text-charcoal">
                Планируете ли Вы присутствовать на нашей свадьбе?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'yes', label: 'С удовольствием приду!' },
                  { value: 'no', label: 'К сожалению, не смогу' },
                ].map((opt) => (
                  <label key={opt.value} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="attending"
                      value={opt.value}
                      checked={form.attending === opt.value}
                      onChange={update('attending')}
                      className="h-4 w-4 accent-charcoal"
                    />
                    <span className="font-sans text-sm text-charcoal">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-charcoal px-12 py-3.5 font-sans text-sm text-white transition-colors hover:bg-charcoal/85"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}