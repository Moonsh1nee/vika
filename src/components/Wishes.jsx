import { wedding } from '../data/wedding'

export default function Wishes() {
  return (
    <section className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="font-sans font-light uppercase text-charcoal"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', letterSpacing: '0.22em' }}
        >
          ПОЖЕЛАНИЯ
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-sans text-sm leading-relaxed text-charcoal/60 md:text-base">
          {wedding.wishes.text}
        </p>
      </div>
    </section>
  )
}